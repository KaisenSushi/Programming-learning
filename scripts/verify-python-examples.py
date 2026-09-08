from __future__ import annotations

import ast
import re
import textwrap
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
FENCE = re.compile(r"```python\s*\n(.*?)```", re.DOTALL | re.IGNORECASE)
failures: list[str] = []
count = 0

for markdown in sorted(ROOT.glob("**/*.md")):
    if ".unlazy" in markdown.parts:
        continue
    text = markdown.read_text(encoding="utf-8")
    for block_number, match in enumerate(FENCE.finditer(text), start=1):
        count += 1
        try:
            ast.parse(textwrap.dedent(match.group(1)), filename=f"{markdown}:{block_number}")
        except SyntaxError as error:
            location = markdown.relative_to(ROOT).as_posix()
            failures.append(f"{location}, Python block {block_number}: {error.msg}")

if failures:
    raise SystemExit("\n".join(failures))

if count == 0:
    raise SystemExit("No Python examples were found")

print(f"python example verification passed: {count} blocks")
