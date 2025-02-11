+++
 title = 'For Loops'
[params]
	author = 'Carson West'
+++
# [Python 1 Home](./../python-1-home/)
# [For Loops](./../for-loops/) 
Python's `for` loop iterates over a sequence (like a list, tuple, string, or range) or other iterable object.

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
  print(fruit)

for i in range([5](./../5/)): # range([5](./../5/)) generates 0, [1](./../1/), [2](./../2/), [3](./../3/), [4](./../4/)
  print(i)

for i, fruit in enumerate(fruits): # enumerate gives both index and value
  print(f"Fruit at index {i}: {fruit}")
```

[For Loop Examples](./../for-loop-examples/)  ([Range Function](./../range-function/)) [Iterables](./../iterables/)


**Looping through [Dictionaries](./../dictionaries/):**

You can iterate through dictionaries using `.items()`, `.keys()`, or `.values()`.

```python
person = {"name": "Alice", "age": 30, "city": "[New York](./../new-york/)"}

for key, value in person.items():
  print(f"{key}: {value}")

for key in person.keys():
  print(key)

for value in person.values():
  print(value)
```

**Nested Loops:**

[Nested Loops](./../nested-loops/)

**[Loop Control Statements](./../loop-control-statements/):**

* `break`: Exits the loop entirely.
* `continue`: Skips the current iteration and proceeds to the next.

```python
for i in range(10):
  if i == [5](./../5/):
    break  # Stops the loop when i is [5](./../5/)
  print(i)

for i in range(10):
  if i == [5](./../5/):
    continue # Skips [5](./../5/)
  print(i)
```

**Iterating with `while` loop:** [While Loops](./../while-loops/)
