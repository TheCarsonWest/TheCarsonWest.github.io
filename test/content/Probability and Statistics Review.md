+++
 title = 'Probability and Statistics Review'
[params]
	author = 'Carson West'
+++
# [Exam Prep Schedule](./../exam-prep-schedule/)
# [Probability and Statistics Review](./../probability-and-statistics-review/)

**I. Probability**

* **Basic Concepts:**
    * Sample space ( $ \Omega $ ): Set of all possible outcomes.
    * Event: A subset of the sample space.
    * Probability of an event A:  $ P(A) = \frac{\text{number of favorable outcomes}}{\text{total number of outcomes}} $   (for equally likely outcomes).
    * Axioms of probability:
        *  $ 0 \le P(A) \le 1 $  for any event A.
        *  $ P(\Omega) = 1 $ 
        * If  $ A_1, A_2, ... $  are mutually exclusive events, then  $ P(\bigcup_{i=1}^{\infty} A_i) = \sum_{i=1}^{\infty} P(A_i) $ .
    * Conditional probability:  $ P(A|B) = \frac{P(A \cap B)}{P(B)} $  if  $ P(B) > 0 $ .
    * Bayes' Theorem:  $ P(A|B) = \frac{P(B|A)P(A)}{P(B)} $ 
    * Independence: Two events A and B are independent if  $ P(A \cap B) = P(A)P(B) $ .


* **Discrete Random Variables:**
    * Probability Mass Function (PMF):  $ P(X=x) = p(x) $ 
    * Expected Value:  $ E[X] = \sum_x x p(x) $ 
    * Variance:  $ Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2 $ 
    * [Discrete Probability Distributions](./../discrete-probability-distributions/)  (Binomial, Poisson, Geometric, etc.)


* **Continuous Random Variables:**
    * Probability Density Function (PDF):  $ f(x) $  such that  $ P(a \le X \le b) = \int_a^b f(x) dx $ .
    * Cumulative Distribution Function (CDF):  $ F(x) = P(X \le x) = \int_{-\infty}^x f(t) dt $ 
    * Expected Value:  $ E[X] = \int_{-\infty}^{\infty} x f(x) dx $ 
    * Variance:  $ Var(X) = E[(X - E[X])^2] = \int_{-\infty}^{\infty} (x - E[X])^2 f(x) dx $ 
    * [Continuous Probability Distributions](./../continuous-probability-distributions/) (Normal, Exponential, Uniform, etc.)


**II. Statistics**

* **Descriptive Statistics:**
    * Measures of central tendency: Mean, median, mode.
    * Measures of dispersion: Variance, standard deviation, range, IQR.
    * Data visualization: Histograms, box plots, scatter plots.


* **Inferential Statistics:**
    * Estimation: Point estimation (e.g., sample mean) and interval estimation (e.g., confidence intervals).
    * Hypothesis testing:  Formulating null and alternative hypotheses, choosing a test statistic, determining p-values, making decisions.
    * [Hypothesis Testing](./../hypothesis-testing/)([t-test](./../t-test/), [z-test](./../z-test/), [Chi-squared test](./../chi-squared-test/))
    * [Confidence Intervals](./../confidence-intervals/)
    * [Regression Analysis](./../regression-analysis/) (Linear regression, multiple regression)


* **Sampling Distributions:**
    * Central Limit Theorem:  The distribution of the sample mean approaches a normal distribution as the sample size increases, regardless of the shape of the population distribution.   $  \bar{X} \sim N(\mu, \frac{\sigma}{\sqrt{n}}) $ 
    * [Sampling Methods](./../sampling-methods/)


**III. Further Topics**

* [Bayesian Statistics](./../bayesian-statistics/)
* [Time Series Analysis](./../time-series-analysis/)


This is a high-level overview. Each item above could be expanded into a much more detailed note.
