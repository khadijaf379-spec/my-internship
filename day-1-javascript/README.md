# this is my first internship lesson 
<br>
# javascript 
<br>
# Theory:

Q:

(a)
What is Javascript?

Javascript is a programming language used to create dynamic and interactive content on websites. And we use it to give instructions to computer.

(b)
How Javascript works inside the browser?

When we open a webpage, the browser downloads text files (HTML, CSS and JS). A built-in Javascript Engine (like V8 in Chrome) reads the script, translates it into machine-understandable language/code, and executes it line by line to bring the page to life through animations, clicks and dynamic updates.

(c)

Javascript engines like Google's V8 and Mozilla's Spider Monkey are complex virtual machines that convert high-level language Javascript program/code into machine-readable instructions, handling parsing, Just-In-Time (JIT) compilation, and garbage collection to achieve high execution speeds.

(d)
Compilation and interpretation

Compilation and interpretation are two different methods used to translate human readable source code into machine-executable binary code.

A compiler translates the entire program before execution, while an interpreter translates and executes the code line-by-line in real time.

(e)

Javascript is a single-threaded language meaning it has only one call stack and can execute exactly one command at a time.
A function must finish executing entirely before the engine moves on to the next task.

(f)
Synchronous (Blocking): code executes sequentially line by line. The program halts and waits for a task (like a heavy file read) to finish before moving to the next line.

Example: A simple script that stops entirely while downloading an image.

Asynchronous (Non-Blocking):
Tasks run independently in the background. The main thread continues running, and the system is notified via callbacks, promises, or events when the background task completes.

Example: fetching data from an API without freezing the UI of a webpage or app

(g)
Execution Context:
An execution context is an abstract environment created by the Javascript engine to evaluate and execute code.

Global execution Context: (GEC) is the base, default environment created by the Javascript engine whenever a script file is loaded for execution.

Memory creation phase:

The memory creation phase is the first step of the Javascript Execution context where the engine scans your code and allocates memory to variables and functions before executing a single line of code.

Code execution phase: is the second part of a program's lifecycle inside a runtime engine

During this phase, the engine evaluates and executes the source code line by line, updating memory spaces with real values rather than placeholders.

Language concepts

1- Variables:

Var: variable can be re-declared and updated. A global scope variable.

let: variable cannot be re-declared but can be updated. A block scope variable.

Const: variable cannot be re-declared or updated. A block scope variable.

2- Primitive Vs Reference data types:

The core difference b/w:

Feature: Data Types
Primitive Type: String, Number, boolean, undefined, Null, symbol, BigInt
Reference Type: Object, Array, Function, Date. etc

Feature: Memory storage
Primitive Type: Stored entirely in the stack
Reference Type: Value in the heap, reference pointer in the stack.

3- Dynamic Typing:

Javascript is a dynamically-typed language, meaning that variables are not bound to a specific data type at declaration; instead the Javascript engine interprets their types automatically at runtime based on the value assigned.

4- typeof operator:

The typeof operator in Javascript evaluates an operand and return a lowercase string representing its data type.
It is primarily used for dynamic type checking and debugging.

5- Null vs Undefined:

undefined means a variable has been declared but has not yet been assigned a value.

Null mean an assignment value that represents intentional absence of any object value.

6- Symbol and BigInt:

are two advanced primitive data types in java script introduced to solve specific structural and numerical limitations in the language.

7- Variable naming rules:

In Javascript, variables names (known as identifiers) must follow strict syntax rules enforced by the language, alongside widely accepted community conventions.

8- Best practices:

Writing modern Javascript requires minimizing bugs, ensuring high readability, and optimizing execution performance.