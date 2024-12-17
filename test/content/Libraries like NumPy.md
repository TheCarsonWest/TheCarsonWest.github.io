+++
 title = 'Libraries like NumPy'
[params]
	author = 'Carson West'
+++
# [Modules and Packages](./../modules-and-packages/)
# Python Notes: [Libraries like NumPy](./../libraries-like-numpy/) 
**Current String:** [Libraries like NumPy](./../libraries-like-numpy/) 
NumPy is a fundamental library for numerical computing in Python.  It provides powerful tools for working with arrays and matrices, significantly speeding up numerical operations compared to using standard Python lists.

Key Features:

* **`ndarray` (n-dimensional array):** The core data structure of NumPy.  Allows for efficient storage and manipulation of large arrays of numerical data.  [NumPy ndarrays](./../numpy-ndarrays/)

* **Broadcasting:** Enables element-wise operations between arrays of different shapes under certain conditions. [NumPy Broadcasting](./../numpy-broadcasting/)

* **Vectorized Operations:**  Allows for applying operations to entire arrays at once, avoiding explicit loops and significantly improving performance.

* **Linear Algebra:** NumPy provides functions for linear algebra operations like matrix multiplication, eigenvalue decomposition, etc. [NumPy Linear Algebra](./../numpy-linear-algebra/)

* **Random Number Generation:**  Provides functions for generating various types of random numbers. [NumPy Random Number Generation](./../numpy-random-number-generation/)

* **Fourier Transforms:**  NumPy offers tools for performing Fourier transforms, useful in signal processing and other applications. [NumPy Fourier Transforms](./../numpy-fourier-transforms/)


**Example:**

```python
import numpy as np

# Creating a NumPy array
arr = np.array([1, 2, 3, 4, 5])

# Performing element-wise operations
squared_arr = arr ** 2 

# Matrix multiplication
matrix1 = np.array([1, 2], [3, 4](./../1-2]-[3-4/))
matrix2 = np.array([5, 6], [7, 8](./../5-6]-[7-8/))
result = np.dot(matrix1, matrix2)

print(arr)
print(squared_arr)
print(result)

```

**Related Notes:**

* [Python Data Structures](./../python-data-structures/)
* [Performance Optimization in Python](./../performance-optimization-in-python/)


