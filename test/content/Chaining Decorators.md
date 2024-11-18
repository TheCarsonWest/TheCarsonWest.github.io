+++
 title = 'Chaining Decorators'
[params]
	author = 'Carson West'
+++
# Chaining [Decorators](./../decorators/)

## What are Chaining [Decorators](./../decorators/)?
Chaining [Decorators](./../decorators/) is a technique in Python that allows multiple [Decorators](./../decorators/) to be applied to a single function or class. By chaining [Decorators](./../decorators/), you can combine the functionalities of different [Decorators](./../decorators/) in a sequential manner, allowing you to enhance the behavior of the decorated function or class in a more modular and flexible way.

## How to Use Chaining [Decorators](./../decorators/)
To chain [Decorators](./../decorators/), simply use the `@` symbol before each decorator function you want to apply, in the order you wish to apply them. The syntax is as follows:

```python
@decorator1
@decorator2
...
@decoratorN
def function_name(parameters):
 # function body
```

Note that the [Decorators](./../decorators/) are applied from top to bottom, so the inner-most decorator is applied first, followed by the next-inner decorator, and so on.

## Code Examples
```python
# Example 1: Chaining decorators to add cache and timing functionality to a function
from functools import wraps
import time

def cache(func):
 @wraps(func)
 def wrapper(*args, **kwargs):
 key = str(args) + str(kwargs)
 if key in wrapper.cache:
 return wrapper.cache[key]

 result = func(*args, **kwargs)
 wrapper.cache[key] = result
 return result
 wrapper.cache = {}
 return wrapper

def timing(func):
 @wraps(func)
 def wrapper(*args, **kwargs):
 start = time.time()
 result = func(*args, **kwargs)
 end = time.time()
 print(f"Function {func.__name__} took {end - start} seconds to run")
 return result
 return wrapper

@cache
@timing
def factorial(n):
 if n == 0:
 return 1
 else:
 return n * factorial(n-1)

print(factorial(10)) # prints the result and execution time
```

```python
# Example 2: Chaining decorators to add multiple permissions checks to a method
def permission_required(permission):
 def decorator(func):
 @wraps(func)
 def wrapper(self, *args, **kwargs):
 if self.has_permission(permission):
 return func(self, *args, **kwargs)
 else:
 raise PermissionError("Permission Denied")
 return wrapper
 return decorator

class User:
 def __init__(self, permissions):
 self.permissions = permissions

 def has_permission(self, permission):
 return permission in self.permissions

@permission_required("read")
@permission_required("write")
def update_user(self, new_data):
 # update user data if permissions are granted
 pass
```

## Related Python Concepts
- [Decorators](./../decorators/): Chaining [Decorators](./../decorators/) is an advanced technique that builds upon the concept of [Decorators](./../decorators/).
- [Python Functions](./../python-functions/): [Decorators](./../decorators/) are applied to functions to modify their behavior.
- [[Higher-Order [Python Functions](./../python-functions/): [Decorators](./../decorators/) are higher-order [Python Functions](./../python-functions/) that take a function as an argument and return a new function.
- [Closures](./../closures/): [Decorators](./../decorators/) create [Closures](./../closures/) that remember and have access to the variables defined in their scope.
- [Metaclasses](./../metaclasses/): Chaining [Decorators](./../decorators/) can be used to create custom [Metaclasses](./../metaclasses/) that modify the behavior of classes and their instances.
# [Python 1 Home](./../python-1-home/)