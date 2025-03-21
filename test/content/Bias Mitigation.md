+++
 title = 'Bias Mitigation'
[params]
	author = 'Carson West'
+++
# [Recommended Reading List](./../recommended-reading-list/)
# [Bias Mitigation](./../bias-mitigation/) Notes

**Main Goal:** Reduce or eliminate undesirable biases in datasets and models.

**Types of Bias:**

* **Sampling Bias:**  Data doesn't accurately represent the population.  [Sampling Bias Notes](./../sampling-bias-notes/)
* **Measurement Bias:**  Systematic error in how data is collected or measured. [Measurement Bias Notes](./../measurement-bias-notes/)
* **Algorithmic Bias:** Bias inherent in the algorithms themselves. [Algorithmic Bias Notes](./../algorithmic-bias-notes/)
* **Representation Bias:**  Inadequate representation of certain groups in the data.  Related to [Sampling Bias Notes](./../sampling-bias-notes/)


**Mitigation Techniques:**

* **Data Preprocessing:**
    * **Re-sampling:** Oversampling minority classes, undersampling majority classes.  Requires careful consideration to avoid introducing new biases. [Resampling Techniques](./../resampling-techniques/)
    * **Data Augmentation:**  Generating synthetic data to balance class distributions. [Data Augmentation Techniques](./../data-augmentation-techniques/)
    * **Data Cleaning:** Handling missing values, outliers, and inconsistencies. [Data Cleaning Techniques](./../data-cleaning-techniques/)
    * **Feature Selection:** Selecting features that are less likely to be biased. [Feature Selection Techniques](./../feature-selection-techniques/)
* **Algorithm Selection:** Choosing algorithms less susceptible to bias.  Consider fairness-aware algorithms. [Fairness-Aware Algorithms](./../fairness-aware-algorithms/)
* **Post-processing:**  Modifying model outputs to mitigate bias after training.  Examples include calibration and threshold adjustment. [Post-processing Techniques](./../post-processing-techniques/)
* **Adversarial Training:** Training a model to be robust against biased inputs. [Adversarial Training Notes](./../adversarial-training-notes/)

**Evaluation Metrics:**

Need to evaluate the effectiveness of bias mitigation techniques. Metrics will vary based on the type of bias and the context.  Some examples include:

* **Accuracy/Precision/Recall:**  Standard metrics, but need to be analyzed across different demographic groups to detect disparities.
* **Fairness Metrics:**  e.g., Equal Opportunity, Demographic Parity, Predictive Rate Parity. [Fairness Metrics Notes](./../fairness-metrics-notes/)

**Mathematical Formalism (example):**

Suppose we have a binary classification problem with protected attribute  $ A $  (e.g., gender) and outcome  $ Y $ .  We want to ensure that the model's predictions are fair across different values of  $ A $ .  One metric of fairness is **Equal Opportunity**, which requires:

 $ P(Y = 1 | \hat{Y} = 1, A = a) = P(Y = 1 | \hat{Y} = 1, A = a') $   for all  $ a, a' $ ,

where  $ \hat{Y} $  represents the model's prediction.


**Further Research:**

* Causal inference and bias mitigation. [Causal Inference and Bias](./../causal-inference-and-bias/)
* Explainable AI (XAI) and bias detection. [XAI and Bias Detection](./../xai-and-bias-detection/)


**Open Questions:**

* How to define and measure fairness in a way that is both meaningful and practical?
* How to balance fairness with accuracy and other desirable model properties?
* How to adapt bias mitigation techniques to different types of data and applications?


