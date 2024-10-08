+++
 title = 'Private and Protected Members'
[params]
	author = 'Carson West'
+++
## [Private and Protected Members](./../private-and-protected-members/)

### Explanation
Private and protected members in Python are used to restrict access to certain attributes or methods of a class. Private members are only accessible within the class, while protected members can be accessed from within the class and its subclasses.

### Usage
**Private Members**

To make a member private, prefix it with two leading underscores (_). For example:

```python
class MyClass:
 def __private_method(self):
 ...
 
 def __private_attribute = ...
```

**Protected Members**

To make a member protected, prefix it with a single leading underscore (_). For example:

```python
class MyClass:
 def _protected_method(self):
 ...
 
 _protected_attribute = ...
```

### Code Examples
```python
# Private method
class MyClass:
 def __private_method(self):
 print("This is a private method")

# Protected method
class MyClass:
 def _protected_method(self):
 print("This is a protected method")
```

## Related Python Concepts
- [Encapsulation](./../encapsulation/): Private and protected members are part of the encapsulation mechanism in Python.
- [Classes and Objects](./../classes-and-objects/): Private and protected members are defined within classes.
- [Inheritance](./../inheritance/): Protected members can be accessed from subclasses.
- [Function Parameters](./../function-parameters/): Private and protected methods can accept parameters like regular methods.
- [Return Values](./../return-values/): Private and protected methods can return values like regular methods.
# [Python 1 Home](./../python-1-home/)