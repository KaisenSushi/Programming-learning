# How Computers Run Programs

[Module home](README.md) | [Next lesson](02-preparing-your-workspace.md) | [Roadmap](../ROADMAP.md)

## Simple version

You write source code for people to read. Other tools turn it into instructions the computer can follow. When you run the program, the operating system gives it memory, processor time, and access to the files it is allowed to use.

A computer follows instructions, but it does not understand a program the way a person understands a recipe. At the hardware level, a processor works with machine instructions represented as bits. Source code gives people a practical language for describing those instructions. A programming language and its tools bridge the gap between readable source code and work the processor can perform.

Programs usually reach execution through compilation, interpretation, or a mixture of both. A compiler translates source code into another form before the program runs. C compilers commonly produce native machine code. An interpreter manages execution while the program is running. Python first compiles source into bytecode, then its virtual machine executes that bytecode. These categories help explain behavior, but real language implementations often combine techniques.

When you start a program, the operating system creates a process. The process receives an isolated address space, access to requested files and devices, and time on one or more processor cores. The operating system schedules many processes so that they appear to make progress together. A process can contain multiple threads, which are separate paths of execution sharing the process resources.

Memory has different jobs. Persistent storage keeps files when power is off. Main memory, usually called RAM, holds active program data and instructions. The processor also has small, fast caches and registers. You rarely control these pieces directly in beginner programs, but knowing they exist makes later topics such as performance and pointers easier to understand.

Consider this Python source:

```python
message = "Hello, learner"
print(message)
```

The file is plain text. Running `python hello.py` asks the shell to locate the Python executable and pass `hello.py` as an argument. Python reads the file, checks its syntax, creates the string value, associates it with `message`, and calls the output function. The operating system ultimately sends the characters to the terminal.

Errors are part of this pipeline. A syntax error means the language tools could not parse the source. A runtime error occurs after execution begins. A logic error produces a valid result that is not the result you intended. Learning to identify the stage of failure is more useful than memorizing individual error messages.

[Try the exercises](exercises.md) | [Check your understanding](quiz.md)
