+++
 title = 'Set Operations'
[params]
	author = 'Carson West'
+++
# [Frozen Sets](./../frozen-sets/)
# [Set Operations](./../set-operations/) 
Set operations in Python leverage the power of the `set` data structure for efficient manipulation of unique elements.  Key operations include:

* **Union:** Combines elements from two or more sets.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1 | set2  # or set1.union(set2)
print(union_set)  # Output: {1, 2, 3, 4, 5}
```

* **Intersection:** Returns common elements between sets.

```python
intersection_set = set1 & set2  # or set1.intersection(set2)
print(intersection_set)  # Output: {3}
```

* **Difference:**  Elements in the first set but not in the second.

```python
difference_set = set1 - set2  # or set1.difference(set2)
print(difference_set)  # Output: {1, 2}
```

* **Symmetric Difference:** Elements in either set, but not in both.

```python
symmetric_difference_set = set1 ^ set2  # or set1.symmetric_difference(set2)
print(symmetric_difference_set)  # Output: {1, 2, 4, 5}
```

* **Subset and Superset checks:**

```python
set3 = {1,2}
is_subset = set3.issubset(set1) # or set3 <= set1
is_superset = set1.issuperset(set3) # or set1 >= set3
print(is_subset) #Output: True
print(is_superset) #Output: True

```

[Set Theory Basics](./../set-theory-basics/)  ([Python Sets](./../python-sets/))


**Other relevant notes:**

* [Set Comprehensions](./../set-comprehensions/)
* [Python Data Structures](./../python-data-structures/)

