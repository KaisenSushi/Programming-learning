# Test Design and Maintenance

[Previous lesson](02-debugging.md) | [Module home](README.md) | [Exercises](exercises.md)

## Simple version

Use many small tests for small rules and fewer large tests for whole workflows. Test the edges of allowed values because bugs often appear where valid input changes into invalid input.

A growing test suite needs structure. The test pyramid is a useful planning model: many fast unit tests cover small decisions, fewer integration tests cover cooperation between components, and a small number of end-to-end tests cover important user journeys. It is not a quota. A parser may need hundreds of unit examples, while a database boundary deserves integration tests that use the same database engine as production.

Choose cases with equivalence partitions and boundaries. If valid ages are 18 through 120, representative partitions include below 18, valid, and above 120. Boundaries include 17, 18, 120, and 121. This selection is more informative than several random middle values. Add a regression case whenever a real defect reveals a missing category.

Tests should be deterministic. Freeze or inject changing inputs such as the current time. Give each test its own temporary files and records. Do not depend on execution order. Cleanup belongs in a `finally` block, context manager, or test fixture so that a failed assertion does not leave state behind. A flaky test is a defect in the test system and should be investigated promptly, not rerun until green.

Coverage reports show which statements or branches executed, but a high percentage does not prove meaningful assertions. A test can execute every line while checking nothing useful. Review mutation resistance informally by asking whether an incorrect comparison, missing validation, or changed constant would make a test fail. Keep the test readable enough that its expected behavior is obvious.

Separate environment failures from product failures. A missing module, unavailable database, or incorrect working directory may prevent a test from reaching the code under test. Continuous integration should start from a clean checkout, install declared dependencies, run formatting or static checks, and execute the suite. When a test fails only in automation, compare Python versions, operating systems, locale, time zone, filesystem behavior, and dependency versions. Stable tests give a team permission to improve code confidently because failures carry precise information.

Apply these ideas in the [exercises](exercises.md) and [project](project.md).
