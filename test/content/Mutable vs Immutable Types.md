+++
 title = 'Mutable vs Immutable Types'
[params]
	author = 'Carson West'
+++
# [Lists](./../lists/)
# Mutable vs Immutable Types

This refers to the ability of an object to change its value after it's created.

* **Immutable Types:**  Once created, their value cannot be changed.  If you perform an operation that seems to modify them, you're actually creating a *new* object.

    Examples:
    ```python
    my_string = "hello"
    my_string += " world"  # Creates a new string object; my_string now points to this new object.
    print(id(my_string)) #The memory address will change
    my_tuple = (1, 2, 3)
    #my_tuple[0] = 4  # This will raise a TypeError because tuples are immutable.
    ```
    [Immutable Types: Deeper Dive](./../immutable-types:-deeper-dive/)


* **Mutable Types:** Their value can be changed after creation.

    Examples:
    ```python
    my_list = [1, 2, 3]
    my_list.append(4)  # Modifies the list in place.
    print(id(my_list)) #The memory address will remain the same
    my_dict = {"a": 1, "b": 2}
    my_dict["c"] = 3  # Modifies the dictionary in place.
    ```
    [Mutable Types: Deeper Dive](./../mutable-types:-deeper-dive/)


* **Implications:**

    * **Immutability often leads to better code predictability and easier debugging.**  Since objects don't change unexpectedly, it's easier to reason about the state of your program.
    * **Mutability can be more efficient for certain operations.** Modifying a list in place is generally faster than creating a new list every time you want to change it.
    * **Immutability is crucial for data integrity in some contexts.**  For instance, using immutable objects as keys in dictionaries is essential, because the key's identity must remain constant.
    *  [Common Pitfalls with Mutability and Immutability](./../common-pitfalls-with-mutability-and-immutability/)


* **Related Notes:** [Data Structures in Python](./../data-structures-in-python/)
