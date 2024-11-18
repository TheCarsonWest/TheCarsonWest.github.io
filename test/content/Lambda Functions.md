+++
 title = 'Lambda Functions'
[params]
	author = 'Carson West'
+++
## Lambda [Python Functions](./../python-functions/)

### Explanation
Lambda [Python Functions](./../python-functions/) in Python are small, anonymous [Python Functions](./../python-functions/) that can be defined without using the `def` keyword. They are often used as inline [Python Functions](./../python-functions/) when passing a function as an argument to another function or as a way to quickly define a simple function.

### How to Use Lambda [Python Functions](./../python-functions/)
Lambda [Python Functions](./../python-functions/) take the following format:

```python
lambda arguments: expression
```

* **arguments**: The input parameters to the function.
* **expression**: The code to be executed when the function is called.

### Code Examples
```python
# define a lambda function to calculate the square of a number
square = lambda x: x ** 2

# call the lambda function
print(square(5)) # Output: 25
```
Lambda [Python Functions](./../python-functions/) are used as keys for sorting frequently
```python
# use a lambda function as an argument to the `sort` function
numbers = [5, 1, 3, 2, 4]
numbers.sort(key=lambda x: x % 2) # sort the numbers based on their remainder when divided by 2
print(numbers) # Output: [2, 4, 1, 3, 5]
```

### Related Python Concepts
- [Python Functions](./../python-functions/): Lambda [Python Functions](./../python-functions/) are essentially simplified versions of regular [Python Functions](./../python-functions/).
- [Function Parameters](./../function-parameters/): Lambda [Python Functions](./../python-functions/) can receive arguments just like regular [Python Functions](./../python-functions/).
- [[Higher-Order [Python Functions](./../python-functions/): Lambda [Python Functions](./../python-functions/) are often used as arguments to higher-order [Python Functions](./../python-functions/).
- [Closures](./../closures/): Lambda [Python Functions](./../python-functions/) can access variables from the enclosing scope, creating [Closures](./../closures/).
- [Map, Filter, and Reduce](./../map-filter-and-reduce/): Lambda [Python Functions](./../python-functions/) commonly appear in these built-in [Python Functions](./../python-functions/).
# [Python 1 Home](./../python-1-home/)