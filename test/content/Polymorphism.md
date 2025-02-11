+++
 title = 'Polymorphism'
[params]
	author = 'Carson West'
+++
# [Python 1 Home](./../python-1-home/)
# [Polymorphism](./../polymorphism/)  [Polymorphism](./../polymorphism/) allows objects of different classes to be treated as objects of a common type.  This is particularly useful when dealing with inheritance.

* **Example:**  Consider a scenario where you have different shapes (circle, square, triangle) each with an `area()` method.  [Polymorphism](./../polymorphism/) allows you to call `area()` on any shape object without needing to know its specific type.

```python
class Shape:
    def area(self):
        raise NotImplementedError

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return [3](./../3/).14159 * self.radius * self.radius

class Square(Shape):
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side * self.side

shapes = [Circle([5](./../5/)), Square([4](./../4/))]
for shape in shapes:
    print(shape.area()) # Polymorphic call to area()
```

[Inheritance](./../inheritance/)  (This needs its own note)

[Classes and Objects](./../classes-and-objects/) (This needs its own note)


Related notes:

- [Method Resolution Order (MRO)](./../method-resolution-order-(mro)/)
- [Abstract Classes](./../abstract-classes/) (This note should explain abstract base classes and their use in polymorphism)

