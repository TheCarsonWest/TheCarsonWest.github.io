# loops
## this is ez
-carson west

[link to conditionals incase you havent read it yet](./Conditionals.html)

---

- loops are functions that will repeat the code inside them either until:
    - a condition is not longer met(while)
    - it goes through everything it needs to(for)
- this is what a while loop looks like in both languages

```js
// js 
var number = Math.floor(Math.random*10+1); // random number generation, 1-10
var guessed = false
while (!guessed) { // will repeat over and oer until guessed is true, or in this case, not false
    console.log('guess a number');
    if (parseInt(prompt()) == number){
        guessed = true;
    }
    else{
        console.log('try again');
    }
}
console.log('gj'); // this will only be reached once they guess right
```
```py
import random
# py
number = random.randint(1,10)
guessed = False

while not guessed:
    if int(input('guess a number \n')) = number:
        guessed = True
    else:
        print('try again')
print('gj')
```
These programs choose a random number from 1-10, and make you guess it, and will not stop until you do. This is what a while loop does.

## "what if i want to run something a certain amount of times?"

you have two options here. A counting variable or a `for` loop.

Heres an example of a counting variable loop.

```py
# py 
i = 5 # I recommend using "i" as your counting variable name, its standard practice.
while i > 0:
    print('hi')
    i -= 1 # subtracts 1
print('bye')
```
```js
// js
var i = 5;
while (i > 0) {
    console.log('hi');
    i -= 1;
}
console.log('bye');
```
all that, of you can use this next section
## `for` loops 
- in python, a for loop will go through the loop for the amount of items in a specified list
    - this list can be a numbered range using the [`range`](https://www.w3schools.com/python/ref_func_range.asp) function, like I will show you
- In js, its much easier. You give the loop a varable(or create one within the arguments), you tell it where to stop with a conditional, and you can also give it a one character variable to increase the value of
    - it sounds like a lot, but it is ridiculously simple

- here they are

```py
# py
for x in range(5): 
# x will represent the item it is currently on
# range(5) is the same as putting [0, 1, 2, 3, 4, 5]
    print(x, end='') # end='' makes it so the next print with go on the same line as the current one

# outputs 012345
```
```js
// js 
for (var x = 0; x < 5; x++){
//      ^^^ 1) creates a varibale that I am about to use 2) what the loop with run for as long as it is true 3) makes it so that variable x counts up by 1 every iteration.
    console.log(x);
}
// outputs 0 1 2 3 4 5, all in different lines
```

thats about it, bye