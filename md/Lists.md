# Lists, yeah
-carson west
## I learned this when i was like 8
### [W3schools link](https://www.w3schools.com/js/js_arrays.asp)

---
### Basic stuff
- Lists are lists
- They look like this in javascript
```js
var exampleList = [ true, 69, 'I already know this', 4.20, previouslyMadeVariable, ['A','List','In','A','List!'], { 'A' : "Dictionary"}];
```

- You can call from a list using indexing
- **Numbers start at 0, not 1!!!!!**
- Indexing looks like this
```js
console.log(exampleList[1]);
// returns 69

// For lists in lists, the outermost lists' index goes first
console.log(exampleList[5][2]);
// returns 'In'
```

- **Negative indexing doesn’t exist in JS** except for in packages, but it exists in most other languages, It takes that number from the back of the list
- Just pretend it exists here
```js
console.log(exampleList[-2][1]);

// returns "List"
```

### Strings
- Strings are also lists
- You can index a string to return a character
```js
var exampleString = ‘joe mama’;
console.log(exampleString[4]);

// returns ‘m’, remember, indexing starts at 0
```
### Changing values

- Every item in a list is a variable
- You can change them, look here

```js
var teams = ['Cupcake Kitties', 'Zam too Thick', 'Karels','5 little thickems','Xanders'];
teams[1] = 'Zam too Thicc';

// ['Cupcake Kitties', 'Zam too Thicc', 'Karels','5 little thickems','Xanders']
```

- You can replace a whole list with another whole list 
- It looks like this

```js
var scores1 = [89, 78, 92, 63, 95, 88];
var scores2 = [92, 79, 97, 63];
scores1 = scores2;
console.log(scores1);

// [92, 79, 97, 63]
```
### Appending
- Appending is really neat
- you can add items to a list any time
- always added to the end of the list
```js
var answers = [];
answers.append(true);
answers.append(69);
// [true, 69]
```

## Why this is useful

- It bundles things together
- It is a way to store newly aquired data
- It saves you a lot of copy pasting if you need to keep switching variables
- It lets you make new data infinitly during the running of the program

Enjoy using lists