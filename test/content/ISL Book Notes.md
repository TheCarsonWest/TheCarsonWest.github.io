+++
 title = 'ISL Book Notes'
[params]
	author = 'Carson West'
+++
# [Useful Websites and Articles](./../useful-websites-and-articles/)
# [ISL Book Notes](./../isl-book-notes/)

**Chapter 1: Introduction to Statistical Learning**

* **What is Statistical Learning?**  The goal is to build a model relating a response variable  $ Y $  to a set of predictor variables  $ X_1, X_2, ..., X_p $ .  We can use this model to:
    * Predict the response  $ Y $  for new values of  $ X $ .
    * Understand the relationship between  $ Y $  and  $ X $ .

* **Types of Statistical Learning:**
    * **Supervised Learning:** We have both  $ X $  and  $ Y $  for training data.  Examples: [Regression](./../regression/), [Classification](./../classification/).
    * **Unsupervised Learning:** We only have  $ X $ . Examples: [Clustering](./../clustering/), [Dimensionality Reduction](./../dimensionality-reduction/).

* **Regression vs. Classification:**
    * **Regression:**  $ Y $  is continuous.  Examples: predicting house prices, stock prices.
    * **Classification:**  $ Y $  is categorical. Examples: predicting customer churn, image recognition.

* **Model Accuracy:** Measured by error rate or prediction accuracy.  We use training data to fit the model and test data to evaluate its performance.  This is to avoid [Overfitting](./../overfitting/).

* **Bias-Variance Tradeoff:**  A crucial concept.  [Bias-Variance Tradeoff](./../bias-variance-tradeoff/).

* **Model Selection:** Choosing the best model involves balancing bias and variance.  Techniques include: [Cross-Validation](./../cross-validation/), [Regularization](./../regularization/).


**Chapter 2: Linear Regression**

* **Simple Linear Regression:**  Modeling the relationship between a single predictor variable  $ X $  and a continuous response variable  $ Y $  using a linear equation:   $ Y = \beta_0 + \beta_1X + \epsilon $ , where  $ \beta_0 $  is the intercept,  $ \beta_1 $  is the slope, and  $ \epsilon $  is the error term.  Estimating  $ \beta_0 $  and  $ \beta_1 $  using [Least Squares Estimation](./../least-squares-estimation/).

* **Multiple Linear Regression:** Extending simple linear regression to include multiple predictor variables:  $ Y = \beta_0 + \beta_1X_1 + \beta_2X_2 + ... + \beta_pX_p + \epsilon $ .  [Model Assumptions](./../model-assumptions/).

* **Assessing Model Fit:** Using  $ R^2 $ , adjusted  $ R^2 $ , and [Residual Plots](./../residual-plots/) to evaluate the model's goodness of fit.

* **Model Diagnostics:** Identifying and addressing potential problems such as [Multicollinearity](./../multicollinearity/) and [Heteroscedasticity](./../heteroscedasticity/).


**Chapter 3:  Classification**

* **Logistic Regression:** Modeling the probability of a binary outcome using a logistic function:  $ P(Y=1|X) = \frac{1}{1 + exp(-\beta_0 - \beta_1X)} $ . [Logistic Regression Details](./../logistic-regression-details/)

* **K-Nearest Neighbors:** Classifying a new observation based on the majority class among its  $ k $  nearest neighbors in the feature space. [KNN Algorithm](./../knn-algorithm/)

* **Linear Discriminant Analysis (LDA):** Assuming data is normally distributed and finding linear combinations of predictors that maximize the separation between classes. [LDA Details](./../lda-details/)

* **Quadratic Discriminant Analysis (QDA):**  Similar to LDA, but allows for different covariance matrices for each class. [QDA Details](./../qda-details/)


[Regression](./../regression/)
[Classification](./../classification/)
[Clustering](./../clustering/)
[Dimensionality Reduction](./../dimensionality-reduction/)
[Overfitting](./../overfitting/)
[Bias-Variance Tradeoff](./../bias-variance-tradeoff/)
[Cross-Validation](./../cross-validation/)
[Regularization](./../regularization/)
[Least Squares Estimation](./../least-squares-estimation/)
[Model Assumptions](./../model-assumptions/)
[Residual Plots](./../residual-plots/)
[Multicollinearity](./../multicollinearity/)
[Heteroscedasticity](./../heteroscedasticity/)
[Logistic Regression Details](./../logistic-regression-details/)
[KNN Algorithm](./../knn-algorithm/)
[LDA Details](./../lda-details/)
[QDA Details](./../qda-details/)

