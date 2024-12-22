+++
 title = 'Function Return Values'
[params]
	author = 'Carson West'
+++
# [Python Functions](./../python-functions/)
# [Function Return Values](./../function-return-values/) 
Python functions can return values using the `return` statement.  The returned value can be of any data type (integer, string, list, dictionary, another function, etc.), or it can be `None` if no explicit return statement is provided.

```python
def add(x, y):
  return x + y

result = add(5, 3)
print(result)  # Output: 8

def greet(name):
  return f"Hello, {name}!"

greeting = greet("Alice")
print(greeting) # Output: Hello, Alice!

def no_return():
  print("This function doesn't return anything.")

no_return_result = no_return()
print(no_return_result) # Output: None
```

[Return Statement Details](./../return-statement-details/)  //This will be a separate note detailing edge cases and nuances of the `return` statement.

[Data Types and Return Values](./../data-types-and-return-values/) //This will be a separate note describing how different data types are handled as return values.  (e.g., mutability, copying vs. referencing)

[Multiple Return Values](./../multiple-return-values/) //This will explain how functions can return multiple values (often as tuples).

Related Notes:
- [Function Definitions](./../function-definitions/)
- [Function Arguments](./../function-arguments/)
- [Scope and Lifetime of Variables](./../scope-and-lifetime-of-variables/)