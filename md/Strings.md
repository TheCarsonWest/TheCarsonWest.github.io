# Strings
-carson west
## this is quite possibly the most basic thing in all of programming, make sure you know it
## sorry about it being long
[W3Schools link](https://www.w3schools.com/js/js_strings.asp)

---

- stirngs are what normal humans call text
- they are text, i know its incredible
- they have either single quotes(') or double quotes(") around them. They are literally the same. 
- Big brain tip: if you need to use single quotes in your string, surround it by double quotes so that it doesnt mess it up
- here is what a string looks like 

py
```py
deez = 'nuts'
double_quoted_string = "you're mom" # if i surrounded that in single quotes it would've been weird because i used single quotes
```
js
```js
var deez = 'nuts';
```

## `Print()` and `Console.log()`

- these two functions are the first thign you should learn to use when starting programming
- Print is python, console.log is js.
- they are self explanatory, but in case you are having a rough morning, they put text into the terminal.
- no matter what you put into the parentheses, they will always output as a string.
- you can use a plus sign to put things together

py
```py
print('i love eating' + deez)
# output: i love eatingnuts
# it will not add a space for you, remember that
```
js
```js
console.log(deez);
// Output: nuts
```

## Special letters
Im grouping together two concepts here and they might be different in the two languages, so look things up if you get an error

### `\n` (every programming language)
\n what you do to make your string go multiple lines. This is called an escape sequence, and there are 6 others that Heres it in action

```py
print("guess what\nWhat?\nchicken butt\nshut up")
```
output:
```txt
guess what
What?
chicken butt
shut up
```
in my current markdown viewer it doesn't give \n a different color but most editors do.
### f(py) and ``(js)
These are called by the extremly fancy name "template literals", but you will never need to know that. Basically, you have a string, and you want to use variables in that string, so you use these. 

In python you simply put an f right before the quotes, and that you can use curly brackets with the name of a variable in them at any point in the string, and it'll use it. 
```py
name = 'robert'
print(f'big man {name}.')
#output: big man robert.
```
In js its similar but you use don't use quotes when you want to do it, you use ticks(``,i think thats what they are called) instead and then you can do the variable 
```js 
var name = 'robert';
console.log(`big man ${name}.`);
// output: big man robert
```
## `\` `"` `'`
I cant show the syntax in the title because its doing its job too well, but if you ever want to use any of the characters above in a string, add a backslash before them and itll work. I just learned this lookign through the w3schools page, so idk if it works in py
```js
console.log('backslash \\ double quote \" single quote \'')
// output: backslash \ double quote " single quote '
```
## `r` and `String.raw`
r means raw, you use it like f, it ignores every backslash and fancy thing i just taught you. Its very useful if you are working with file paths in your program

exmaple i stole from mozilla:
```js 
var filePath = String.raw`C:\deez\nuts\inyo.mouth`;

console.log(`The file was uploaded from: ${filePath}`);
// expected output: "The file was uploaded from: C:\deez\nuts\inyo.mouth"
```
identical thing in py
```py
filePath = r'C:\deez\nuts\inyo.mouth'

print(f'The file was uploaded from: ${filePath}')

# expected output: "The file was uploaded from: C:\deez\nuts\inyo.mouth"
```
## Substrings
I barely ever use this, but they talk about it in college board, so its important
### `subtring()`
it takes a part of the string. its that simple
```js
var name = 'robert';
var shortName = substring(name, 1, 3); 
// shortName = rob, indexing starts at 1.
```
### `in`
in is a logic operator that is very useful. If something is in the string listed, it returns true, if not, it returns false
js
```js
if ('rob' in 'robert'){
    console.log('yep');
}
```
py
```py
if 'rob' in 'robert':
    print('yep')
```
## Strings are lists
I already taught this in lists but ima do it again
- strings are lists of characters
- you can use a string like a list
- any function you can use on a list, you can use on a string.
```py
name = 'robert'
print(len(name))
# outputs 5, len starts at 1, not 0 
name.append('o')
print(name)
# output: roberto
```
### Javascript is not allowed to be easy
while you can just use a plus sign to join together two strings in python, you have to do `concat()` to do the same thing in js. 
```js 
var firstName = 'Joe';
var secondName = 'Biden';
var fullName = concat(firstname," ", secondName);
console.log(fullName);
// Output: Joe Biden
```
### Strings can be compared
yeah
```py 
print("funny" == "monke")
# output: False
print('silly' == 'silly')
# output: True
```
im not writing a js exmaple

## Summary
- strings are text
- `Console.log()` and `print()` display things in a terminal
- strings have many funkey characters that can change their behavior
- \n puts all the text after it on a new line
- if you want to put a varibale in a string and don't want to use the plus sign or concat, use template literals. If you don't remember that word go back in the document.
- use String.raw or r when using file paths, beause they have many back slashes.
- use `substring()` if you want a smll part of the stirng
- use `in` if you need to know if a certain word or phrase is in a big string.
- Strings can be used just like lists
- strings can be used in boolean comparisons
- look things up if you dont remember them.

thats strings. If you don't know how to use them I give up