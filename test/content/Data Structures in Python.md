+++
 title = 'Data Structures in Python'
[params]
	author = 'Carson West'
+++
# [Mutable vs Immutable Types](./../mutable-vs-immutable-types/)
# [Data Structures in Python](./../data-structures-in-python/) 
This note covers the fundamental data structures in Python.  I'll need to expand on several of these in separate notes.

**1. Built-in Data Structures:**

Python offers several built-in data structures:

* **[Lists](./../lists/):** Ordered, mutable (changeable) sequences of items.  Allow duplicate elements.

```python
my_list = 1, 2, "hello", 3.14, True]]
```

* **[Tuples](./../tuples/):** Ordered, immutable (unchangeable) sequences of items. Allow duplicate elements.  Useful for representing fixed collections of data.

```python
my_tuple = (1, 2, "hello", 3.14, True)
```

* **Sets:** Unordered collections of unique items.  Useful for membership testing and eliminating duplicates.

```python
my_set = {1, 2, 3, 3, 4} # {1, 2, 3, 4}
```

* **[Dictionaries](./../dictionaries/):**  Unordered collections of key-value pairs.  Keys must be immutable (e.g., strings, numbers, tuples), values can be any data type.  Provides efficient lookups by key.

```python
my_dict = {"name": "Alice", "age": 30, "city": "[New York](./../new-york/)"}
```


**2.  Data Structure Operations:**

Each data structure has its own set of operations (methods):

* **[Lists](./../lists/):**  `append()`, `insert()`, `remove()`, `pop()`, `sort()`, `reverse()`, `index()`, `count()` etc.  ([List Methods](./../list-methods/))
* **[Tuples](./../tuples/):**  Limited operations due to immutability.  `index()`, `count()`. ([Tuple Methods](./../tuple-methods/))
* **Sets:** `add()`, `remove()`, `union()`, `intersection()`, `difference()` etc. ([Set Methods](./../set-methods/))
* **[Dictionaries](./../dictionaries/):** `get()`, `items()`, `keys()`, `values()`, `update()`, `pop()`, `popitem()` etc. ([Dictionary Methods](./../dictionary-methods/))


**3. Choosing the Right Data Structure:**

The choice of data structure depends on the specific needs of your program:

* Use lists when you need an ordered, mutable sequence.
* Use tuples when you need an ordered, immutable sequence.
* Use sets when you need to store unique items and perform set operations.
* Use dictionaries when you need to store data in key-value pairs for efficient lookups.


**4.  More Advanced Data Structures ([Advanced Data Structures](./../advanced-data-structures/))**

This section will cover more advanced data structures, like:

* **Deque (double-ended queue):**  Efficient for adding and removing elements from both ends.
* **Namedtuple:**  Similar to tuples, but with named fields for better readability.
* **Counter:**  A dictionary subclass for counting hashable objects.
* **OrderedDict (deprecated in Python 3.7+):**  Maintained order of insertion. (Use `collections.OrderedDict` if needed for older Python versions).


**5.  Further Reading:**

* Python documentation on built-in types.
* Relevant chapters in a Python textbook.


**Linked Notes:** [List Methods](./../list-methods/), [Tuple Methods](./../tuple-methods/), [Set Methods](./../set-methods/), [Dictionary Methods](./../dictionary-methods/), [Advanced Data Structures](./../advanced-data-structures/)
