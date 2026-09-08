# CPU and Memory

[Previous lesson](01-binary-data.md) | [Module home](README.md) | [Next lesson](03-compilation-execution.md)

## Simple version

The CPU follows instructions and works on data. Registers and cache keep small amounts close to the CPU. RAM holds active programs, while storage keeps files after the power is off.

The central processing unit follows machine instructions. A simplified cycle fetches an instruction from memory, decodes what it means, executes it, and moves to the next instruction. Real processors overlap and reorder work for speed, but the simple cycle remains a good first model.

Registers are tiny storage locations inside the CPU. Instructions use them for operands, addresses, and intermediate results. An instruction might load a value, add two registers, compare values, or branch to another instruction address. The instruction set architecture defines the visible contract between machine code and a processor family. x86-64 and AArch64 use different instruction encodings, so one executable normally cannot run directly on both.

Memory is arranged as a hierarchy. Registers are fastest and smallest. CPU caches hold recently used data near a core. Main memory, usually RAM, holds active program data and is larger but slower. Persistent storage such as an SSD keeps files when power is removed and is slower again. Programs perform better when they access nearby data repeatedly because caches transfer blocks called cache lines.

Each running process receives a virtual address space. The operating system and hardware map virtual pages to physical memory or other backing. This gives processes isolation and lets the system manage memory flexibly. Accessing an unmapped page usually causes a fault. Virtual memory does not mean unlimited memory; heavy use can still cause allocation failure or severe slowdown.

Multiple CPU cores can execute work at the same time. Threads sharing data need synchronization. Without it, their operations may interleave and create a data race. More threads do not guarantee more speed because coordination, serial work, and memory bandwidth place limits on scaling.

These layers explain why performance guesses are unreliable. Measurement should use a realistic workload, repeated runs, and the relevant system counters. First seek correctness, then measure a specific bottleneck before changing data layout or parallelism.

Continue with [From Source to Execution](03-compilation-execution.md).
