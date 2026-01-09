- *HTML* - provides structure to the content appearing on a website = Declarative Language (tells the interpreter what to do, not how to do it)
	↳ i.e. images, texts, vids
	- right-click on a page → "Inspect" → HTML panel 
- HyperText Markup Language
	- *Markup* = structure & presentation of RAW text
	- HTML interprets RAW texts in HTML elements
	- *HyperText* = text that can provide access to other texts → links a.k.a hyperlinks
# 1. HTML Anatomy #
- HTML = composed of *elements* 
	↳ elements = structure WP & define content
[[3.ii. Learn What to Learn - Paths in Programming#HTML]]

In an element, there are:-
1. Element = unit of content
2. HTML Tag = `<` and `>`
3. Opening Tag = first HTML tag used - i.e. `<h1>`
4. Content = info contained btw the tags
5. Closing Tag = second HTML tag used to end an element; has a forward slash - i.e. `</h1>`
## The Body ##
- *body* element
	↳ `<body>`
		`<p>Hello World!</p>`
	`</body>`
- within the body, many diff. types of content (text, imgs, buttons) can be added to the body
## HTML Structure ##
- HTML → a collection of family tree relationships
	↳ i.e. `<p>` tags within `<body>` tags
	- element contained inside another element = *child* of that element
		↳ child element = *nested* inside the *parent* element
		`<body>`
			`<p>This paragraph is a child of the body</p>`
		`</body>`
			↳ `<p>` = child element
			`<body>` = parent element
			`<p>` is nested inside `<body>`
		==IMPORTANT==
		* There are multiple lvls of nesting SO using two spaces within each line is better for readability
	* Relationship btw elements and their elements & descendent = *hierarchy*
		`<body>`
		 `<div>`
		    `<h1>Sibling to p, but also grandchild of body</h1>`
		    `<p>Sibling to h1, but also grandchild of body</p>`
		 `</div>`
		`</body>`  
## Headings ##
- In HTML, there are ==6 diff. headings== or *heading elements* 
	↳ used for titling sections, articles, other forms of content
	-  `<h1>` - main heading; rest are subheadings
		↳ `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
## Divs ##
* `<div>` element = short for "division" OR container dividing the pgs into sections
	- e.g. 
	`<body>`
	 `<div>`
	    `<h1>Why use divs?</h1>`
	    `<p>Great for grouping elements!</p>`
	 `</div>`
	`</body>`
- no visual representation BUT groups HTML elements  to apply the same styles for all HTML elements inside
	- Useful in CSS!
## Attributes ##
* to expand an element's tag → *attributes*
* added to opening tag for providing info. or changing styling
	- Needs 2 parts:-
		- *name* of the attribute
		- *value* of the attribute
			- e.g `id` - specify content; helpful when using more than once
			`div id="intro">`
			 `<h1>Introduction</h1>`
			`</div>`
## Displaying Text ##
- to use txt in HTML, use:-
	- *paragraph* OR
		↳ `<p>` - contain a block of plain txt
	- *span*
		↳ `<span>` - contains short pieces of text or other HTML; separate small piece from other txt on the same line. E.g.:-
			`<div>`
			 `<h1>Technology</h1>`
			`</div>`
			`<div>`
			 `<p><span style="color:blue">Self-driving Cars</span> are anticipated to replace up to 2 milion jobs over the next two decades.</p>`
			`</div>`
			↳ span element separates "self-driving cars" from the rest of the txt
			- ==Use Span== when targeting a specific piece of content that is *inline* → non-semantic; used w CSS and/or w stylistic attributes
			- ==Use div== when dividing content into *blocks*
## Styling Text ##
- `<em>` - emphasise txt → render as *italic*
- `<strong>` - highlights txt → render as **bold**
E.g.:-
`<p><strong>The Nile River</strong> is the <em>longest</em> river in the world, measuring over 6,850 kilometers long (approximately 4,260 miles).</p>`
	↳ "The Nile river" → bolded, "longest" → italics
## Line Break ##
- spacing btw code in HTML ≠ positioning of elements in browser
- to modify spacing in the browser = *line break* element = `<br>`
	↳ ==only composed of STARTING TAG==  
	`<p>The Nile River is the longest river <br> in the world, measuring over 6,850 <br> kilometers long (approximately 4,260 <br> miles).</p>`
		↳ will look:
		The Nile River is the longest river
		in the world, measuring over 6.850
		kilometers long (approximately 4,260
		miles).
## Unordered Lists ##
- organise in an easy-to-read list → *unordered list* tag (`<ul>) 
	- list of items; no particular order
	- lists w bullet points
	- needs `<li></li>` item list tags
		e.g.
		`<ul>`
		 `<li>limes</li>`
		 `<li>Tortilla</li>`
		 `<li>Chicken</li>`
		`</ul>`
		↳ will look like:
		- Limes
		- Tortillas
		- Chicken
## Ordered Lists ##
- organise list by numbers → *ordered list* tag (`<ol>`)
	- listing steps OR ranking items
		e.g.
		`<ol>`
		 `<li>Preheat the oven to 350 degrees.</li>`
		 `<li>Mix whole wheat flour, baking soda, and salt.</li>`
		 `<li>Cream the butter, sugar in separate bowl.</li>`
		 `<li>Add eggs and vanilla extract to bowl.</li>`
		`</ol>`
		↳ will look like:
		1. Preheat...
		2. Mix...
		3. Cream..
		4. Add...
## Images ##
`<img>` tags are used like this:-
	`<img src="image-location" />`
		↳ self-closing tag
		- requires *attribute* `src` → image *source* (or location) = URL (*uniform resource locator*)
## Image Alts ##
- adding accessibility
	- `alt` attribute = alternative text
	- can be added to img tag like `src` 
	- value of `alt` is a description of the image
		e.g.
		`img src="#" alt="A Field of yellow sunflowers" />`
- other purposes:-
	- if an image fails to load, user can read the brief description of the img by hovering the mouse over the intended area
	- Visually impaired users use aid of screen reading software while browsing. These softwares can read `alt` attributes
	- optimises Search Engine Optimisation (SEO) = comps can't read imgs; `alt` tags can help the WS to be found on the internet
	==BUT== 
	if the img doesn't convey meaningful info, don't use `alt`
## Videos ##
- `<video>` element requires `src` attribute + link to vid
	- e.g.
		`<video src="myVideo.mp4" width="320" height="240" controls>`
		 `Video not supported`
		`</video>`
		↳ `src` is `"myVideo.mp4"`, `width` and `height` sets vid size, `controls` instructs to incl. basic vid controls (i.e. pause, play)
		↳ `Video not supported` txt = only displayed if browser is unable to load the vid
# 2. HTML Document Standards #
## Preparing for HTML ##
How to set up an HTML file.
1. ***Document Type Declaration***
	- `<!DOCTYPE html>`
		↳ instruction; ==must be first line of code==
		↳ refers to HTML5, current standards
		- provides 2 infos. to browser: 1) type of document, 2) HTML version to expect
	- save in an **.html** extension
2. ***html Tag***
	`<!DOCTYPE html>`
	`<html>`
	
	`</html>`
	↳ this creates HTML structure & content
	- anything btw the opening & closing tags = interpreted as HTML code
	- anything OUTSIDE of these tags, may be misinterpreted by the browser
3. ***Head***
	`<head>`
	`</head>`
	- `head` element → part of HTML metaphor; above `body` element
	- `head` = *metadata* for a WP → info about page BUT not displayed directly on WP
4.  ***Page Titles***
	`<title>My Coding Journal</title>`
	- inside the `<head>` tags
	- shown on browser's tab and/or title bar
	- W3C suggests <64 characters
## Links ##
### Linking to Other Web Pages ###
* adding links = `<a>` (*anchor* element) + `href=""` (URL; *hypertext reference*) + text
	e.g.:
	* `<a href="https://www.wikipedia.org/">This Is A Link To Wikipedia</a>`
### Opening Links in a New Window ###
* `<a>` element's `target` attribute → link opening a new browser window
	↳ when you'd like the user to return to OG WP 
	`<a href="https://en.qikipedia.org/wiki/Brown_bear" target="_blank">The Brown Bear</a>`
		↳ `<a + href="" + target="_blank"> + TEXT + </a>`
			`"_blank"` instructs browser to open relevant WP in a new window
				↳ new browsers - open in new tabs, than windows
### Linking to Relative Page ###
- link to internal WP - i.e. Home, About, Contact
	- Multi-page static websites
		- HTML files are stored in *root directory* or *main folder*
		e.g. 
		`project-folder/`
		`|-- about.html`
		`|-- contact.html`
		`|-- index.html`
			↳ Because files are stored in the same folder, WPs can be linked together using a *relative path* (filename showing path to *local file* → `./index.html)
			e.g.
				`<a href="./contact.html">Contact</a>`
			- *absolute path* → full URL; `https://www.codecademy.com/learn/learn-html`; stored in a different folder
			- `./` = tells browser to look for the file in the current folder
### Linking w imgs###
- HTML can wrap almost any element into a link into an anchor element
	- can turn images to links
		e.g.
		`<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank"><img src="https://www.Prickly_Pear_Closeup.jpg" alt="A red prickly pear fruit"/></a>`
### Linking to Same Page ###
- when wanting to 'click a link' → automatically 'scroll to specific section'
	- uses `target`; e.g.
		`<p id="top">This is the top of the page!</p>`
		`<h1 id="bottom">This is the bottom!</h1>`
			↳ `p` = `id` of "top"
			`h1` = `id` of "bottom"
				↳ `id` → descriptive to make it easier to remember the purpose of a link; ==target link== → string containing `#` + target element's `id`
				 e.g.
				 `<ol>`
				   `<li><a href="#top">Top</a></li>`
				   `<li><a href="#bottom">Bottom</a></li>`
				 `</ol>`
					 ↳ `<p id="top">` and `<h1 id="bottom">` → embedded in an ordered list
					 ↑ these links will appear on browser as a numbered list of links
					 - *`id` is useful when org. content belonging to `div`*
## Tools ##
- as HTML file grows = ↑ difficult to keep track of elements
- tools to *visualise* relationship btw elements: **whitespace** and **indentation** 
### Whitespace ###
- wanting to ↑ space btw 2 para. ≠ adding space btw the `p` elements 
	↳ bcuz *browser* ignores **whitespace** in HTML files when rendered 
		∴ take advantage of this = makes it easier to code = ↑ readability

`<body><p>Paragraph 1</p><p>Paragraph 2</p></body>`
	*changes into* ↓
`<body>`
	`<p>Paragraph 1</p>`
	`<p>Paragraph 2</p>`
`</body>`
### Indentation ###
- spaces are inserted via: `space` and `tab`
	- ***World Wide Web Consortium*** (W3C) → maintains style standards of HTML
		↳ recommends 2 spaces of indentation for HTML code
### Comments ###
- adding comments to your code
	- comments begin with `<!--` and end w `-->` 
		- any characters btw ↑ will be ignored by browser
- comments are useful for:-
	1. help me & others to understand my code, esp. when reviewing later
	2. makes experimenting w codes easier; don't have to delete old code
		e.g.
		`<!-- Favourite Film Section -->`
		`<p>The following is a list of my favorite films:</p>`
			↳ comment denotes particular section of the page
		`<!-- <p> Test Code </p> -->
			↳ `p` has been ==commented out== → when experimenting w code OR returning to review OR finding a bug
### HTML Tags ###
- tags used to describe the content that they surround → helps us modify & style our content later
	- descriptive, well-chosen tags are one key to high-quality web development
**Full list of HTML tags**
https://developer.mozilla.org/en-US/docs/Web/HTML/Element
# 3. HTML Tables #
## Creating a Table ##
```html
<table>
  <tr>
    <th>Table heading placed btw table rows</th>
    <th scope="col">Saturday</th> 
    <!-- column heading; scope attributes - only 2 options: "col" or "row" -->
    <th scope="col">Sunday</th>
  </tr>
  <tr>
    <th scope="row">Temperature</th> <!-- row heading -->
    <td>73</td>
    <td>81</td>
  </tr>
  <tr>
    <th>Monday</th>
    <th>Tueday</th>
    <the>Wednesday</th>
  </tr>
  <tr>
    <td colspan="2">Out of Town</td> <!-- colspan att.=accepts intergers (1≤) to denote # of columns it spans across -->
    <td>Back in Town<td>
  </tr> <!-- from heading Mon~, O.o.T=Mon,Tues; B.i.T=Wed -->
</table>
```
Column Spanning (merge) ex.
![[Screenshot 2025-06-24 at 17.11.06.png]]

- table borders - using HTML code for borders are outdated; ==only use CSS==
```CSS
table, th, td {
  border: 1px solid black;
  font-family: Arial, sans-serif;
  text-align: center;
}
```

```html
<table>
  <thead> <!-- Table head element; useful when table grows -->
    <tr> <!-- Row 1 (1 empty cell, 2 col headings)-->
      <th></th>
      <th scope="col">Saturday</th>
      <th scope="col">Sunday</th>
    </tr>
  </thead>
  <tbody> <!-- Table body element; useful when table grows -->
    <tr> <!-- Row 2 (Morn row heading, Work - spans 2 rows under Sat col., Relax - spans 3 rows under Sun col.) --> <!--rowspan att.=data spanning multiple rows (e.g.event period in hrs, certain day) -->
      <th scope="row">Morning</th>
      <td rowspan="2">Work</td> 
      <td rowspan="3">Relax</td>
    </tr>
    <tr> <!-- Row 3 (Aftn row heading) -->
      <th scope="row">Afternoon</th>
    </tr>
    <tr> <!-- Row 4 (Even row heading, 1 Dinner entry as Relax spans into other cell) -->
      <th scope="row">Evening</th>
      <td>Dinner</td>
    </tr>
  </tbody>
</table>
```
- Only the **column** headings go under the `<thead>` element
	- ↑ 제일 윗 row만 색칠된다 or 다르게 보이게 한다
	- `scope` elements on `<th>` differentiates cols to rows.
Row Spanning (merge) ex.
![[Screenshot 2025-06-24 at 17.10.20.png]]

```html
<table>
  <thead>
    <tr>
      <th>Quarter</th>
      <th>Revenue</th>
      <th>Costs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Q1</th>
      <td>$10M</td>
      <td>$7.5M</td>
    </tr>
    <tr>
      <th>Q2</th>
      <td>$12M</td>
      <td>$5M</td>
    </tr>
  </tbody>
  <tfoot> <!-- table footer element; often used for sums, differences, and other data results -->
    <tr>
      <th>Total</th>
      <td>$22M</td>
      <td>$12.5M</td>
    </tr>
  </tfoot>
</table>
```

# 4. HTML Forms #
## Form Basics ##
`<form>` element = collects info to send somewhere else
- providing an input → the field I'm typing into = form
	- e.g. Google search bar, ChatGPT prompt, Log In page

Computers need *HTTP* request to know how to communicate w each other. 
	↳ HTTP request → instructs receiving comp. how to handle incoming info.
		- Hypertext Transfer Protocol
	↳ HTTP response → instructs sending comp. how to send it back

↓ `form` to send info. to **example.html** as a POST request
```html
<form action="/example.html" method="POST">
</form>
```
- `action` att. → determines WHERE the info. is sent
- `method` att. →assigned an HTTP verb that incl. the HTTP request
	- verbs like `POST` ≠ capitalised; BUT done out of convention. `post` will work exactly the same

↓ `form`'s child element. e.g. header, para → provides more info. 
	↓ this `form` doesn't collect any user input
```html
<form action="/example.html" method="POST">
  <h1>Creating a form</h1>
  <p>Looks like you want to learn how to create an HTML form. Well, the best way to learn is to play around with it.</p>
</form>
```
## Form Inputs ##
### Text ###
- single row text input
`<input>` incl. `<type>` att. (determines how it renders + what data it accepts)
	↳ one of `<type>` att.'s value → `"text"`
```html
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field" value="already pre-filled">
</form>
```
↳ this creates an empty box → users an type into
- `<name>` att. → necessary for `<input>` to be sent when `<form>` is submitted
- once users type something in → `value` becomes that response
	- this `value` and `name` value are paired to be sent
		- e.g. if input is `elephant`,  `name="first-text-field=elephant"` is sent
- Assigning default value:-
	- `value="already pre-filled"` = users have pre-filled text field
		- renders → "already pre-filled" inside of the given textbox
### Adding Labels ###
- Labelling the `<input>`
	- associating `<label></label>` element to `<input>` = `<input id="">` + `for` att. of `<label>`
```html
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <br>
  <input type="text" name="food" id="meal">
</form>
```
↳ rendered to: "What do you want to eat?" then a blank textbox
### Placeholder ###
`<input placeholder="_text_">`
↳ Specifies a short hint that describes the expected value of the input field
### Password Input ###
- `type="password"` att. for passwords and PINs
	- replaces characters with * or •
```html
<form>
  <label for="user-password">Password: </label>
  <input type="password" id="user-password" name="user-password">
</form>
```
↳ what we see: rendered chain of * or •
what's being send: actual password
### Number Input ###
- `type="number"` att. for number inputs
	- restricts users what they can type into input field (just numbers & a few special characters)
- `step` att. → creates arrows inside the input field (for increase or decrease of set number)
```html
<form>
  <label for="years"> Years of experience: </label>
  <input id="years" name="years" type="number" step="1">
</form>
```
↳ this renders to: "Years of experience", then blank textbox, then an up-and-down arrows → when interacted w said-arrows, numbers moved in increments of 1 infinitely (e.g. 1, 2, 3, 4)
### Range Input ###
- to restrict ranges → `type="range"`
```html
<form>
  <label for="volume"> Volume Control</label>
  <input id="volume" name="volume" type="range" min="0" max="100" step="1">
</form>
```
↳ renders to: "Volume Control" then a slider moving from left to right
* smoothness of the slider depends on `step` value
	* smaller the value = smoother
	* larger the value = more noticeable movement
### Checkbox ###
- multiple options, multiple selections input
	- `type="checkbox"`
```html
<form>
  <p>Choose your pizza toppings:</p>
  <label for="cheese">Extra cheese</label>
  <input id="cheese" name="topping" type="checkbox" value="cheese">
  <br>
  <label for="pepperoni">Pepperoni</label>
  <input id="pepperoni" name="topping" type="checkbox" value="pepperoni">
  <br>
  <label for="anchovy">Anchovy</label>
  <input id="anchovy" name="topping" type="checkbox" value="anchovy">
</form>
```
↳ renders to: "Choose your pizza toppings:", then each options with a checkbox next to it
* assigned `value` att. = checkboxes
	* hence, values not visible on the form
	* hence `label` is important!!!
* same `name` att. given = groups `input`s together
* BUT unique `id` to pair with `label`
### Radio Buttons ###
- few multiple options, single selection input
	- e.g. agree or disagree with terms and conditions
```html
<form>
  <p>What is sum of 1 + 1?</p>
  <input type="radio" id="two" name="answer" value="2">
  <label for="two">2</label>
  <br>
  <input type="radio" id="eleven" name="answer" value="11">
  <label for="eleven">11</label>
</form>
```
↳ renders to: "What is sum of 1+1", then each radio buttons appear with numbers 2, 11
	- again, like checkboxes, radio buttons don't have values
		- HENCE, `label` is ==important==
		- to group radio buttons together = same `name` is given = only one radio button from the group can be selected
### Dropdown List ###
- a range of multiple options, single selection input
```html
<form>
  <label for="lunch">What's for lunch?</label>
  <select id="lunch" name="lunch">
    <option value="pizza">Pizza</option>
    <option value="curry">Curry</option>
    <option value="salad">Salad</option>
    <option value="ramen">Ramen</option>
    <option value="tacos">Tacos</option>
  </select>
</form>
```
↳ renders to: "What's for lunch?", then a dropdown list w above menu options
- `<select>` element with multiple `<option>` elements
	- info. sent example:- `lunch=pizza` 
		- `name` and `value` of `option` will be paired
### Datalist ###
- a large range of multiple options, single selection input
	- `<datalist>` element
		- used w `<input type="text">` + `<datalist id="cities">`
			↳ this input creates text field that users can type into & filter options from `datalist`
```html
<form>
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">

  <datalist id="cities">
    <option value="New York City"></option>
    <option value="Tokyo"></option>
    <option value="Barcelona"></option>
    <option value="Mexico City"></option>
    <option value="Melbourne"></option>
    <option value="Other"></option>  
  </datalist>
</form>
```
↳ `list` att. in `input` associates w `id` of `datalist` 
↳ renders to: "Ideal city to visit?", then a blank box with cities as a selection w a dropdown arrow
- if none of the `options` match what the user's want, they can still use what's typed in. 
	- when submitted, the value of `input`'s `name` and the `value` of the option selected OR what they typed in, sent as a pair
### Textarea element ###
- multiple row/area for text input
	- `<textarea>` element
		- bigger text field like a blog post
		- `rows` and `col` atts. determine the area
```html
<form>
  <label for="blog">New Blog Post: </label>
  <br>
  <textarea id="blog" name="blog" rows="5" cols="30">
  </textarea>
</form>
```
↳ 5 rows by 30 columns; renders to: "New Blog Post:", then a big blank textbox below
	- can drag bottom right corner to expand
	- when form is submitted, value of `textarea` = text written in the box
Adding default value to the textbox:
- `<textbox>Adding default text</textarea>`
	- this renders a pre-filled text: "Adding default text"
### Submit Form ###
- Submit button
```html
<form>
  <input type="submit" value="Send">
</form>
```
↳ renders to: a button saying "Send"
- `value` assigned to `input` shows up as a text
- if no `value` att. given, `Submit` shows up on the button
## Form Validation ##
- How does a login pg work? 
- Why the combination to Username + Pswd grant access to a WS? 
	∴ ==Validation==
		↳ checking user *provided data* against *required data*

1. **Server-side Validation**
	- data sent to another machine (i.e. server) for validatioin
		- e.g. Login Page
2. **Client-side Validation**
	- data is checked on the browser (i.e. client), before being sent to server
		- **saves times** → client checks own data; server has less job to process
		- **protects serve** from malicious code/data from malicious users
		- **Quick feedback**, focuses on specific fields rather than users to fill in a whole form again when rejected
### Requiring an Input ###
- `required` att. when a field isn't optional
		↳ added to `<input>`
```html
<form action="/example.html" method="POST">
  <label for="allergies">Do you have any dietary restrictions?</label>
  <br>
  <input id="allergies" name="allergies" type="text" required>
  <br>
  <input type="submit" value="Submit">
</form>
```
↳ renders a textbox, when not filled out, shows a message "Please fill out this field." → styling of msg varies btw browsers
- W/o `required` att., users don't have to fill out the field to submit the `<form>`
### Setting Min. and Max. ###
- setting the minimum or maximum value for the # field
	- e.g. 
		`<input type="number">`
		`<input type="range">`
		- then, add `min` and/or `max` value
```html
<form action="/example.html" method="POST">
  <label for="guests">Enter # of guests:</label>
  <input id="guests" name="guests" type="number" min="1" max="4">
  <input type="submit" value="Submit">
</form>
```
↳ when rendered, and user inputs <1 or >4, shows msg: "Value must be greater than or equal to 1" or "Value must be lesser than or equal to 4"
### Text Length Check ###
- setting min. & max. values to text field
	- e.g. X(Twitter) character cap
	- there are built-in HTML5 validations!
- for minimum value: `<input minlength="5">`
- for maximum value: `<input maxlength="250">`
```html
<form action="/example.html" method="POST">
  <label for="summary">Summarize your feelings in less than 250 characters</label>
  <input id="summary" name="summary" type="text" minlength="5" maxlength="250" required>
  <input type="submit" value="Submit">
</form>
```
↳ if user tries to submit w <5 characters, it shows: "Please lengthen this text to 5 characters or more (you are currently using 2 characters)." 
and also, vice versa for >250 characters. 
### Matching a Pattern ###
- when we want users to follow a *specific* guideline = use `pattern` att. & assign it a **regular expression** a.k.a ==regex==
	- Regex (regular expression): sequence of characters that make up a search pattern; form only submitted when input matches regex
		i.e. checking valid credit card number (14-16 digit #)
		↳ regex: `[0-9]{14,16}` 
			- user can provide only numbers & min. of 14 and max. of 16 digits.
```html
<form action="/example.html" method="POST">
  <label for="payment">Credit Card Number (no spaces):</label>
  <br>
  <input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">
  <input type="submit" value="Submit">
</form>
```
↳ when tries to submit form w/o matching regex, it shows: "Please match the requested format"
# 5. Semantic HTML #
- we use *both* **non-semantic** HTML and **semantic** HTML
	- semantic: relating to meaning" → provide info. about content btw opening & closing tags
	- using non-semantic HTML = divitis = increased code complexity, accessibility issues, suboptimal SEO (search engine optimisation)
- **Semantic HTML**
	- uses HTML based on meaning, ≠ presentation
	- `div` and `span` aren't semantic = provides no context
		- e.g. rather than `<div>`, we could use `<header>, <nav>, <article>, <figure>, or <footer>`
### Why use Semantic HTML? ###
- **Accessibility** 
	- Semantic HTML allows accessibility for mobile devices & people w disabilities
		- i.e. use of screen readers, browsers interpreting codes better
- **SEO**
	- improves WS SEO (search engine optimisation)
		- process of ↑ # of people that visit the WP
		- Search engines can better identify the content + weight the most imp. content appropriately
- **Easy to Understand**
	- makes WS sources code easier to read for web developers. 

> non-semantic HTML = grocery store with no signs for the aisles
## 1. i. Header & Nav ##
- `<header>` element → navigational links OR introductory content containing `<h1> to <h6>`
```html
<header>
  <h1>
     Everything you need to know about pizza!
  </h1>
</header>
```
compared to `<div>`
```html
<div id="header">
  <h1>
    Everything you need to know about pizza!
  </h1>
</div>
```
- `<header>` tag = easier to identify than `<div>`
---------
- `<nav>` element → define a block of navigation links
	- e.g. menus, table of contents
	- `<nav>` can be used inside `<header>` or on its own
```html
<header> 
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>  	
    </ul>
  </nav>
</header>
```
↳ use of `<nav>` to label navigation links = easier for us + browsers + screen readers to read the code
## 1. ii. Main & Footer ##
- `<main>`
	- encapsulate the dominant content within a WP
	- separate from `<nav>` & `<footer>` (these 2 don't contain the principal content)
	- by using `<main>` instead of `<div>` = can better identify the BULK of the content
```html
<main>
  <header>
    <h1>Types of Sports</h1>
  </header>
  <article>
    <h3>Baseball</h3>
    <p>
      The first game of baseball was played in Cooperstown, New York in the summer of 1839.
    </p>
  </article>
</main>
```
↳ `<main>` = parent of `<article>` and `<header>` → holds the most imp. infos

---------
- `<footer>`
	- content @ bottom of the subject info.
		- e.g. Contact info, Copyright info, Terms of Use, Site Map, Reference to top of page links
```html
<footer>
  <p>Email me at Codey@Codecademy.com</p>
</footer>
```
↳ ==separate== from `<main>`
## 2. i. Article & Section ##
- `<sections>`
	- defines elements in a document - i.e. chapters, headings, other area of doc w same these
		- e.g. In a theme of insects, a `<section>` can be about crickets, another could be `<dragonflies>`
```html
<section>
  <h2>Fun Facts About Cricket</h2> 
</section>
```
---
- `<articles>`
	- holds content that makes sense on its own - i.e. articles, blogs, comments, magazines, etc. 
	- could help screen reader WHERE the article content begins & ends
		↳ esp. if it has combination of txts, imgs, audios, etc. 
```html
<section>
  <h2>Fun Facts About Cricket</h2>
  <article>
    <p>A single match of cricket can last up to 5 days.</p>
  </article>
</section>
```
↳ `<article>` and `<section>` can be placed inside each other depending on the context
## 2. ii. The Aside Element ##
- `<aside>`
	- mark additional info. → enhance another element BUT isn't required in order to understand the main content
		- %%약간 TMI info. 쓸때 유용할듯%% 
	- common uses:
		- bibliographies, Endnotes, Comments, Pull quotes, Editorial sidebars, additional info.
```html
<article>
  <p>The first World Series was played between Pittsburgh and Boston in 1903 and was a nine-game series.</p>
</article>
<aside>
  <p>
   Babe Ruth once stated, “Heroes get remembered, but legends never die.” 
  </p>
</aside>
```
↳ `<article>` = imp. content; `<aside>` = enhances info, but not required
## 2. iii. Figure & Figcaption ##
adding image or illustration
- `<figure>`
	- encapsulate media - i.e. img, illustration, diagram, code snippet etc. 
		- referenced in the main content
```html
<figure>
  <img src="overwatch.jpg">
</figure>
```
↳ encapsulates `<img>` tag

----
- `<figcaption>`
	- add captions to the said-image → describe media in `<figure>`
	- `<figcaption>` goes inside `<figure>`
		- good for grouping image & its caption
```html
<figure>
  <img src="overwatch.jpg">
  <figcaption>This picture shows characters from Overwatch.</figcaption>
</figure>
```
↳ `<figure>` = related to the main flow BUT also, independent
	∴ it can be wholly removed OR moved w/o affecting the flow of the doc. 

## 2. iv. Audio & Attributes ##
- `<audio>`
	- embed audio content into a doc. 
	- like `<video>`, `src` links audio source
```html
<audio>
  <source src="iAmAnAudioFile.mp3" type="audio/mp3">
</audio>
```
↳ `<audio>` + (`<source>` element to encapsulate audio link + `src` + `type` - what kind of audio it is)
	- `type` helps browser to easily identify & check if its supported by the browser

------
- `<attributes>`
	- provide additional info. about an element
		- there MANY att. for `<audio>`, but this lesson focuses on 2: `<controls>` & `<src>`
			- `controls` → automatically displays audio cntrls into browser - e.g. play, mute
			- `src` → specifies URL of audio file
- for autoplay functions
	- use `<autoplay controls>` att. inside `<audio>`
## 2. v. Video & Embed ##
- `<video>`
	- video attributes:-
		- `controls` - play, pause, volume, fullscreen
		- `autoplay` - automatically plays as pg is loaded
		- `loop` - continuous repeat
```html
<video src="coding.mp4" controls>Video not supported</video>
```
↳ "Video not supported" text only shown if browser is unable to display the video
- `<embed>` 
	- can embed any media content incl. vids, audio files, gifs
		- WS w embed button has some form of media content that can be added to other WS
	- self-closing tag
	- ==deprecated tag==
		- use `<video>, <img> and <audio>` instead
```html
<embed src="download.gif"/>
```

#Codecademy #Introduction #HTML
#CodingLanguage
