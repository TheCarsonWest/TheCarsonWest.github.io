+++
 title = 'For Loops'
[params]
	author = 'Carson West'
+++
# Python [For Loops](./../for-loops/)

## What are [For Loops](./../for-loops/)?
For loops are a control flow statement used to iterate over a sequence of items, such as a list, tuple, or string. They allow the execution of a code block for each element in the sequence.

## How to Use [For Loops](./../for-loops/)
The syntax of a for loop in Python is:

```python
for item in iterable:
 # code block to be executed for each item in the iterable
```

The `iterable` can be any sequence of items, such as a list, tuple, or string. The loop will execute the code block for each item in the iterable, assigning the value of the current item to the `item` variable.

## Code Examples
```python
# iterate over a list of names
names = ["Alice", "Bob", "Charlie"]
for name in names:
 print(name)
```

```python
# iterate over a range of numbers
for number in range(10):
 print(number)
```

## Related Python Concepts

- [Lists](./../lists/): For loops are commonly used to iterate over lists of elements.
- [Tuples](./../tuples/): For loops can also be used to iterate over tuples of elements.
- [Strings](./../strings/): For loops can be used to iterate over the characters in a string.
- [List Comprehension](./../list-comprehension/): For loops can be used to generate new lists through list comprehension.
- [Generators](./../generators/): For loops can be used to iterate over generators, which are objects that yield values one at a time.
# [Python 1 Home](./../python-1-home/)