+++
 title = 'Multiple Inheritance'
[params]
	author = 'Carson West'
+++
## [Multiple [[Inheritance](./../multiple-[[inheritance/) in Python

### What is [Multiple [[Inheritance](./../multiple-[[inheritance/)?
Multiple inheritance is a feature in Python that allows a class to inherit from multiple parent classes, inheriting their attributes and functionalities. It provides a way to combine functionalities from different classes into a single class.

### How to Use [Multiple [[Inheritance](./../multiple-[[inheritance/)
To implement multiple inheritance, use the following syntax:

```python
class ChildClass(ParentClass1, ParentClass2, ...):
 # body of the child class
```

where `ChildClass` inherits from `ParentClass1`, `ParentClass2`, and so on.

### Code Examples
```python
class Animal:
 def __init__(self, name):
 self.name = name

class Dog(Animal):
 def bark(self):
 print("Woof!")

class Cat(Animal):
 def meow(self):
 print("Meow!")

class Pet(Dog, Cat): # inherits from both Dog and Cat
 def play(self):
 print(f"{self.name} is playing!")

my_pet = Pet("Leo")
my_pet.bark() # inherited from Dog
my_pet.meow() # inherited from Cat
my_pet.play() # defined in Pet
```

### Related Python Concepts

- [Classes and Objects](./../classes-and-objects/): Multiple inheritance extends a class by combining characteristics from multiple parent classes.
- [Inheritance](./../inheritance/): Multiple inheritance is a type of inheritance where a class can inherit from multiple parent classes.
- [Polymorphism](./../polymorphism/): Overriding methods from parent classes in the child class demonstrates polymorphism.
- [Encapsulation](./../encapsulation/): Attributes and methods from parent classes can be encapsulated within the child class through multiple inheritance.
- [Method Resolution Order (MRO)](./../method-resolution-order-(mro)/): Method Resolution Order determines the order in which methods are resolved in the child class when inheriting from multiple parent classes.
# [Python 1 Home](./../python-1-home/)