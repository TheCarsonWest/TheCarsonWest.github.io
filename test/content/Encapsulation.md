+++
 title = 'Encapsulation'
[params]
	author = 'Carson West'
+++
## Python [Encapsulation](./../encapsulation/)

### What is [Encapsulation](./../encapsulation/)?
 [Encapsulation](./../encapsulation/) is a concept in object-oriented programming that bundles data and methods together into a single unit, known as a class. It restricts direct access to certain attributes and methods of an object, making them only accessible through well-defined interfaces.

### How to Use [Encapsulation](./../encapsulation/)
To encapsulate data in a class, use private or protected attributes. To encapsulate methods, use private or protected methods. Private attributes are only accessible within the class itself, while protected attributes are accessible within the class and its subclasses.

### Code Examples
```python
class Person:
 def __init__(self, name):
 self.__name = name # private attribute

 def get_name(self):
 return self.__name # public method accessing private attribute
```

### Related Python Concepts
- [Classes and Objects](./../classes-and-objects/): [Encapsulation](./../encapsulation/) is a fundamental aspect of object-oriented programming.
- [Private and Protected Members](./../private-and-protected-members/): [Encapsulation](./../encapsulation/) is achieved by using private and protected members.
- [Inheritance](./../inheritance/): [Encapsulation](./../encapsulation/) ensures that private attributes are not inherited by subclasses.
- [Polymorphism](./../polymorphism/): Encapsulated methods can be overridden in subclasses, allowing for polymorphic behavior.
- [Descriptors](./../descriptors/): [Encapsulation](./../encapsulation/) can be implemented using descriptors to control attribute access.
# [Python 1 Home](./../python-1-home/)