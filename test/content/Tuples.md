+++
 title = 'Tuples'
[params]
	author = 'Carson West'
+++
# [Python 1 Home](./../python-1-home/)
# [Tuples](./../tuples/)  [Tuples](./../tuples/) are ordered, immutable [Sequences](./../sequences/) of items.  This immutability is a key difference from [Lists](./../lists/).

* **Creation:**
```python
my_tuple = (1, 2, 3, "apple", 4.5)  # Using parentheses
another_tuple = 1, 2, 3  # Parentheses are optional for simple tuples
empty_tuple = ()
single_element_tuple = (1,) #Note the comma for single-element tuples

```

* **Accessing Elements:** Similar to [Lists](./../lists/), use indexing.
```python
print(my_tuple[0]])  # Output: 1
print(my_tuple[-1) # Output: 4.5
```

* **Immutability:**  Attempting to modify a tuple after creation raises a `TypeError`.
```python
my_tuple[0]] = 10  # Raises TypeError: 'tuple' object does not support item assignment
```

* **Methods:** [Tuples](./../tuples/) have fewer methods than [Lists](./../lists/) because they are immutable. Common methods include:
    * `count()`: Counts the occurrences of an element.
    * `index()`: Returns the index of the first occurrence of an element.


* **Tuple Packing and Unpacking:**
```python
packed_tuple = (1, 2, 3)
a, b, c = packed_tuple  # Unpacking
print(a, b, c)  # Output: 1 2 3

```

* **Iteration:**  Iterate through tuples using loops (like `for` loops).

* **Use Cases:** [Tuples](./../tuples/) are useful when you need an ordered collection of items that should not be changed.  They're often used to represent records or data that should remain constant.


[Lists](./../lists/)
[Mutable vs Immutable Types](./../mutable-vs-immutable-types/)

