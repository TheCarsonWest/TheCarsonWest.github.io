+++
 title = 'Recursion in Python'
[params]
	author = 'Carson West'
+++
# [Python Functions](./../python-functions/)
# [Recursion](./../recursion/) in Python]] 
[Recursion](./../recursion/) is a powerful technique where a function calls itself within its own definition.  It's crucial to have a base case to stop the [Recursion](./../recursion/), otherwise, it will lead to a `RecursionError` (stack overflow).

**Key Components:**

* **Base Case:** The condition that stops the recursive calls.  Without a base case, the function will call itself infinitely.
* **Recursive Step:** The part where the function calls itself with a modified input, moving closer towards the base case.


**Example:**

```python
def factorial(n):
  """
  Calculates the factorial of a non-negative integer using recursion.
  """
  if n == 0:  # Base case
    return [1](./../1/)
  else:
    return n * factorial(n-[1](./../1/)) # Recursive step

print(factorial([5](./../5/)))  # Output: 120
```

**Potential Issues:**

* **Stack Overflow:**  If the [Recursion](./../recursion/) goes too deep (too many nested function calls), it can lead to a `RecursionError`. This happens because each recursive call adds a new frame to the call stack, and the stack has a limited size.
* **Inefficiency:** In some cases, [Recursion](./../recursion/) can be less efficient than iterative solutions (using loops).  This is especially true for problems that can be easily solved iteratively.

**When to Use [Recursion](./../recursion/):**

[Recursion](./../recursion/) is particularly well-suited for problems that can be naturally broken down into smaller, self-similar subproblems. Examples include tree traversal, graph algorithms, and certain mathematical problems (like factorial, Fibonacci sequence).

**Alternatives:**

Often, iterative approaches (using loops) can provide a more efficient solution to problems that can be solved recursively.  [[Iteration vs [Recursion](./../recursion/)


**Further Exploration:**

* [[Tail [Recursion](./../recursion/) (Optimization technique for specific types of [Recursion](./../recursion/))
* [Recursion](./../recursion/) Examples]] (More complex examples of recursive functions)

**Note:**  Always carefully consider the base case and potential for stack overflow when using [Recursion](./../recursion/).  For many problems, an iterative solution might be preferred for efficiency and to avoid potential errors.
