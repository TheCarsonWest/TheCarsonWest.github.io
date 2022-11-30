# Conditionals
## Im not gonna make a flowchart
-carson west
## [W3Schools link](https://www.w3schools.com/js/js_if_else.asp)
---

* Conditionals and logic functions are usually weasier to explain in psuedo code
* This is the job of a senior developer or a corporate higher up, and then you have to code it
* if you see a flowchart, its for this
* heres the simplest conditional possible
```py
# Python
condition = True
if condition:
# if its true, it goes here, if its false, it doesnt
    print('Yeah')
else:
    print('Nah')
```
```js
// Javascript
var condition = true
if (condition){
    console.log("Yeah");
}else{
    console.log("Nah");
}
```
* heres the example ap college board uses
```js 

var number = int(input())
if (number > 0 && number < 10){
    console.log(number);
    var temp = true;
}else{var temp = false};
if (number MOD 3 == 0 && temp){
    console.log("Your number is a multiple of 3!");
}
console.log('Goodbye');

var number = int(input())
if (number > 0 && number < 10){
    console.log(number);
}
console.log('Goodbye');
```

* Time to actually break down everything that was said

## `int(input())`
`input()` is a very simple function that is usful all the time in terminal programs.  It stops everything and waits for the user to put in some text. `int()` is a functiont hat converts anything put into it into a number, as long as it can. You can have a number in a string, like `var string = '69'`, but if you try somehting like `string += 420` you get an error, since it is a string, and cant be used in math. this is why you need `int()`

## `number > 0 && number < 10`
two things to break down here in the condition bracket. the first is `number > 0`, which is known as a boolean expression, since it either evaluates to true or false. if `number` is greater than 0, it says true, if it isnt, it says false. this also goes for `number < 10` heres every boolean operator:
*  `==` = equals, they use two equals signs so theres no confusion with it and variables
*  `===` = equal value & type, if they are the same type of variable and the same value(I have never used this)
* `!=` = not equal, if they aren't equal, its true.
* `!==` = not equal value **or** type. If it is not the same value, or the same type of variable.
* `> <` = Greater than or less than. The alligator you leanred in 1st grade
* `>= <=` Greater than or equal to/Less than or equal to. You learned this is math at some point.

Now for the `&&`. `&&` is a javascript logic operator, and it represents what many languages simply put as `and`, like in python. There are many other javascript logic operators, here they are 
* `&&` = and. Usage: `if (true && true)`    (evaluates true if both are true, anything else is false)
* `||` = or. Usage: `if (false || true)`    (evaluates true if either or true, false if both are false)
* `!` = not. Usage: `if(!true)`             (evaluates the opposite of what is there. False if true, true if false)

## Why this is useful
* It is the baseline for just about every program.
* you will use it in every program
* knowing the fancier stuff makes you better at using it in every program
* every senior developer will maek flowcharts for this, if they can get paid in a manager position without knowing how to code, you can write their conditionals.


Enjoy using conditionals