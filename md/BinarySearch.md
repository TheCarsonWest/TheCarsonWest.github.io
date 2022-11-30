# Binary search algorithm
## I literally just learned this 
-carson west

[The best explanation I could find](https://www.w3resource.com/python-exercises/data-structures-and-algorithms/python-search-and-sorting-exercise-1.php)

---

A binary search algorithm searches for a number in a list in what I think is the fastest possible way, but idk. Here are the steps in the way I understand them

- You have a list of numbers sorted smallest to largest.
- You get the midpoint
- if the number being searched for is less than the midpoint, get rid of every number it is greater than the midpoint. If not, do the inverse.
- repeat the previous two steps until you have one item

heres it in python( i stole from the internet)
```py
def binary_search(item_list,item):
	first = 0
	last = len(item_list)-1
	found = False
	while( first<=last and not found):
		mid = (first + last)//2
		if item_list[mid] == item :
			found = True
		else:
			if item < item_list[mid]:
				last = mid - 1
			else:
				first = mid + 1	
	return found
```
## math time

every iteration of the algorithm cuts the list in half, so here is the equation to find the number of steps:
### len/2^steps
### steps = sqrt(len)
### you will **always round this equation up**

## other things you'll see in questions
They'll put four lists and ask which one can be binary searched. **The only lists that can be binary searched are ___numbered lists in numerical order___**

I hope I explained that well.
bye