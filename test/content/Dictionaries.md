+++
 title = 'Dictionaries'
[params]
	author = 'Carson West'
+++
## Python [Dictionaries](./../dictionaries/)

### Definition
 [Dictionaries](./../dictionaries/) are mutable data structures that store key-value pairs. The keys are unique and immutable, while the values can be of any type. [Dictionaries](./../dictionaries/) provide a convenient way to store and retrieve data associated with specific keys.

### How to Use [Dictionaries](./../dictionaries/)
```python
# create a dictionary using the {} syntax
my_dict = {"key1": "value1", "key2": "value2"}

# access a value using the key
value = my_dict["key1"]
```

### Code Examples
```python
# create a dictionary of student names and ages
students = {"Alice": 20, "Bob": 25, "Carol": 22}

# add a new student
students["Dave"] = 28

# delete a student
del students["Bob"]

# loop through the dictionary
for name, age in students.items():
 print(f"{name} is {age} years old.")
```

### Related Python Concepts

- [Variables and Data Types](./../variables-and-data-types/): [Dictionaries](./../dictionaries/) are stored as variables and can contain different data types.
- [Lists](./../lists/): [Lists](./../lists/) and dictionaries are both sequence data structures, but lists are ordered and mutable while dictionaries are unordered and mutable.
- [Tuples](./../tuples/): [Tuples](./../tuples/) and dictionaries are both mutable data structures, but tuples are immutable.
- [Python Sets](./../python-sets/): [Python Sets](./../python-sets/) are similar to dictionaries but only store unique keys.
- [Functions](./../functions/): [Functions](./../functions/) can be used to create and modify dictionaries.
# [Python 1 Home](./../python-1-home/)