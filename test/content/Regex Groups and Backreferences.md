+++
 title = 'Regex Groups and Backreferences'
+++
## [Regex Groups and Backreferences](./../regex-groups-and-backreferences/)

### What are [Regex Groups and Backreferences](./../regex-groups-and-backreferences/)?
Groups in regular expressions are used to capture substrings within the matched pattern. Backreferences allow referencing these captured substrings within the regular expression itself or in subsequent processing.

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

- [Regular Expressions](./../regular-expressions/): Groups and backreferences are core components of regular expressions.
- [Functions](./../functions/): Regular expressions often use matching functions like `search` and `findall`.
- [[Lambda [Functions](./../functions/): Regular expressions can be used as arguments to lambda functions.
- [Sets](./../sets/): Groups can be used to construct sets of matched substrings.
- [Tuples](./../tuples/): Backreferences return tuples containing the captured substrings.