+++
 title = 'Parameter Ordering'
[params]
	author = 'Carson West'
+++
# [Function Parameters](./../function-parameters/)
# [Parameter Ordering](./../parameter-ordering/) in Python

Python's function parameter ordering follows a specific pattern which can sometimes be confusing, especially when dealing with many parameters. Understanding this order is crucial for writing readable and maintainable code.

The general order is:

[1](./../1/). **Positional Parameters:** These are the parameters that are filled based on their position in the function definition.  They *must* be provided in the correct order during function invocation.

   ```python
   def my_func(a, b, c):
       print(f"a: {a}, b: {b}, c: {c}")

   my_func([1](./../1/), [2](./../2/), [3](./../3/))  # Correct order
   my_func([3](./../3/), [2](./../2/), [1](./../1/))  # Different order, but still positional
   ```

[2](./../2/). **Keyword Parameters (Named Arguments):**  These parameters are specified using the `parameter_name=value` syntax.  The order of keyword parameters doesn't matter as long as the parameter names are correct.

   ```python
   def my_func(a, b, c):
       print(f"a: {a}, b: {b}, c: {c}")

   my_func(c=[3](./../3/), a=[1](./../1/), b=[2](./../2/)) # Order doesn't matter here
   ```

[3](./../3/). **[Default Parameters](./../default-parameters/):** These parameters have a default value assigned in the function definition. If a value is not provided during invocation, the default value is used.  Default parameters *must* come after non-default parameters.

   ```python
   def my_func(a, b, c=[3](./../3/)): # c has a default value
       print(f"a: {a}, b: {b}, c: {c}")

   my_func([1](./../1/), [2](./../2/)) # c defaults to [3](./../3/)
   my_func([1](./../1/), [2](./../2/), [4](./../4/)) # c is overridden to [4](./../4/)
   ```

[4](./../4/). **`*args` (Variable Positional Arguments):**  This allows a function to accept a variable number of positional arguments.  These arguments are collected into a tuple.

   ```python
   def my_func(a, b, *args):
       print(f"a: {a}, b: {b}, args: {args}")

   my_func([1](./../1/), [2](./../2/), [3](./../3/), [4](./../4/), [5](./../5/)) # args will be ([3](./../3/), [4](./../4/), [5](./../5/))
   ```
   [Variable Arguments](./../variable-arguments/)

[5](./../5/).  **`**kwargs` (Variable Keyword Arguments): This allows a function to accept a variable number of keyword arguments. These arguments are collected into a dictionary.

   ```python
   def my_func(a, b, **kwargs):
       print(f"a: {a}, b: {b}, kwargs: {kwargs}")

   my_func([1](./../1/), [2](./../2/), c=[3](./../3/), d=[4](./../4/)) # kwargs will be {'c': [3](./../3/), 'd': [4](./../4/)}
   ```
   [Variable Keyword Arguments](./../variable-keyword-arguments/)


**Important Considerations:**

* **Mixing Positional and Keyword Arguments:** You can mix positional and keyword arguments, but positional arguments *must* come before keyword arguments.

* **Parameter Order Matters:**  The order of parameters in the function definition dictates how arguments are assigned. Incorrect order leads to `TypeError` exceptions.

* **Readability:** Using keyword arguments enhances code readability, especially with functions having many parameters.


Related Notes:
- [Variable Arguments](./../variable-arguments/)
- [Variable Keyword Arguments](./../variable-keyword-arguments/)
- [Default Parameter Gotchas](./../default-parameter-gotchas/) (Potential issues with mutable default parameters)

