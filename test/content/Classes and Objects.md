+++
 title = 'Classes and Objects'
[params]
	author = 'Carson West'
+++
## [Classes and Objects](./../classes-and-objects/)

### What are [Classes and Objects](./../classes-and-objects/)?
In Python, classes are blueprints for creating objects. An object is an instance of a class, containing data and methods specific to that object. Classes define the attributes (variables) and methods (functions) that objects of that class will have.

### How to Use Classes
**Creating a Class:**
```python
class MyClass:
 # attributes (variables)
 attr1 = None
 attr2 = None

 # methods (functions)
 def method1(self):
 # method definition
 
 def method2(self, arg):
 # method definition with parameter `arg`
```

**Creating an Object:**
```python
my_object = MyClass()
```

**Accessing Attributes and Methods:**
```python
# access attribute
my_object.attr1

# call method
my_object.method1()
```

### Code Examples
**Example 1: Employee Class**
```python
class Employee:
 def __init__(self, name, salary):
 self.name = name
 self.salary = salary

 def get_name(self):
 return self.name

 def get_salary(self):
 return self.salary

emp1 = Employee("John", 50000)

print(emp1.get_name()) # Output: John
print(emp1.get_salary()) # Output: 50000
```

**Example 2: Student Class with Constructor**
```python
class Student:
 def __init__(self, name, age, grade):
 self.name = name
 self.age = age
 self.grade = grade

 def get_student_info(self):
 return f"{self.name} is {self.age} years old and has a grade of {self.grade}."

student1 = Student("Alice", 20, "A")

print(student1.get_student_info()) # Output: Alice is 20 years old and has a grade of A.
```

### Related Python Concepts

- [Variables and Data Types](./../variables-and-data-types/): Classes and objects store data in their attributes.
- [Functions](./../functions/): Methods are functions defined within classes.
- [Inheritance](./../inheritance/): Classes can inherit attributes and methods from parent classes.
- [Modules and Packages](./../modules-and-packages/): Classes and objects can be defined in Python modules.
- [Data Serialization (JSON, XML, Pickle)](./../data-serialization-(json-xml-pickle)/): Classes and objects can be serialized and deserialized for data exchange.
# [Python 1 Home](./../python-1-home/)