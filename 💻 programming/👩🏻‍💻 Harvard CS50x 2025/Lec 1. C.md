```c
#include <stdio.h>

int main(void)
{
	printf("hello, world\n");
}
```
↳ equivalent to "when green flag is clicked" + "say" block in Scratch

## Source Code ##
- computers use patterns of bits to represent fundamental functionality

Input (problem) → compiler (SQUARE) → Output (solution)

Source Code (computer languages like C) → Compiler → Machine Code (binary codes)
- Compiler: translator 

Software to use: Visual Studio Code for CS50 
- can utilise cloud based software on cs50.dev

---
Graphical User Interface
- GUI
- buttons and icons etc. 

Command-line interface
- CLI
- no icons or buttons; type the name of the program that I want to run
- more power & more efficiency

VS Code
- `code hello.c` - creates a file called hello.c on VSC
- `make hello` - make = compiler; assumes that I want to make a program called 'hello' (it's a file created by the compiler for the computer to understand - bunch of 0s and 1s)
- `./hello` - run the machine code

Scratch vs. C:
- Say block → `printf("hello, world\n")`
- if I want a line break = `\n`
	- 2 line breaks = `\n\n`
- arguments → function → side effects (what happens on the screen)

`\n` - new line
`\r` - moves the cursor to the beginning of the line
`\"` - double quotation line
	e.g. `printf("hello, \"world\"\n");`
`\'` - single quotation line
`\\` - backslash

## Header Files ##
`.h` = header file
- must be included for the file to run
- in this case: `#include <stdio.h>` = standard io.h

### Libraries ###
- collection of code that someone else has written for you 
- We access it by using the HEADER FILES

- What must be inside <stdio.h>?
	- we have access to `printf`

- Libraries are documented = people wrote instructions for how to use them; tends to be online documentations
	- e.g. standard I/O file (`stdio.h`)

- MANUAL PAGES (man page)
	- documentation for C
	- written decades ago
		- more user-friendly: manual.cs50.io
			- Synopsis: what header file I should include in order to use it
			- Description: explanation of how this function works & how to use in layperson's term

- unnecessary to use ALL the libraries
	- performance gets affected
		- minimises time + energy

## functions ##

`get_string` - string means 'text'
- if I want a character, a word, a sentence, a paragraph etc. 
`get_int` - get an integer

`get_string`  in Scratch
- ask "what's your name?" and wait
- say - join hello, 'answer'

input (arguments) → functions → output (return value) 
what's your name? → ask ... and wait → answer
	`string answer = get_string("What's your name? ");` 
		→ leaving a space between the close quotation means that the cursor will float there, not go to the next line 
		→ get_string = ask
		→ ".." = prompt
		→ "answer = " = return value
			"string answer" = tell the computer what TYPE of variable (we need to be specific about what we need from the computer, this case we need text hence, string answer)
		→ semicolon = finish my thought explicitly through a semicolon

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
string answer = get_string("What's your name? ");
printf("hello, answer\n");
}
```
- When we answer "What's your name?", computer will answer "hello, answer", not "hello, Lisa"

Placeholders `%s`
```c
printf("hello, %s\n", answer);
```

Always need to recompile → by `make hello` so we get a new machine code
THEN `./hello`

`ls` = list

`cd` - command directory = double-clicking an icon

`cp` = copy

`mkdir` = make directory

`mv` = move one file to another or rename

`rm` & `rmdir` = remove or remove directory

`..` = parent directory

---
## types ##

Data types:

`string` = text
`int` = integers
`bool` = boolean values (t/f)
`char` = single character
`float` & `doubles` = real numbers w decimal point, fractions
`long` = longer integers

## format code ##

`get_int` + `%i`
### conditionals ###

In Scratch:
- If x < y than
	- say x is less than y
↳ if we have 2 variables, compare them w boolean expression + use conditional to say or not say the phrase

In C:
```c
if (x < y)
{
	printf("x is less than y\n");
}
```
- space after `if`

In Scratch:
- If x < y then
	- say x is less than y 
	- else
	- say x is not less than y

In C:
```c
if (x < y)
{
	printf("x is less than y\n");
}
else
{
	printf("x is not less than y\n");
}
```

In Scratch:
- If x < y then
	- say x is less than y 
	- else
- if x > y then
	- say x is greater than y
	- else
- if x = y then
	- say x is equal to y

In C:
```c
if (x < y)
{
	printf("x is less than y\n");
}
else if (x > y)
{
	printf("x is greater than y\n");
}
else if (x == y)
{
	printf("x is equal to y\n");
}
```

How well did I design this code?
- x is equal to y = unnecessary; as if not great or not less, it's equal to anyways
- keep it simple, don't write code that we don't need

So, to clean up:
```c
if (x < y)
{
	printf("x is less than y\n");
}
else if (x > y)
{
	printf("x is greater than y\n");
}
else
{
	printf("x is equal to y\n");
}
```
less code > more code
less room for mistakes

## operators ##

= 

<

<=

`>`

`>=`

==

!= : not equal to; exclamation mark(bang) is to invert the actual meaning

## variables ##

`int counter = 0;`

`counter = counter + 1;`
- take the current value of counter + 1

`counter += 1;`
- same as above

`counter++;`
- same as above; adds 1 value
`counter--;`
- invert the above, subtract 1 value

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
	int x = get_int("What's x? ");
	int y = get_int("What's y? ");
	
	if (x < y)
	{
		printf("x is less than y\n");
	}
}
```
![[CSlec1_booleanexp_250921_1801.png]]
 - Boolean exp.

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
	int x = get_int("What's x? ");
	int y = get_int("What's y? ");
	
	if (x < y)
	{
		printf("x is less than y\n");
	}
	else
	{
		printf("x is not less than y\n");
	}
}
```
![[CSlec1_booleanexp2_250921_1811.png]]

Design problem:
```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
	int x = get_int("What's x? ");
	int y = get_int("What's y? ");

	if (x < y)
	{
		printf("x is less than y\n");

	}
	if (x > y)
	{
		printf("x is greater than y\n");
	}

	if (x == y)
	{
		printf("x is equal to y\n");
	}
}
```
- slows the computer down as it makes the computer do unnecessary work
	- it goes through all 3 processes NEEDS to be used = 3 more times the work
	- Bad design ↓
![[CSlec1_baddeisngex_250921_1823.png]]

## char ##

`char` = single character
	`get_char`
	- only responds to one character

"" - strings
'' - single chars

`||` = or

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
	char c = get_char("Do you agree? ");
	if (c == 'y' || c == 'Y')
	{
		printf("Agreed.\n");
	}
	else if (c == 'n' || c == 'N')
	{
		printf("Not agreed.\n");
	}
}
```

Repeating a function:
- In Scratch
	- Repeat (3)
		- Say meow

* In C
	* `int i = 3;`
	* `while (i > 0)`
	* {
		* `i--;`
	* }

^this means:
- putting up 3 fingers
- while I have at least 1 finger up, do the following
- once I have done that, decrement i and do the following again
This is a "while" loop
	- Boolean expression for while loop = evaluated every time to check if I should keep going through the loop

But typically in coding, we count up, not down:
```c
#include <stdio.h>

int main(void)
{
	int i = 0;
	while (i < 3)
	{
		printf("meow\n");
		i++;
	}
}
```
↳ so i++ (increment by one until the loop ends)

```c
for (int i = 0; i < 3; i++)
{
	printf("meow\n");
}
```
↳ "for" loop; tighter code

Control-C = break out of program; Force Quit from terminal

In Scratch:
- Define a function called meow
- Play sound "meow" until done
↳ This puzzle piece then could be reused

In C:
```c
void meow(void)
{
	printf("meow\n");
}
```
↳ void meow(void) = no input or output = just does one thing

In Scratch:
- When green flag is clicked
- repeat 3
- "Meow" function

In C:
```c
int main(void)
{
	for (int i =0; i < 3; i++)
	{
		meow();
	}
}
```
↳ meow () = the empty parentheses means empty oval in Scratch

ALWAYS put the main function at the top of the file = just like "when the green flag is clicked"
- BUT since when we bring necessary function down to the bottom, sometimes the computer gets an error
- SO use "prototype" of the function
	- copy/paste the first line of my own function
```c
#include <cs50.h>
#include <stdio.h>

void meow(void);

int main(void)
{
	for (int i = 0; i < 3; i++)
	{
		meow();
	}
}

void meow(void)
{
	printf("meow\n");
}
```

In Scratch:
- Define meow "n" times
	- repeat "n"
	- Play sound "Meow" until done

In C:
```c
void meow(int n)
{
	for (int i = 0; i < n; i++)
	{
		printf("meow\n";)
	}
}
```

"do while" loop
- will do something no matter what
- potentially doing it again and again while some Q is true (e.g. n < 1)

```c
#include <cs50.h>
#include <stdio.h>

int get_positive_int(void);
void meow(int n);

int main(void)
{
	int times = get_positive_int();
	meow(times);
}

int get_positive_int(void)
{
	int n;
	do
	{
		n = get_int("Number: ");
	}
	while (n < 1);
	return n;
}

void meow(int n)
{
	for (int i = 0; i < n; i++)
	{
		printf("meow\n");
	}
}
```
- modularising it = so it can be reused

SO unlike Scratch, to use C, both INPUT and OUTPUT needs to be specified

---
## correctness, design, style ##

- Correctness - code does what its meant to do
- Design - qualitative; can structure the code better?
- Style - aesthetic; does it look good? can other people read it and understand it?

---
## Mario ##
- argument → function → side effects

```c
#include <stdio.h>

int main(void)
{
	for (int i = 0; i < 4; i++)
	{
		printf("?");
	}
	printf("\n");
}
```
- if `printf("?");` = ? doesn't go in a new line
- if `printf("?\n");` = ? shows vertically, one after another
- so `printf("?");` then `printf("\n");` after the loop, the ?s go in the same line on a new line

CONSTANTS
- when I want to keep something constant (e.g. keep n = 3 throughout the code)
- `const`

COMMENTS
- `//` 

---
## Interger overflow ##


`break` = force breaking out of a loop

When not enough bits to store bigger number (high as 4 billion OR 2 billion w negative numbers), it returns to 0
- that's INTERGER OVERFLOW
	- if you only have a finite number of bits & you keep incrementing them, computer will start to break 
		- as after the use of 32nd bit, no more bit to count from

↳ to break out from this, can use `long` = 64 bits (`%li`)
- still finite, but it's crazy big number
---
## truncation ##

- using integer in a program
- integer + integer = integer
- integer / integer = integer

need to use `f` = float; decimal number

```c
{
	int x = get_int("x: ");
	int y = get_int("y: ");

	printf("%f\n", (float) x / y);
}
```

`printf("%.5f\n", (float) x / y);`
↳ .5 = up to 5 decimal points

BUT if say `.50` → wrong answer is given, WHY?
- floating-point imprecision
	- floats use only 32 bits

---
## Data Types ##

In C (older language), we need to declare DATA TYPE of every variable that we create the first time: 
- integer
- character
- string

Built-in Data Types:

`int` 
- int data types is used for variables that will store integers
- integers always take up 4 bytes of memory (32 bits)
	- range of values they can store is necessarily limited to 32 bits worth of info. 

`unsigned int`
- unsigned is a QUALIFIER that can be applied to certain types (incl. `int`), which effectively doubles the +ve range of variables of that type, at the cost of disallowing any -ve values
	- So the integers starts at 0; no -ve numbers 
	- if I know my value will NEVER be negative, unsigned int can be used
- `short`, `long`, `const` = also QUALIFIERS

`chars`
- used for variables that will store single characters
- Characters always take up 1 byte of memory (8 bits)
	- range of values they can store is necessarily limited to 8 bits worth of info. 

`float`
- used for variables that will store floating-point values, aka *real numbers* 
- floating points values always take up 4 bytes of memory (32 bits)
	-  longer the decimal part gets, less precise it'll become
	- PRECISION PROBLEM

`double`
- used for variables that will store floating-point values, aka real numbers
- difference with `float` = DOUBLE PRECISION
	- always take up 8 bytes of memory (64 bits)
	- additional 32bits of precision allows us to be specify much more precise real numbers

`void`
- type, not a *data* type
- functions can have a void return type, which just means they don't return a value
- the parameter list of a function can also be void. It simply means the function takes no parameters
- for now, think of void more as a placeholder for "nothing"
	- it's more complex than that, but this should suffice for now

PROVIDED IN CS50 LIBRARY-

`bool`
- used for variables that will store a Boolean value; capable only of storing one of two values: TRUE or FALSE
- `#include <cs50.h>` atop my programs if you wish to use the bool type

`string`
- used for variables that will store a series of characters, which programmers typically call a *string*
- strings incl. things such as words, sentences, paragraphs, and the like
- `#include <cs50.h>`

`struct` & `typedefs`
- structures (struct) & types (typedefs)
	- afford great flexibility in creating data types you need for your programs
- struct = group integers + string into one unit
- defined types (typedefs) = create my own data types

### Creating A Variable ###
3 things: 
1. give it a type
2. give it a name
3. slap a semicolon at the end

`int number;` - number is a variable that holds integer type value
`char letter;` - letter is a variable that holds character because it's data type is char

Creating multiple variables of the same type, you specify the type name *once*, and then list as many variables of that type as I want!

`int height, width;`
`float sqrt2, sqrt3, pi;`

In general, good design to only declare a variable when I need it.

### Using a Variable ###
After a variable has been *declared*, it's no longer necessary to specify that variable's type. (In fact, doing so has some unintended consequences!)

```c
int number; // declaration
number = 17; //  assignment
char letter; // declaration
letter = 'H' // assignment

int number = 17; // initialisation
char letter = 'H'; // initialisation
```

- If I'm simultaneously declaring & setting the value of a variable (sometimes called *initialising*), I can consolidate this to one step
---
## Operators ##

ARITHMETIC OPERATORS
- In order to manipulate & work w variables & values in C, we have a number of *operators* at our disposal

`+, -, *, /`

If y = 10
`int x = y + 1;` x = 11
`x = x * 5;` x = 55

↳ value on the right gets stored in the value on the left

MODULUS OPERATORS
`%`
- gives us the remainder when the number on the left of the operator is divided by the number on the right
`int m = 13 % 4; // m is now 1`

- modulus operator can be useful when handling big numbers and needing something more meaningful
	- e.g. random number operator 0 to big number → modulus operator = whittle it down to 0 to 20

SHORTHAND
`x = x * 5;`
`x *= 5;`
↳ can use with all 5 arithmetic operators

`x++;` = increment by 1
`x--;` = decrement by 1

### Boolean Expressions ##
- comparing values
	- TRUE or FALSE
- The result of evaluating a Boolean exp. in other programming constructs such as deciding which branch in a *conditional* to take, or determining whether a *loop* should continue to run

	- sometimes `bool` can be used, but we don't have to

- In C, *every* nonzero value is equivalent to true & zero is *false*

- 2 main types of Boolean exp.: LOGICAL OPERATORS and RELATIONAL OPERATORS

#### Logical Operators ####
3 common Logical Operators

1. Logical AND (&&) is true if & only if both operands are true, otherwise false

| x     | y     | (x && y) |
| ----- | ----- | -------- |
| true  | true  | true     |
| true  | false | false    |
| false | true  | false    |
| false | false | false    |
2. Logical OR (| |) is true if and only if AT LEAST one operand is true, otherwise false

| x     | y     | (x \|\| y) |
| ----- | ----- | ---------- |
| true  | true  | true       |
| true  | false | true       |
| false | true  | true       |
| false | false | false      |
3. Logical NOT (!) inverts the value of its operand

| x     | !x    |
| ----- | ----- |
| true  | false |
| false | true  |
↳ can be read as "bang"

#### Relational Operators ####
- these behave as you would expect them to, and appear syntactically similar to how you may recall them from elementary arithmetic
	- less than <
	- less than or equal to <=
	- greater than >
	- greater than or equal to >=

- testing 2 variables for equality and inequality
	- Equality (x == y)
	- Inequality (x != y)

---
## Conditional Statements ##

- Allows programs to make decisions & take diff. forks in the road, depending on the values of variables OR user input
- C provides a few diff. way to implement conditional expressions (aka *branches*) in my programs, some of which likely look familiar from Scratch

```c
if (boolean-expression)
{

}
```
- if the `boolean-expression` evaluates to true:
	- all lines of code btw the curly braces will execute in order from top-to-bottom
- if the `boolean-expression` evaluates to false:
	- those lines of code will NOT execute

```c
if (boolean-expression)
{

}
else
{

}
```
- If the `boolean-expression` evaluates to true:
	- all lines of code btw the first set of curly braces will execute in order from top-to-bottom
- If the `boolean-expression` evaluates to false:
	- all lines of code btw the second set of curly braces will execute in order from top-to-bottom

```C
if (boolean-expr1)
{
	// first branch
}
else if (boolean-expr2)
{
	// second branch
}
else if (boolean-expr3)
{
	// third branch
}
else
{
	// fourth branch
}
```
- In C, it is possible to create an if-else, if-else change
	- In Scratch, this required nesting blocks
- As you would expect, each branch is mutually exclusive
- It's possible to create a chain of NON-MUTUALLY exclusive branches
- In this example, only the third & fourth branches are mutually exclusive. The `else` binds to the nearest `if` only

```c
int x = GetInt();
switch(x)
{
	case 1:
		printf("One!\n");
		break;
	case 2:
		printf("Two!\n");
		break;
	case 3:
		printf("Three!\n");
		break;
	default:
		printf("Sorry!\n");
}
```
- C's switch() statement is a conditional statement that permits enumeration of discrete cases, instead of relying on Boolean exp. 
- It's important to `break;` btw each case, OR you will "fall through" each case (unless that is desired beh).

```c
int x = GetInt();
switch(x)
{
	case 5:
		printf("Five, ");
	case 4:
		printf("Four, ");
	case 3:
		printf("Three, ");
	case 2:
		printf("Two, ");
	case 1:
		printf("One, ");
	default:
		printf("Blast-off!\n");
}
```
↳ so in this case, if the user types `Four`, the program will show four, three, two, one, blast-off

```c
int x;
if (expr)
{
	x = 5;
}
else
{
	 x = 6;
}

// Above is same as below

int x = (expr) ? 5 : 6;
```
- ternary operator (`? :)` is mostly a cute trick, but is useful for writing trivially short conditional branches. 
- be familiar w it, but know that you won't need to write it if you don't want to
---
## Loops ##

- Loops allow your programs to execute lines of code repeatedly, saving you from needing to copy & paste OR otherwise repeat lines of code

- C provides a few diff. ways to implement loops 

1. infinite (forever) loop
```c
while (true)
{

}
```
- the lines of code btw the curly braces will execute repeatedly from top-to-bottom, until & unless we break out of it (as w a `break;` statement) or otherwise kill our program

2. repeat-until loop
```c
while (boolean-expr)
{

}
```
- "repeat until" in Scratch
- If the `boolean-expr` evaluates to `true`:
	- all lines of code btw the curly braces will execute repeatedly, in order from top-to-bottom, until `boolean-expr` evaluates to `false` 

3. do-while loop
```c
do
{

}
while (boolean-expr);
```
- executes all lines of code btw the curly braces once, and then, if the `boolean-expr` evaluates to `true`, will go back & repeat that process until `boolean-expr` evaluates to `false`

4. for loop
```c
for (int i = 0; i < 10; i++)
{

}
```
- when wanting to repeat the body of a loop a specified number of times, in this example 10
- the process undertaken in a `for loop` is:
	- the counter variable(s) (here, i) is set
	- the Boolean exp. is checked
		- if it evaluates to true, the body of the loop executes
		- if it evaluates to false, the body of the loop does not execute
	- The counter variable is incremented, and then the Boolean exp. is check again, etc. 
```c
for (start; expr; increment)
{

}
```
- statement in "start" are executed
- expr is checked
- statements in increment aer executed, and then the expr is checked again, etc. 

### Summary ###

`while`
- use when you want a loop to repeat an unknown number of times, and possibly not at all
`
`do-while`
- use when you want a loop to repeat an unknown number of times, but at least once

`for`
- use when you want a loop to repeat a discrete number of times, though you may not know the number at the moment the program is compiled

