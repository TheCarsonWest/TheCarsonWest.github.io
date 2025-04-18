+++
 title = 'Mean Value Theorem'
[params]
	author = 'Carson West'
+++
# [Calc Rules and theorems](./../calc-rules-and-theorems/)
# [Calc home](./../calc-home/)

The [Mean Value Theorem](./../mean-value-theorem/) is a fundamental theorem in calculus that connects the average rate of change of a function to its instantaneous rate of change.  It essentially states that if a function is continuous and differentiable on an interval, there exists at least one point within that interval where the instantaneous rate of change (slope of the tangent line) equals the average rate of change over the entire interval.

## 1.  Statement of the [Mean Value Theorem](./../mean-value-theorem/) 
Let  $ f $  be a function that satisfies the following two hypotheses:

1.  $ f $  is continuous on the closed interval  $ [a, b]] $ .
2.  $ f $  is differentiable on the open interval  $ (a, b) $ .

Then there exists a number  $ c $  in  $ (a, b) $  such that:

 $ f'(c) = \frac{f(b) - f(a)}{b - a} $ 


This equation states that the instantaneous rate of change at  $ c $  ( $ f'(c) $ ) is equal to the average rate of change of  $ f $  over the interval  $ [a, b]] $ .  The term  $ \frac{f(b) - f(a)}{b - a} $  represents the slope of the secant line connecting the points  $ (a, f(a)) $  and  $ (b, f(b)) $ .


## 2.  Geometric Interpretation

The [Mean Value Theorem](./../mean-value-theorem/) has a clear geometric interpretation. The equation  $ f'(c) = \frac{f(b) - f(a)}{b - a} $  means there exists a point  $ c $  in the interval  $ (a, b) $  where the tangent line to the graph of  $ f $  at  $ x = c $  is parallel to the secant line connecting the points  $ (a, f(a)) $  and  $ (b, f(b)) $ .

```desmos-graph
y = x^2
y = (3-0)/(2-0)*(x-0)+0
y = 1.5x
```

In the above graph, the curve represents  $ f(x) = x^2 $ , the interval is  $ [0,2 $ . The red line represents the secant line, and the blue line represents the tangent line at the point  $ c $  where the MVT holds.


## 3.  [Rolles Theorem](./../rolles-theorem/)

[Rolles Theorem](./../rolles-theorem/) is a special case of the [Mean Value Theorem](./../mean-value-theorem/) where  $ f(a) = f(b) $ .  In this case, the average rate of change is 0, and the theorem states that there exists at least one point  $ c $  in  $ (a, b) $  such that  $ f'(c) = 0 $ .  This means there's a horizontal tangent line somewhere in the interval.

**Statement of [Rolles Theorem](./../rolles-theorem/):**

Let  $ f $  be a function that satisfies the following hypotheses:

1.  $ f $  is continuous on the closed interval  $ [a, b]] $ .
2.  $ f $  is differentiable on the open interval  $ (a, b) $ .
3.  $ f(a) = f(b) $ 

Then there exists a number  $ c $  in  $ (a, b) $  such that  $ f'(c) = 0 $ .


## 4.  [Proof of the Mean Value Theorem](./../proof-of-the-mean-value-theorem/)

The [Mean Value Theorem](./../mean-value-theorem/) can be proven using [Rolles Theorem](./../rolles-theorem/).  The proof involves constructing an auxiliary function that satisfies the conditions of [Rolles Theorem](./../rolles-theorem/) and then applying [Rolles Theorem](./../rolles-theorem/) to find the point  $ c $ .  The detailed proof is beyond the scope of a concise rundown, but it relies on carefully constructing a line that connects the endpoints of the function and then subtracting that line from the original function to create a new function that satisfies [Rolles Theorem](./../rolles-theorem/).


## 5.  Applications of the [Mean Value Theorem](./../mean-value-theorem/) 
The [Mean Value Theorem](./../mean-value-theorem/) has numerous applications in calculus, including:

* **Determining the existence of solutions to equations:** It can be used to show that an equation has at least one solution within a given interval.
* **Estimating the value of a function:** It can provide bounds on the possible values of a function within an interval.
* **Analyzing the behavior of functions:** It helps understand the relationship between the [derivative](./../derivative/) and the function itself.


## 6.  Important Note on Hypotheses

It's crucial to remember that both [continuity](./../continuity/) on the closed interval  $ [a, b]] $  and differentiability on the open interval  $ (a, b) $  are necessary conditions for the [Mean Value Theorem](./../mean-value-theorem/) to hold.  If either condition is not met, the theorem may not apply.  There might not exist a point  $ c $  satisfying the conclusion.
