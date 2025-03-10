+++
 title = 'Zip Function'
[params]
	author = 'Carson West'
+++
# [Dictionary Comprehension](./../dictionary-comprehension/)
# [Zip Function](./../zip-function/) 
The `zip()` function in Python takes [Iterables](./../iterables/) (like [Lists](./../lists/), [Tuples](./../tuples/), or strings) as input and returns an iterator of [Tuples](./../tuples/).  Each tuple contains the i-th element from each of the input [Iterables](./../iterables/).  The iterator stops when the shortest input iterable is exhausted.

```python
list1 = 1, 2, 3
list2 = ['a', 'b', 'c']]

zipped = zip(list1, list2)
print(list(zipped))  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]]

#Example with unequal length lists
list3 = 1,2,3,4,5
list4 = ['a','b']]
zipped2 = zip(list3,list4)
print(list(zipped2)) #Output: [(1, 'a'), (2, 'b')]]

#Zipping more than two lists
list5 = 1,2,3
list6 = ['a','b','c']]
list7 = [True, False, True]]
zipped3 = zip(list5, list6, list7)
print(list(zipped3)) #Output: [(1, 'a', True), (2, 'b', False), (3, 'c', True)]]

#Zipping with strings
string1 = "abc"
string2 = "def"
zipped4 = zip(string1,string2)
print(list(zipped4)) #Output: [('a', 'd'), ('b', 'e'), ('c', 'f')]]
```

[Iterators](./../iterators/)

[Iterables](./../iterables/)


If you need to zip [Iterables](./../iterables/) of different lengths and want to pad the shorter [Iterables](./../iterables/) with a fill value, you can use `itertools.zip_longest()`:

```python
from itertools import zip_longest

list3 = 1,2,3,4,5
list4 = ['a','b']]
zipped_longest = list(zip_longest(list3,list4, fillvalue='-'))
print(zipped_longest) #Output: [(1, 'a'), (2, 'b'), (3, '-'), (4, '-'), (5, '-')]]
```

[itertools.zip_longest()](./../itertools.zip_longest()/)

**Common Use Cases:**

* Creating [Dictionaries](./../dictionaries/) from [Lists](./../lists/) of keys and values.
* Processing multiple datasets in parallel.
* Combining data from multiple sources.


