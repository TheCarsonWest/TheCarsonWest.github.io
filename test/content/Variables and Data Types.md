+++
 title = 'Variables and Data Types'
[params]
	author = 'Carson West'
+++
# [Operators](./../operators/)
# [Variables and Data Types](./../variables-and-data-types/) 
Python uses variables to store data.  A variable is essentially a named location in the computer's memory where you can store a value.  You don't need to explicitly declare the data type of a variable in Python; it's dynamically typed.

**Variable Assignment:**

```python
x = 10          # Integer
y = 3.14       # Float
name = "Alice"  # String
is_active = True # Boolean
my_list = 1, 2, 3 # List
my_tuple = (4, 5, 6) # Tuple
my_dict = {"a": 1, "b": 2} # Dictionary
```

**[Data Types](./../data-types/):**

* **Integer (int):** Whole numbers (e.g., 10, -5, 0).
* **Float (float):**  Numbers with decimal points (e.g., 3.14, -2.5).
* **String (str):** [Sequences](./../sequences/) of characters (e.g., "Hello", 'Python').  Strings are immutable (cannot be changed in place).
* **Boolean (bool):** Represents truth values; either `True` or `False`.
* **List (list):** Ordered, mutable (changeable) [Sequences](./../sequences/) of items.  Items can be of different [Data Types](./../data-types/).
* **Tuple (tuple):** Ordered, immutable [Sequences](./../sequences/) of items. Items can be of different [Data Types](./../data-types/).
* **Dictionary (dict):**  Unordered collections of key-value pairs.  Keys must be immutable (e.g., strings, numbers, [Tuples](./../tuples/)), but values can be of any type.


**Type Conversion (Casting):**

You can convert between [Data Types](./../data-types/) using built-in functions:

```python
x = 10
y = float(x)  # Convert integer to float
z = str(x)    # Convert integer to string
a = int(3.14) # Convert float to integer (truncates the decimal part)
b = bool(0)   # Convert 0 to False, any other number to True
```

[Type Conversion](./../type-conversion/)

**Naming Conventions:**

* Variable names should be descriptive and meaningful.
* Use lowercase letters with underscores to separate words (snake_case).
* Avoid using reserved keywords as variable names (e.g., `if`, `else`, `for`, `while`).


[Variable Naming Conventions](./../variable-naming-conventions/)


**Example:**

```python
age = 30
name = "Bob"
height = 5.10
is_adult = True

print(f"Name: {name}, Age: {age}, Height: {height}, Is Adult: {is_adult}")
```
