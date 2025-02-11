+++
 title = 'While Loops'
[params]
	author = 'Carson West'
+++
# [Python 1 Home](./../python-1-home/)
# [While Loops](./../while-loops/) 
While loops in Python execute a block of code repeatedly as long as a given condition is true.

```python
count = 0
while count < [5](./../5/):
    print(count)
    count += [1](./../1/)
```

The loop continues until `count` is no longer less than [5](./../5/).  We must ensure the condition eventually becomes false to avoid an infinite loop.

[Infinite Loops](./../infinite-loops/)

**Important Considerations:**

* **[Infinite Loops](./../infinite-loops/):**  If the condition never evaluates to `False`, the loop will run indefinitely.  This is a common error.
* **Break Statement:** The `break` statement can be used to exit a `while` loop prematurely, regardless of the condition.
* **Continue Statement:** The `continue` statement skips the rest of the current iteration and proceeds to the next iteration.


**Example with `break`:**

```python
count = 0
while True:
    print(count)
    count += [1](./../1/)
    if count >= [5](./../5/):
        break
```

**Example with `continue`:**

```python
count = 0
while count < [5](./../5/):
    count += [1](./../1/)
    if count == [3](./../3/):
        continue  # Skip printing [3](./../3/)
    print(count)
```

**Related Notes:**

* [Control Flow If Statements](./../control-flow-if-statements/)
* [For Loops](./../for-loops/)

