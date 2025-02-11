+++
 title = 'Pandas Data Structures'
[params]
	author = 'Carson West'
+++
# [Libraries like Pandas](./../libraries-like-pandas/)
# [Pandas Data Structures](./../pandas-data-structures/) 
Pandas primarily uses two data structures:  `Series` and `DataFrame`.

* **Series:**  A one-dimensional labeled array capable of holding any data type (integers, strings, floating point numbers, Python objects, etc.).  The labels are collectively called the *index*.

```python
import pandas as pd

data = {'a': 10, 'b': 20, 'c': 30}
series = pd.Series(data)
print(series)
```

* **DataFrame:** A two-dimensional labeled data structure with columns of potentially different types. You can think of it like a spreadsheet or SQL table, or a dict of Series objects.  It has both a row and column index.

```python
data = {'col1': [[1](./../[1/), [2](./../2/), [3](./../3/)], 'col2': [[4](./../[4/), [5](./../5/), [6](./../6/)], 'col3': [[7](./../[7/), 8, 9]}
df = pd.DataFrame(data)
print(df)

# Accessing data
print(df['col1']) # Accessing a column
print(df.iloc[0]) # Accessing a row by integer location
print(df.loc[0, 'col1']) # Accessing a specific cell by label
```

[Series Object](./../series-object/)  ([DataFrame Object](./../dataframe-object/))

* **Index:**  Both `Series` and `DataFrame` use indexes to access data efficiently.  Indexes can be integers (default), dates, or even custom objects.  Understanding indexes is crucial for efficient data manipulation. [Pandas Indexing](./../pandas-indexing/)


* **Data Input/Output:** Pandas provides excellent tools for reading and writing data from various formats (CSV, Excel, SQL databases, etc.). [Pandas I/O](./../pandas-i/o/)


* **Data Cleaning and Manipulation:** Pandas offers a rich set of functions for cleaning and manipulating data, including handling missing values, data type conversion, and string manipulation. [Pandas Data Cleaning](./../pandas-data-cleaning/)


* **Data Wrangling:** This involves transforming and preparing data for analysis.  Includes tasks like merging, joining, pivoting, and reshaping data. [Pandas Data Wrangling](./../pandas-data-wrangling/)
