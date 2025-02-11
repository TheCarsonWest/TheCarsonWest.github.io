+++
 title = 'Inheritance in Python'
[params]
	author = 'Carson West'
+++
# [Method Resolution Order ([[MRO](./../method-resolution-order-([[mro/))]]
# [Inheritance](./../inheritance/) in Python]] 
**Definition:** [Inheritance](./../inheritance/) is a mechanism that allows a class (the *child class* or *subclass*) to inherit attributes and methods from another class (the *parent class* or *superclass*).  This promotes code reusability and establishes an "is-a" relationship between classes.

**Syntax:**

```python
class ParentClass:
    def __init__(self, parent_attribute):
        self.parent_attribute = parent_attribute
    def parent_method(self):
        print("Parent method called")

class ChildClass(ParentClass):
    def __init__(self, parent_attribute, child_attribute):
        super().__init__(parent_attribute) # Call parent class constructor
        self.child_attribute = child_attribute
    def child_method(self):
        print("Child method called")

#Example Usage
child_object = ChildClass("parent_value", "child_value")
print(child_object.parent_attribute) # Accesses parent attribute
child_object.parent_method() # Accesses parent method
child_object.child_method() # Accesses child method

```

**Types of [Inheritance](./../inheritance/):**

* **Single [Inheritance](./../inheritance/):** A child class inherits from only one parent class.  (Example shown above)
* **[[Multiple [Inheritance](./../inheritance/):** A child class inherits from multiple parent classes.  ([[Multiple [Inheritance](./../inheritance/) in Python]])
* **Multilevel [Inheritance](./../inheritance/):**  A child class inherits from a parent class, which in turn inherits from another parent class. (([[Multilevel [Inheritance](./../inheritance/) in Python]])
* **Hierarchical [Inheritance](./../inheritance/):** Multiple child classes inherit from a single parent class. (([[Hierarchical [Inheritance](./../inheritance/) in Python]])
* **Hybrid [Inheritance](./../inheritance/):** A combination of multiple inheritance and multilevel inheritance. (([[Hybrid [Inheritance](./../inheritance/) in Python]])


**`super()` function:**

The `super()` function is used to call methods of the parent class from within the child class.  This is particularly useful when you want to extend or modify the behavior of a parent class method without rewriting it entirely.  ([super() function](./../super()-function/))


**[Method Overriding](./../method-overriding/):**

When a child class provides a method with the same name and signature as a method in the parent class, it *overrides* the parent class method.  The child class method will be called instead of the parent class method. ([Method Overriding](./../method-overriding/) in Python]])


**Method Resolution Order ([MRO](./../mro/)):**

In multiple inheritance, the [MRO](./../mro/) determines the order in which methods are searched for when called. Python uses the C3 linearization algorithm to determine the [MRO](./../mro/).  ([Method Resolution Order ([[MRO](./../method-resolution-order-([[mro/))]])



**Advantages of [Inheritance](./../inheritance/):**

* **Code Reusability:** Avoids redundant code by inheriting attributes and methods.
* **Extensibility:** Easily extend functionality by adding new methods or overriding existing ones.
* **Maintainability:** Changes to the parent class automatically propagate to child classes.
* **Organization:** Creates a clear hierarchy and structure in your code.


**Disadvantages of [Inheritance](./../inheritance/):**

* **Tight Coupling:** Changes in the parent class can affect child classes.
* **Complexity:** Can lead to complex class hierarchies, especially with multiple inheritance.

