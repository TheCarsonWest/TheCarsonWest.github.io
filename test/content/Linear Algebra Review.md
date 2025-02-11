+++
 title = 'Linear Algebra Review'
[params]
	author = 'Carson West'
+++
# [Exam Prep Schedule](./../exam-prep-schedule/)
# [Linear Algebra Review](./../linear-algebra-review/)

**Key Concepts:**

* **Vectors:**  Ordered lists of numbers.  Represented as column vectors:   $  \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}  $   or row vectors:  $  \begin{bmatrix} x_1 & x_2 & \cdots & x_n \end{bmatrix}  $ .  [Vector Operations](./../vector-operations/)
* **Matrices:** Rectangular arrays of numbers.   $ A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix} $  [Matrix Operations](./../matrix-operations/)
* **Linear Transformations:** Functions that map vectors to vectors in a linear way.   $ T(\mathbf{x} + \mathbf{y}) = T(\mathbf{x}) + T(\mathbf{y}) $  and  $ T(c\mathbf{x}) = cT(\mathbf{x}) $  for scalars  $ c $ .  Represented by matrices. [Linear Transformations and Matrices](./../linear-transformations-and-matrices/)
* **Vector Spaces:**  A collection of vectors that is closed under vector addition and scalar multiplication. [Vector Spaces](./../vector-spaces/)
* **Linear Independence:** A set of vectors is linearly independent if no vector can be written as a linear combination of the others.   $ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n = \mathbf{0} $  implies  $ c_1 = c_2 = \cdots = c_n = 0 $ . [Linear Independence and Dependence](./../linear-independence-and-dependence/)
* **Span:** The set of all possible linear combinations of a set of vectors. [Span of Vectors](./../span-of-vectors/)
* **Basis:** A linearly independent set of vectors that spans the entire vector space. [Basis and Dimension](./../basis-and-dimension/)
* **Dimension:** The number of vectors in a basis.
* **Eigenvalues and Eigenvectors:**  For a square matrix  $ A $ , an eigenvector  $ \mathbf{v} $  satisfies  $ A\mathbf{v} = \lambda\mathbf{v} $ , where  $ \lambda $  is the corresponding eigenvalue.  [Eigenvalues and Eigenvectors](./../eigenvalues-and-eigenvectors/)
* **Determinant:** A scalar value associated with a square matrix.   $ det(A) = 0 $  if and only if the matrix is singular (non-invertible).  [Determinants](./../determinants/)
* **Rank:** The dimension of the column space (or row space) of a matrix.  [Rank of a Matrix](./../rank-of-a-matrix/)
* **Null Space (Kernel):** The set of all vectors  $ \mathbf{x} $  such that  $ A\mathbf{x} = \mathbf{0} $ . [Null Space](./../null-space/)
* **Column Space (Range):** The span of the column vectors of a matrix. [Column Space](./../column-space/)
* **Row Space:** The span of the row vectors of a matrix. [Row Space](./../row-space/)
* **Orthogonality:** Two vectors  $ \mathbf{u} $  and  $ \mathbf{v} $  are orthogonal if their dot product is zero:  $ \mathbf{u} \cdot \mathbf{v} = 0 $ . [Orthogonality and Orthonormal Bases](./../orthogonality-and-orthonormal-bases/)
* **Gram-Schmidt Process:** A method for orthonormalizing a set of linearly independent vectors. [Gram-Schmidt Process](./../gram-schmidt-process/)
* **Inner Product:** A generalization of the dot product to more abstract vector spaces. [Inner Product Spaces](./../inner-product-spaces/)
* **Singular Value Decomposition (SVD):** A factorization of a matrix into three matrices with special properties. [Singular Value Decomposition](./../singular-value-decomposition/)


**Important Theorems:**

* **Rank-Nullity Theorem:**  For a matrix A,  $ rank(A) + nullity(A) = number\ of\ columns\ in\ A $ .


**Applications:**

* [Linear Algebra Applications in Machine Learning](./../linear-algebra-applications-in-machine-learning/)
* [Linear Algebra Applications in Computer Graphics](./../linear-algebra-applications-in-computer-graphics/)
* [Linear Algebra Applications in Physics](./../linear-algebra-applications-in-physics/)


**References:**

* Linear Algebra and its Applications by David C. Lay


