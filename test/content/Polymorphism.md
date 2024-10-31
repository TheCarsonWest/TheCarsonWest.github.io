+++
 title = 'Polymorphism'
[params]
	author = 'Carson West'
+++
## [Polymorphism](./../polymorphism/)

### What is [Polymorphism](./../polymorphism/)?
 [Polymorphism](./../polymorphism/) is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as the same type. It enables the code to interact with a common interface, regardless of the specific implementation or class of an object.

### How to Use [Polymorphism](./../polymorphism/)
 [Polymorphism](./../polymorphism/) is achieved through method overriding, where subclasses define their own implementation of methods inherited from their parent class.

### Code Examples
```python
# Define a base class Animal with a method speak()
class Animal:
 def speak(self):
 print("Animal speaks.")

# Create a subclass Dog that overrides the speak() method
class Dog(Animal):
 def speak(self):
 print("Dog barks.")

# Create a subclass Cat that overrides the speak() method
class Cat(Animal):
 def speak(self):
 print("Cat meows.")

# Create instances of Animal, Dog, and Cat
animal = Animal()
dog = Dog()
cat = Cat()

# Call the speak() method on all objects
animal.speak() # prints "Animal speaks."
dog.speak() # prints "Dog barks."
cat.speak() # prints "Cat meows."
```

### Related Python Concepts
- [Classes and Objects](./../classes-and-objects/): [Polymorphism](./../polymorphism/) relies heavily on [Inheritance](./../inheritance/) and objects of different classes.
- [Inheritance](./../inheritance/): Subclasses inherit the properties and methods of their parent class, allowing for method overriding and polymorphism.
- [Method Resolution Order (MRO)](./../method-resolution-order-(mro)/): Determines the order in which methods are searched within the class hierarchy during polymorphism.
- [Duck Typing](./../duck-typing/): A variant of polymorphism where objects are classified by methods they implement rather than their class.
- [Higher-Order [[Functions](./../higher-order-[[functions/): [Functions](./../functions/) that take other [Functions](./../functions/) as arguments or return [Functions](./../functions/) enable polymorphism by allowing runtime customization.
# [Python 1 Home](./../python-1-home/)