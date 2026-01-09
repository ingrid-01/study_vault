**Question**:
	By using JS function, find the number of days between 2024 Feb 21 and 2024 March 3. 

**Answer**:
```js
function dateDiff(start, end) {
	return Math.floor((end - start) / 1000 / 60 / 60 / 24);
}
dateDiff(new Date(2024, 1, 21), new Date(2024, 2, 3));
```

## 1 - Create Date Objects ##

- create dates with `new Date()` constructor
```js
new Date(2024, 1, 21)
new Date(2024, 2, 3)
```

## 2 - Subtraction ##
`end - start`
### Function Parameter ###
- In a function: 
```js
function dateDiff(Start, end) {
	//...
}
```

- `start` and `end` inside the parentheses are **PARAMETERS**
	- when function is **called**, values passed are ASSIGNED to these parameters
	- these parameters automatically become **local variables** - only exist within the scope of specific function execution
## 3 - The Math: Converting Units ##
- to turn the massive number of ms back into "days"
	- `.../ 1000 / 60 / 60 / 24`
		- 1000 - ms to s
		- 60 - s to mins
		- 60 - mins to hrs
		- 24 - hrs to days
## 4 - The Rounding ##
- `Math.floor(...)`
	- round down to the nearest whole integer
		- returns 11, not 11.0