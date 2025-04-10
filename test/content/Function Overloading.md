+++
 title = 'Function Overloading'
[params]
	author = 'Carson West'
+++
# [Python Functions](./../python-functions/)
# [Function Overloading](./../function-overloading/) 
Python does **not** support function overloading in the same way as some other languages (like C++ or Java).  In those languages, you can have multiple functions with the same name but different parameter lists.  The compiler/interpreter chooses the correct function based on the arguments passed.

Python's approach is different.  If you define multiple functions with the same name, the later definition will simply overwrite the earlier one.  The last definition is the one that will be used.

```python
def my_function(x, y):
  return x + y

def my_function(x, y, z):
  return x + y + z

print(my_function(1, 2, 3)) # Output: 6
#print(my_function(1,2)) #This will throw an error because the first definition is overwritten.
```

To achieve similar functionality to function overloading in Python, you can use:

1. **[Default Arguments](./../default-arguments/):**  Provide default values for parameters. This allows a single function to handle different numbers of arguments.

```python
def my_function(x, y=0, z=0):
  return x + y + z

print(my_function(1, 2, 3))  # Output: 6
print(my_function(1, 2))    # Output: 3
print(my_function(1))      # Output: 1
```

2. **[Variable-Length Arguments](./../variable-length-arguments/) (*args and **kwargs):** Use `*args` to accept a variable number of positional arguments and `**kwargs` to accept a variable number of keyword arguments. This provides maximum flexibility.

```python
def my_function(*args, **kwargs):
  sum = 0
  for num in args:
    sum += num
  print(kwargs)
  return sum

print(my_function(1, 2, 3, 4, 5)) # Output: 15
print(my_function(a=1, b=2, c=3)) # Output: 0, {'a': 1, 'b': 2, 'c': 3}

```

3. **[Method Overriding](./../method-overriding/) ([Polymorphism](./../polymorphism/))**: If working with classes and inheritance, you can override methods in subclasses to provide different implementations for the same method name. This is a form of polymorphism, not strictly function overloading, but it achieves similar results.


Therefore, while Python doesn't directly support function overloading, using default arguments, variable-length arguments, or method overriding can provide comparable functionality.  Choosing the right approach depends on the specific needs of your program. [Default Arguments](./../default-arguments/), [Variable-Length Arguments](./../variable-length-arguments/), [Polymorphism](./../polymorphism/)
