# If else elif and tips
## This should be really short
-carson west

[W3Schools Link](https://www.w3schools.com/js/js_if_else.asp)

---

## `if`
- if is a function that will have a function inside it run if the criteria of the if statement are met.
## `else`
- else is a function that will run if the criteria for the previous if statement are **not** met
## `elif/else if`
- elif/else if are two other things that can run after an if statment isnt met. You can have as many elifs as you want, and they only are checked if the first statement isnt met.

heres a big old example of every one of those

js
```js
var funny = parseInt(prompt());

if (funny = 10){
    console.log('im dead 💀')
}else if(funny > 7){
    console.log('LMAO')
}else if(funny < 8 && funny >= 4){
    console.log('lmao')
}else if(funny < 4 && funny != 0){
    console.log('not funny didnt laugh 🗿🗿🗿')
}else{
    console.log('get yo funny up and yo money up')
}
```
and python
```py
funny = int(input())

if funny = 10:
    print('im dead 💀')
elif funny > 7
    print('LMAO')
elif funny < 8 and funny >= 4
    print('lmao')
elif funny < 4 and funny != 0
    print('not funny didnt laugh 🗿🗿🗿')
else:
    print('get yo funny up and yo money up')
```

there is also `switch` but i have literally 