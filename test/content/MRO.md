+++
 title = 'MRO'
[params]
	author = 'Carson West'
+++
# [Multiple Inheritance](./../multiple-inheritance/)
# [MRO](./../mro/) Notes

**MRO:** Method Resolution Order.  Determines the order in which methods are searched for during inheritance in Python.  Python uses the C3 linearization algorithm for its MRO.

Crucial for understanding how inheritance works, especially with multiple inheritance.  Incorrect [MRO](./../mro/) can lead to unexpected behavior.

[C3 Linearization](./../c3-linearization/)  (This will be a separate note explaining the C3 algorithm)

Example:

```python
class A:
    def method(self):
        print("A")

class B(A):
    def method(self):
        print("B")

class C(A):
    def method(self):
        print("C")

class D(B, C):
    pass

d = D()
d.method() # Output: B (because of MRO)

print(D.__mro__) # Shows the MRO: (<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)

```

Things to explore further:

*   Diamond problem (and how Python's [MRO](./../mro/) solves it) [Diamond Problem](./../diamond-problem/)
*   Impact of [MRO](./../mro/) on super() [super()](./../super()/)
*   [MRO](./../mro/) in different Python versions (though unlikely to change significantly)

Related Notes:
* [Inheritance](./../inheritance/)
* [Multiple Inheritance](./../multiple-inheritance/)

