+++
 title = 'List Comprehension'
[params]
	author = 'Carson West'
+++
# [Python 1 Home](./../python-1-home/)
# [List Comprehension](./../list-comprehension/) 
List comprehension provides a concise way to create lists in Python. It's a powerful tool for creating lists based on existing iterables.

**Basic Syntax:**

```python
new_list = [expression for item in iterable if condition]
```

*   `expression`: What you want to do with each item.
*   `item`: The variable representing each element in the iterable.
*   `iterable`:  The sequence (list, tuple, string, etc.) you're working with.
*   `condition` (optional): A filter to include only certain items.


**Examples:**

[1](./../1/).  Squaring numbers:

    ```python
    numbers = [[1](./../1/), [2](./../2/), [3](./../3/), [4](./../4/), [5](./../5/)]
    squares = [x**[2](./../2/) for x in numbers]  # [[1](./../1/), [4](./../4/), 9, 16, 25]
    ```

[2](./../2/).  Filtering even numbers:

    ```python
    numbers = [[1](./../1/), [2](./../2/), [3](./../3/), [4](./../4/), [5](./../5/), [6](./../6/)]
    even_numbers = [x for x in numbers if x % [2](./../2/) == 0] # [[2](./../2/), [4](./../4/), [6](./../6/)]
    ```

[3](./../3/).  String manipulation:

    ```python
    words = ["hello", "world", "python"]
    uppercase_words = [word.upper() for word in words] # ['HELLO', 'WORLD', 'PYTHON']
    ```

[4](./../4/).  Nested loops (equivalent to nested for loops):

    ```python
    matrix = [1](./../1/), [2](./../2/)], [[3](./../3/), [4](./../4/)
    flattened_matrix = [num for row in matrix for num in row] # [[1](./../1/), [2](./../2/), [3](./../3/), [4](./../4/)]
    ```


**[Nested Loops](./../nested-loops/)**

**[For Loops](./../for-loops/)**


List comprehension offers a more readable and efficient alternative to traditional `for` loops when creating lists.  It's important to understand its syntax and usage to write more concise and Pythonic code.
