+++
 title = 'Python Functions'
[params]
	author = 'Carson West'
+++
# [Function Parameters](./../function-parameters/)
# [Python Functions](./../python-functions/) 
These notes cover the basics of Python functions.

**Defining Functions:**

Functions are defined using the `def` keyword, followed by the function name, parentheses `()`, and a colon `:`.  The function body is indented.

```python
def my_function(param1, param2):
  """This is a docstring describing the function."""
  # Function body
  result = param1 + param2
  return result

```

[Function Parameters and Arguments](./../function-parameters-and-arguments/)

[Function Return Values](./../function-return-values/)

**Calling Functions:**

Functions are called by using their name followed by parentheses containing any necessary arguments.

```python
result = my_function(5, 3)  # Calls my_function with arguments 5 and 3
print(result)  # Prints 8
```

**Types of Arguments:**

* **Positional Arguments:** Arguments passed in the order they are defined in the function definition.
* **Keyword Arguments:** Arguments passed using the `keyword=value` syntax.  This allows for flexibility in argument order.
* **Default Arguments:** Arguments that have a default value specified in the function definition.  If not provided during the function call, the default value is used.
* **Variable-Length Arguments (`*args`, `**kwargs`):**  Used to handle a variable number of positional or keyword arguments, respectively. [Variable Length Arguments in Python](./../variable-length-arguments-in-python/)


**Scope and Lifetime of Variables:**

* **Local Variables:** Variables defined inside a function are local to that function.
* **Global Variables:** Variables defined outside any function.  They can be accessed from within functions, but modifying them requires the `global` keyword. [Variable Scope and Lifetime](./../variable-scope-and-lifetime/)


**Lambda Functions (Anonymous Functions):**

These are small, anonymous functions defined using the `lambda` keyword. They are often used for short, simple operations.

```python
square = lambda x: x*x
print(square(5)) # Prints 25
```

**Recursive Functions:**

Functions that call themselves.  They must have a base case to avoid infinite recursion. [Recursion in Python](./../recursion-in-python/)


**Decorators:**

A powerful technique for modifying or enhancing functions without changing their core functionality.  They use the `@` symbol. [Python Decorators](./../python-decorators/)

**Higher-Order Functions:**

Functions that take other functions as arguments or return functions as results.  `map`, `filter`, and `reduce` are examples. [Higher-Order Functions](./../higher-order-functions/)


**Pre-existing Notes:**

* [Function Parameters and Arguments](./../function-parameters-and-arguments/)
* [Function Return Values](./../function-return-values/)
* [Variable Length Arguments in Python](./../variable-length-arguments-in-python/)
* [Variable Scope and Lifetime](./../variable-scope-and-lifetime/)
* [Recursion in Python](./../recursion-in-python/)
* [Python Decorators](./../python-decorators/)
* [Higher-Order Functions](./../higher-order-functions/)

