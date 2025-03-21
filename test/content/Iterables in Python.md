+++
 title = 'Iterables in Python'
[params]
	author = 'Carson West'
+++
# [List Comprehension](./../list-comprehension/)
# [Iterables in Python](./../iterables-in-python/) 
An iterable is an object capable of returning its members one at a time, permitting iteration over its contents.  They are fundamental to Python's looping constructs and support many built-in functions.

Key characteristics:

*   They implement the `__iter__` method, which returns an iterator.
*   They can be used in `for` loops.
*   They can be unpacked into variables using tuple assignment.


Examples of iterables:

*   [Lists](./../lists/):  `1, 2, 3`
*   [Tuples](./../tuples/): `(1, 2, 3)`
*   Strings: `"hello"`
*   Sets: `{1, 2, 3}`
*   [Dictionaries](./../dictionaries/): `{"a": 1, "b": 2}` (iterates over keys by default)
*   Files (opened in read mode)
*   Custom classes implementing `__iter__`


Iteration vs. [Iterators](./../iterators/): [Iterators](./../iterators/) vs. [Iterables](./../iterables/)


Using iterables in `for` loops:

```python
my_list = 1, 2, 3, 4, 5
for item in my_list:
    print(item)

my_string = "Python"
for char in my_string:
    print(char)
```

Unpacking iterables:

```python
my_tuple = (10, 20, 30)
a, b, c = my_tuple
print(a, b, c) # Output: 10 20 30
```

Built-in functions that work with iterables:

*   `len()`
*   `sum()`
*   `max()`
*   `min()`
*   `any()`
*   `all()`
*   `sorted()`
*   `list()` (converts iterable to a list)
*   `tuple()` (converts iterable to a tuple)
*   `set()` (converts iterable to a set)


Creating custom iterables: [Custom Iterables](./../custom-iterables/)

Generating iterables:

*   List comprehensions
*   Generator expressions [Generator Expressions](./../generator-expressions/)

Important Note: [Iterables](./../iterables/) are consumed when iterated through, which means that after one iteration, they might need to be regenerated if you want to iterate over the same elements again.  This is a core difference with [Sequences](./../sequences/) and how they handle iterators.

Related Notes: [Iterators](./../iterators/) vs. [Iterables](./../iterables/), [Custom Iterables](./../custom-iterables/), [Generator Expressions](./../generator-expressions/), [Sequences](./../sequences/)
