+++
 title = 'Decorators'
[params]
	author = 'Carson West'
+++
## Python [Decorators](./../decorators/)

### Introduction
 [Decorators](./../decorators/) are a powerful feature of Python that allow you to enhance the behavior of functions, classes, and other objects. They provide a way to add functionality or modify the behavior of an existing object without modifying its source code.

### How to Use [Decorators](./../decorators/)
 [Decorators](./../decorators/) are defined using the `@` symbol followed by the decorator function. The decorator function takes the target object (a function or class) as an argument and returns a modified version of that object.

```python
@decorator_function
def target_function():
 # code of the target function
```

### Example Decorator
Here's an example of a simple decorator function that prints a message before and after the execution of the target function:

```python
def debug_decorator(func):
 def wrapper(*args, **kwargs):
 print("Before execution")
 result = func(*args, **kwargs)
 print("After execution")
 return result
 return wrapper
```

### Usage of Decorator
```python
@debug_decorator
def my_function():
 # code of my_function

my_function()
```

### Output:
```console
Before execution
# code of my_function
After execution
```

### Chaining [Decorators](./../decorators/)
Multiple decorators can be applied to the same object. In such cases, the decorators are executed in reverse order, with the innermost decorator being executed first.

```python
@decorator_2
@decorator_1
def target_object():
 # code of the target object
```

### Related Python Concepts

- [Functions](./../functions/): [Decorators](./../decorators/) enhance the functionality of functions.
- [Classes and Objects](./../classes-and-objects/): [Decorators](./../decorators/) can be used to modify the behavior of classes and objects.
- [[Higher-Order [Functions](./../functions/): [Decorators](./../decorators/) are higher-order functions that take a function as an argument and return a modified function.
- [Function Parameters](./../function-parameters/): Decorator functions can accept parameters, allowing for customization of the decoration behavior.
- [[Lambda [Functions](./../functions/): Lambda functions can be used as decorators to define simple inline modifications.
# [Python 1 Home](./../python-1-home/)