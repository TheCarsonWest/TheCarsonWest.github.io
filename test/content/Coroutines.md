## [Coroutines](./../Coroutines/)

### What are [Coroutines](./../Coroutines/)?
 [Coroutines](./../Coroutines/) are a special type of generator function in Python that allows for more flexible and efficient iteration over a sequence of values. Unlike regular generators, which only yield one value at a time, coroutines can yield multiple values and resume execution from the point where they left off when called again. This enables advanced control over the iteration and suspension of code execution.

### How to Use [Coroutines](./../Coroutines/)
To create a coroutine, use the `async def` syntax. When called, a coroutine returns a coroutine object. To iterate through the values yielded by the coroutine, use the `await` keyword within an `async def` function.

**Syntax**:
```python
async def coroutine_function():
 # yield values here
```

### Code Examples
```python
# simple coroutine to generate Fibonacci numbers
async def fibonacci():
 a, b = 0, 1
 while True:
 yield a
 a, b = b, a + b
```

```python
# call the coroutine and iterate over the values
async def main():
 for num in fibonacci():
 print(num)
```

### Related Python Concepts

- [Generators](./../Generators/): [Coroutines](./../Coroutines/) extend the functionality of generators.
- [[Async [Generators](./../Generators/): Async generators are a more advanced form of coroutines that allow for asynchronous iteration.
- [Decorators](./../Decorators/): [Decorators](./../Decorators/) can be used to enhance and modify coroutines.
- [Context Managers](./../Context-Managers/): [Coroutines](./../Coroutines/) can be used as context managers, implementing the `__aenter__` and `__aexit__` methods.
- [Asynchronous Programming](./../Asynchronous-Programming/): [Coroutines](./../Coroutines/) are essential for asynchronous programming in Python.