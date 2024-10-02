# Abstract Classes ## [Abstract Classes](./../abstract-classes/)

### What are [Abstract Classes](./../abstract-classes/)?

Abstract classes are blueprints for creating other classes. They contain methods that must be implemented (overridden) by the derived classes. Abstract classes cannot be instantiated directly; they are meant to be inherited and extended.

### How to Use [Abstract Classes](./../abstract-classes/)

To create an abstract class, use the `abc` module:

```python
from abc import ABC, abstractmethod
```

1. **Define Abstract Methods**:
 Define abstract methods using the `@abstractmethod` decorator:

 ```python
 class AbstractClass(ABC):
 @abstractmethod
 def abstract_method(self):
 pass
 ```
2. **Override Abstract Methods**:
 Derived classes must override the abstract methods of the abstract class:

 ```python
 class DerivedClass(AbstractClass):
 def abstract_method(self):
 # Implement the method
 pass
 ```

### Code Examples

```python
from abc import ABC, abstractmethod

class Shape(ABC):
 @abstractmethod
 def area(self):
 pass

class Square(Shape):
 def __init__(self, side):
 self.side = side

 def area(self):
 return self.side ** 2
```

### Related Python Concepts

- [Classes and Objects](./../classes-and-objects/): Abstract classes introduce the concept of abstraction in object-oriented programming.
- [Inheritance](./../inheritance/): Derived classes inherit the abstract methods from their abstract class.
- [Polymorphism](./../polymorphism/): Abstract methods encourage polymorphism by allowing derived classes to provide different implementations of the same method.
- [Type Hinting](./../type-hinting/): Type annotations can be used to specify the expected type of the abstract methods.
- [Mutable vs Immutable Types](./../mutable-vs-immutable-types/): Abstract classes are typically considered immutable, as their methods cannot be modified.