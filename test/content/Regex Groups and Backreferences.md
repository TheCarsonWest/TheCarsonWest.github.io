+++
 title = 'Regex Groups and Backreferences'
[params]
	author = 'Carson West'
+++
## [Regex Groups and Backreferences](./../regex-groups-and-backreferences/)

### What are [Regex Groups and Backreferences](./../regex-groups-and-backreferences/)?
Groups in [Regular Expressions](./../regular-expressions/) are used to capture substrings within the matched pattern. Backreferences allow referencing these captured substrings within the regular expression itself or in subsequent processing.

### How to Use Regex Groups
To create a group in a regular expression, use parentheses:

```
# capture the word "python"
(python)
```

Backreferences are used by escaping the opening parenthesis of the group:

```
# replace "Python" with "Py"
Python -> (Py)thon
```

### Code Examples
```python
import re

# find all occurrences of phone numbers
phone_pattern = re.compile(r"(\d{3}-?\d{3}-?\d{4})")

# match a string
match = phone_pattern.search("My phone number is 123-456-7890")

# access the captured group
phone_number = match.group(1)
```

### Related Python Concepts

- [Regular Expressions](./../regular-expressions/): Groups and backreferences are core components of [Regular Expressions](./../regular-expressions/).
- [Functions](./../functions/): [Regular Expressions](./../regular-expressions/) often use matching [Functions](./../functions/) like `search` and `findall`.
- [[Lambda [Functions](./../functions/): [Regular Expressions](./../regular-expressions/) can be used as arguments to [Lambda Functions](./../lambda-functions/).
- [Python Sets](./../python-sets/): Groups can be used to construct [Python Sets](./../python-sets/) of matched substrings.
- [Tuples](./../tuples/): Backreferences return [Tuples](./../tuples/) containing the captured substrings.
# [Python 1 Home](./../python-1-home/)