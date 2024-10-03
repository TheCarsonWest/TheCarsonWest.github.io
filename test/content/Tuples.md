+++
 title = 'Tuples'
[params]
	author = 'Carson West'
+++
## [Tuples](./../tuples/)

### What are [Tuples](./../tuples/)?
 [Tuples](./../tuples/) are immutable data structures in Python that store ordered sequences of elements. Unlike lists, tuples cannot be modified after creation. They are represented by parentheses `()`.

### How to Use [Tuples](./../tuples/)
 [Tuples](./../tuples/) are created by enclosing elements in parentheses, separated by commas. Elements can be of any Python data type.

```python
my_tuple = (1, 2, 3)
```

### Code Examples
```python
# create a tuple of numbers
numbers = (1, 2, 3, 4, 5)

# create a tuple of mixed data types
mixed_tuple = ("John", 30, True)

# access elements of a tuple
print(numbers[0]) # output: 1

# use unpacking to assign tuple elements to variables
x, y, z = numbers # equivalent to x = numbers[0], y = numbers[1], z = numbers[2]
```

### Related Python Concepts

- [Variables and Data Types](./../variables-and-data-types/): [Tuples](./../tuples/) are a data type in Python.
- [Lists](./../lists/): [Tuples](./../tuples/) are immutable, while lists are mutable.
- [Dictionaries](./../dictionaries/): [Tuples](./../tuples/) can be used as keys in dictionaries.
- [Sets](./../sets/): [Tuples](./../tuples/) are ordered, while sets are unordered.
- [Tuple Unpacking](./../tuple-unpacking/): [Tuples](./../tuples/) can be unpacked into variables.