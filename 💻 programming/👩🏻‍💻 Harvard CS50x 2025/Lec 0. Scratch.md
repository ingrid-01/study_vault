# Lecturer #
David J. Malan (malan@harvard.edu)

Computer Science: study of information = computational thinking == PROBLEM SOLVING

Input (problem) → SQUARE → Output (solution)

Unary notation - base-1 (counting with hand)
- 31 (max. amount of number we can count with ONE human hand)
	- WHY? 
		- thumb = 1, index = 2, thumb + index = 3, middle = 4, middle + thumb = 5 etc.
		- all 5 fingers up = 31
		- THIS WAY OF COUNTING BECOMES base-2; binary (because 2 potential state of fingers - up or down)

Computers speak Binary (base-2)
- using 0 and 1 = BInary digiT = bit (0 and 1)
	- decimal system (10 number system, base-10)

Representing 0 
- lightbulb being off
Representing 1
- lightbulb being on

In our computational devices, what's being turned on or off = TRANSISTORS
- transistors store info. (0 or 1)
	- Example:
		- 3 lightbulbs off = 0
		- 1 lightbulb on, 2 off = 1
			- 1.0.0
		- So total amount that can be counted = 7
		- So 8 possibilities

123 = why is it one hundred twenty three
- 100 + 20 + 3 = in this order, has significance

O O O = 10^2 + 10^1 + 10^0
- base in this system is 10 = decimal

O O O = 4 2 1 (powers of 2)

000 = 0x4 + 0x2 + 0x1 = 0
001 = 1
010 = 2
011 = 3
100 = 4
101 = 5
110 = 6
111 = 7
1000 = 8 etc. 
- more transistors are thrown into the computer for bigger numbers

Bytes are used more familiar, more useful than bits
1 bytes = 8 bits

00000000 = 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
11111111 = 255 and 256 total possibility (incl. 0)

---

## Representing Letters ##

When only 0s and 1s are only thing available:
	A → 01000001 = 65
	B → 01000010 = 66
	a → 11000001 = 97
	b → 11000010 = 98
		- ASCII (American Standard Code for Information Interchange)
		- Only uses 8 bits = 256 representation = can represent English speaking languages
		- Alphabets (uppercase and lowercase), symbols

01001000 | 01001001 | 00100001
- 3 bytes = 3 sets of 8 bits = each represents single letter in ASCII
- 72 | 72 | 33 = Hi!
	- txt msg was sent through computer

Unicode = newer representation system (all human languages, pictograms, emojis, symbols)

11110000100111111001100010000010 = 4036991106 = 😂
- diff. artists render the same number diff. ways
	- hence, iOS, android, apps like telegram all have slightly diff. images/gifs of the same emojis

---

## Representing Colours, Vids, Sounds ##

RGB
- each dots = pixels = are given some number of bits for colour
	- 3 numbers in total = 3 bytes = 24 bits per pixel
	- 72 | 73 | 33 = med Red | med Green | little Blue
		- color code for a single dot = YELLOW
- 1 photograph = 1 megabyte / 10 megabyte

Videos = motion pictures
- whole bunch of images flipped through fast enough, our brain interpret it as a motion
- NOT continuous frame → 24 or 30  frames of images per second etc. 
	- That's why they are gigabytes worth

Sound
- each number could represent to frequency
	- pitch for first number
	- second number for volume
	- third number for duration
	- fourth byte = instrument type? etc.

---

## Algorithms ##

step-by-step instruction to solve a problem

E.g. Looking through a phonebook for someone named John Harvard - flicking through page by page => Is this a correct Algorithm?
- Yes. 
	- BUT tedious. Howabout, doubling (2, 4, 6, 8)?
		- No, as we could miss it. 
	- Doing J to K, and double-back just in case we've missed it
		- Yes. 

What it's happening now with computers:
- opens phonebook in the middle, lands on M.
	- rips the book in half, throw the one half of book away
	- continues until John Harvard's name
	- THIS will happen roughly 10 times until problem is solved

Is the code well-designed? Better than before, better than what someone else designed? 

![[CSlec0_algorithmexample_250906_1901.png]]

 - Red line = 1st algorithm
 - Yellow line = 2nd solution
 - Green line = the final algorithm
	 - it gets flatter and flatter but never flat

Power of algorithm
- being able to navigate big data (size of google, AI training sets)
- perform faster and more usable

Implementing algorithms
- translating them to code

Pseudocode  - say what we want to say but very succinctly
```
1  Pick up phone book
2  Open to middle of phone book
3  Look at page
4  If person is on page
5    Call person
6  Else if person is earlier in book
7    Open to middle of left side of book
8    Go back to line 3
9  Else if person is later in book
10   Open to middle of right side of book
11   Go back to line 3
12  Else
13   Quit 
```

- stupid issue when computer freezes or reboots = someone made a mistake and didn't code the extra  scenario that actually bound to happen
	- hence, by default could freeze or reboot

![[CSlec0_pseudocodeexample_250906_1912.png]]
- Functions → Verbs / actions (bite-sized tasks that computers can do for us)
	- also, arguments, return values, variables

![[CSlec0_pseudocodeexample2_250906_1915.png]]
- Conditionals → decision made from questions (forked road)

![[CSlec0_pseudocodeexample3_250906_1917.png]]
- said- questions → Boolean Expressions (Qs with yes or no answer; 2 possibilities)
	- Indentation matters - has logical significance

![[CSlec0_pseudocodeexample4_250906_1919.png]]
- Loop → creates a cycle to return 
	- not induce infinite loops BECAUSE we'll stop going back to line 3
		- we keep dividing and conquering the problem
		- eventually, we'll run out of phonebook to find John Harvard is either ON the phonebook or NOT on the phonebook

When it won't respond to you anymore: 
- BUG → mistake made in coding
---

## Artificial Intelligence ##

E.g. Chatbot
```
If student says helㅣo
	Say hello
Else if student says goodbye
	Say goodbye
Else if student asks how you are
	Say well
```

But in LLMs like ChatGPT, this isn't possible
- so to implement to AI, put A LOT of data
- neural network → provides A LOT of input and for it to produce a solution 
	- use statistics and probability to try to output most likely answer to the question and HOPE that it's correct

Persona of CS50 and general programming is a RUBBER DUCK
- talk to the duck about the confusion I'm having
- Explanating logically what I want to do verbally, is a valuable programming techniques

Not Reasonable - Using AI-based software other than CS50's own
- CS50.ai
- CS50.dev

---

## C ##
```
#include <stdio.h>

int main(void)
{
	printf("hello, world\n);
}
```
- most popular language 
	- it's very fast for devices to function

---

## Scratch ##

scratch.mit.edu

- purple puzzle pieces in Scratch = **functions**
	- side-effect of the function = what we see with the cat and speech bubble 

hello, world! (input) → SAY (purple puzzle piece) → Output (cat that says "hello, world!")

Return Value: virtually handed back to you and reused

- What's your name? (input) → ask...wait (algorithm) → answer (output)

- hello, answer (input) → join block (algorithm) → hello, David (output)

- hello, David (input) → say block (algorithm) → hello, David speaking cat (output)

↳ same idea as using parentheses in mathematics

Making Cat meow three times:
- if repeating an action 3 times, it's foolish 
	- DON'T REPEAT MYSELF
	- simplify, don't make room for a mistake
	- 