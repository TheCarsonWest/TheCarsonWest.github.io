+++
 title = 'Lambda Functions'
[params]
	author = 'Carson West'
+++
## Lambda [Functions](./../functions/)

### Explanation
Lambda [functions](./../functions/) in Python are small, anonymous [functions](./../functions/) that can be defined without using the `def` keyword. They are often used as inline [functions](./../functions/) when passing a function as an argument to another function or as a way to quickly define a simple function.

### How to Use Lambda [Functions](./../functions/)
Lambda [functions](./../functions/) take the following format:

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
Lambda [functions](./../functions/) are used as keys for sorting frequently
```python
# use a lambda function as an argument to the `sort` function
numbers = [5, 1, 3, 2, 4]
numbers.sort(key=lambda x: x % 2) # sort the numbers based on their remainder when divided by 2
print(numbers) # Output: [2, 4, 1, 3, 5]
```

### Related Python Concepts
- [Functions](./../functions/): Lambda [functions](./../functions/) are essentially simplified versions of regular [functions](./../functions/).
- [Function Parameters](./../function-parameters/): Lambda [functions](./../functions/) can receive arguments just like regular [functions](./../functions/).
- [[Higher-Order [Functions](./../functions/): Lambda [functions](./../functions/) are often used as arguments to higher-order [functions](./../functions/).
- [Closures](./../closures/): Lambda [functions](./../functions/) can access variables from the enclosing scope, creating closures.
- [Map, Filter, and Reduce](./../map-filter-and-reduce/): Lambda [functions](./../functions/) commonly appear in these built-in [functions](./../functions/).
# [Python 1 Home](./../python-1-home/)