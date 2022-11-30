# functions
## you must know this
-carson west

[W3schools link](https://www.w3schools.com/js/js_functions.asp)

---

- functions are the basis of big coding
- if you do not know how to do functions, read this. If you still dont after this, I either am terrible at coding or you are
- here is a function

js
```js
function square(number) {
    return number*number;
}

console.log(square(7)+1);
// returns 50
```
and python identical
```py
def square(number):
    return number*number

print(square(7)+1)
# returns 50
```
time to break down everything i just put in there

## `function/def`
You put these phrases whenever you want to make a function

## `square(number)`
square is the name of your function, which is what you use to call it later down the line. after that, there are parentheses. The word number means I created a special variable that can only be used in the function, and when you call the function, you need to define that thing. You can have as many values as you want in here, just comma seperate them.

## `return`
return is a phrase that makes a function actually do something. sometimes you just want a function to run some code all together, so you dont have to constantly repeat it, but in this case, we want our function to be a value in another function, which is what return does. 
## `square(7)`
this is called calling a function. Whenever this line of code is put it, it will run all of the code in the function over where it is. If there is a return in that function, you can use it as an argument in another function, like we did here, adding 1 to it. 

## Things in questions i've seen
- Funtions can also be referred to as procedures, they are synonyms
- Just about everything in programming is a function, what I just taught you is you making your own functions
- premade functions for specialized tasks, such as api interaction, image manipulation, and input control, can come in packages. 
    - You dont see many packages when learning js, but in python you use them a lot, and I actually teach you to use on in random.md 
    - Javascripts big package manager is called NPM
    - Pythons big package manager is called PiP(package installer for python), and often comes with your python download. It can lead to headaches in the terminal though
