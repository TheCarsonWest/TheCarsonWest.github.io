+++
 title = 'Classes and Objects'
[params]
	author = 'Carson West'
+++
# [Python 1 Home](./../python-1-home/)
# Classes and Objects

Python uses classes to create user-defined data types.  A class is a blueprint for creating objects.  Objects are instances of a class.

```python
class Dog:
    def __init__(self, name, breed): #Constructor
        self.name = name
        self.breed = breed

    def bark(self):
        print("Woof!")

my_dog = Dog("Buddy", "Golden Retriever")  #Creating an object (instance of Dog class)
print(my_dog.name) # Accessing attributes
my_dog.bark() # Calling a method
```

[Constructors](./../constructors/)
[Methods](./../methods/)
[Attributes](./../attributes/)

Classes have:

* **Attributes:**  These are variables that hold data associated with an object (e.g., `my_dog.name`, `my_dog.breed`).
* **Methods:** These are functions that operate on the object's data (e.g., `my_dog.bark()`).  Methods always take `self` as their first parameter, which refers to the instance of the class.

**Key Concepts:**

* **`__init__` method:** This is a special method called the constructor. It's automatically called when you create a new object.  It's used to initialize the object's attributes.
* **`self` parameter:**  Refers to the instance of the class.  It allows methods to access and modify the object's attributes.


Related Notes:
* [Inheritance](./../inheritance/)
* [Polymorphism](./../polymorphism/)
* [Encapsulation](./../encapsulation/)
* [Abstract Classes](./../abstract-classes/)
* [Multiple Inheritance](./../multiple-inheritance/)
* [Method Resolution Order (MRO)](./../method-resolution-order-(mro)/)
* [Private and Protected Members](./../private-and-protected-members/)

