---
params:
	author: Carson West
title: Function Parameters
--- 
## [Function Parameters](./../function-parameters/)

### Definition
Function parameters are arguments that are passed into a function when it is called. They allow functions to receive data from the caller and use it within their execution.

### How to Use [Function Parameters](./../function-parameters/)
Function parameters are defined within the parentheses of the function definition. Each parameter is assigned a name and a type annotation (optional). When the function is called, the actual arguments are passed in the same order as the parameters defined in the function signature.

### Code Examples
```python
def add_numbers(num1, num2):
 return num1 + num2

# call the function with actual arguments
result = add_numbers(5, 10)
```

```python
def greet_person(name: str, age: int):
 print(f"Hello, {name}. You are {age} years old.")

# call the function with named arguments (optional)
greet_person(age=25, name="John")
```

### Related Python Concepts

- [Functions](./../functions/): Function parameters are an integral part of defining and using functions.
- [Return Values](./../return-values/): Parameters enable functions to receive input and return meaningful values.
- [Default Parameters](./../default-parameters/): Default parameters can be specified to provide default values for optional parameters.
- [Variable Scope](./../variable-scope/): Parameters introduce variables that are local to the function's scope.
- [Recursion](./../recursion/): [Functions](./../functions/) can have parameters that refer to themselves, enabling recursive execution.