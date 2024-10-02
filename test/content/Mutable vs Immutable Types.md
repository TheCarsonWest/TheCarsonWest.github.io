+++
 title = 'Mutable vs Immutable Types'
+++
## [Mutable vs Immutable Types](./../mutable-vs-immutable-types/)

### Explanation
In Python, data types can be categorized as either mutable or immutable. Mutability refers to whether the value of a variable can be changed once it is created.

- **Mutable Types:** Allow modification of their values after creation, such as lists, dictionaries, and sets.
- **Immutable Types:** Do not allow modification of their values after creation, such as strings, tuples, and numbers (integers, floats, etc.).

### How to Use It
The mutability of a type is determined by its class. For example, `list()` is a mutable class, while `str()` is an immutable class.

### Code Examples
```python
# Mutable: list value can be modified
my_list = [1, 2, 3]
my_list[0] = 4

# Immutable: string value cannot be modified
my_string = "Hello"
# my_string[0] = 'W' # TypeError: 'str' object does not support item assignment
```

### Related Python Concepts
- [Variables and Data Types](./../variables-and-data-types/): Mutable and immutable types are fundamental data types in Python.
- [Lists](./../lists/): [Lists](./../lists/) are mutable sequences that can be modified in place.
- [Tuples](./../tuples/): [Tuples](./../tuples/) are immutable sequences that cannot be modified.
- [Dictionaries](./../dictionaries/): [Dictionaries](./../dictionaries/) are mutable mappings that can be modified in place.
- [Sets](./../sets/): [Sets](./../sets/) are mutable collections that can be modified in place.