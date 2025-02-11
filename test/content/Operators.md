+++
 title = 'Operators'
[params]
	author = 'Carson West'
+++
# [Control Flow If Statements](./../control-flow-if-statements/)
# Python [Operators](./../operators/) 
This note covers Python operators.  Further notes will be needed for subtopics.

**Types of [Operators](./../operators/):**

* **Arithmetic [Operators](./../operators/):**  These perform mathematical calculations.

```python
x = 10
y = [5](./../5/)

print(x + y)  # Addition
print(x - y)  # Subtraction
print(x * y)  # Multiplication
print(x / y)  # Division
print(x // y) # Floor Division (integer division)
print(x % y)  # Modulus (remainder)
print(x ** y) # Exponentiation
```

* **[Comparison Operators](./../comparison-operators/):** These compare two values and return a Boolean (True or False).

```python
x = 10
y = [5](./../5/)

print(x == y) # Equal to
print(x != y) # Not equal to
print(x > y)  # Greater than
print(x < y)  # Less than
print(x >= y) # Greater than or equal to
print(x <= y) # Less than or equal to
```

* **Logical [Operators](./../operators/):** These combine or modify Boolean expressions.

```python
x = True
y = False

print(x and y) # Logical AND
print(x or y)  # Logical OR
print(not x)   # Logical NOT
```

* **Assignment [Operators](./../operators/):** These assign values to variables.

```python
x = 10         # Simple assignment
x += [5](./../5/)         # x = x + [5](./../5/)
x -= [5](./../5/)         # x = x - [5](./../5/)
x *= [5](./../5/)         # x = x * [5](./../5/)
x /= [5](./../5/)         # x = x / [5](./../5/)
x %= [5](./../5/)         # x = x % [5](./../5/)
x **= [5](./../5/)        # x = x ** [5](./../5/)
x //= [5](./../5/)        # x = x // [5](./../5/)

```

* **[Bitwise Operators](./../bitwise-operators/):** These operate on individual bits of integers. [Bitwise Operators](./../bitwise-operators/)

* **Membership [Operators](./../operators/):** These test for membership in sequences (e.g., lists, tuples, strings).

```python
my_list = [[1](./../[1/), [2](./../2/), [3](./../3/)]
print([1](./../1/) in my_list)  # True
print([4](./../4/) in my_list)  # False
print([1](./../1/) not in my_list) # False

```

* **[Identity](./../identity/) [Operators](./../operators/):** These test for object identity (whether two variables refer to the same object in memory).

```python
x = [[1](./../[1/),[2](./../2/),[3](./../3/)]
y = [[1](./../[1/),[2](./../2/),[3](./../3/)]
z = x

print(x is y) # False (different objects)
print(x is z) # True (same object)
print(x == y) # True (same values)


```

**[Operator Precedence](./../operator-precedence/):**  The order in which operators are evaluated.  [Operator Precedence](./../operator-precedence/)


**Further Notes:**

* [Operator Overloading](./../operator-overloading/) (How operators behave differently with different data types.)
* [Short-circuiting in Logical Operators](./../short-circuiting-in-logical-operators/) (How `and` and `or` can sometimes avoid evaluating all operands.)

