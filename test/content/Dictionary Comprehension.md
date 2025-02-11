+++
 title = 'Dictionary Comprehension'
[params]
	author = 'Carson West'
+++
# [Dictionaries](./../dictionaries/)
# [Dictionary Comprehension](./../dictionary-comprehension/) 
Dictionary comprehension provides a concise way to create dictionaries in Python.  It follows a similar syntax to list comprehension, but creates key-value pairs instead of a list of items.

**Basic Syntax:**

```python
{key_expression : value_expression for item in iterable if condition} 
```

* `key_expression`:  Expression that evaluates to the key.
* `value_expression`: Expression that evaluates to the value.
* `item`: Variable representing each item in the iterable.
* `iterable`:  A sequence (list, tuple, string, etc.) or other iterable object.
* `if condition`: (Optional) A conditional statement to filter items.


**Examples:**

[1](./../1/). **Simple [Dictionary Comprehension](./../dictionary-comprehension/):**

```python
squares = {x: x*x for x in range([1](./../1/), [6](./../6/))} 
print(squares)  # Output: {[1](./../1/): [1](./../1/), [2](./../2/): [4](./../4/), [3](./../3/): 9, [4](./../4/): 16, [5](./../5/): 25}
```

[2](./../2/). **[Dictionary Comprehension](./../dictionary-comprehension/) with Conditional Logic:**

```python
even_squares = {x: x*x for x in range([1](./../1/), 11) if x % [2](./../2/) == 0}
print(even_squares) # Output: {[2](./../2/): [4](./../4/), [4](./../4/): 16, [6](./../6/): 36, 8: 64, 10: 100}
```

[3](./../3/). **[Dictionary Comprehension](./../dictionary-comprehension/) from Two [Iterables](./../iterables/) (using `zip`)**:

```python
keys = ['a', 'b', 'c']
values = [[1](./../1/), [2](./../2/), [3](./../3/)]
my_dict = {k: v for k, v in zip(keys, values)}
print(my_dict) # Output: {'a': [1](./../1/), 'b': [2](./../2/), 'c': [3](./../3/)}

```

[4](./../4/). **[Dictionary Comprehension](./../dictionary-comprehension/) with Nested Loops (for more complex scenarios):**

```python
matrix = [1](./../1/), [2](./../2/)], [[3](./../3/), [4](./../4/)
flattened_dict = { (i, j): matrix[i][j] for i in range(len(matrix)) for j in range(len(matrix[0]))}
print(flattened_dict) # Output: {(0, 0): [1](./../1/), (0, [1](./../1/)): [2](./../2/), ([1](./../1/), 0): [3](./../3/), ([1](./../1/), [1](./../1/)): [4](./../4/)}
```

[List Comprehension](./../list-comprehension/)  ([This will be a separate note about list comprehensions](./../this-will-be-a-separate-note-about-list-comprehensions/))

[Iteration in Python](./../iteration-in-python/) ([This will be a separate note about various iteration techniques in Python](./../this-will-be-a-separate-note-about-various-iteration-techniques-in-python/))

[Zip Function](./../zip-function/) ([This will be a separate note about the zip function](./../this-will-be-a-separate-note-about-the-zip-function/))

Dictionary comprehensions offer a powerful and readable way to create dictionaries directly from iterables. They are particularly useful for transforming data and creating dictionaries based on specific conditions.  Remember to always prioritize readability and choose the method (comprehension or traditional loop) that best suits the complexity of your task.
