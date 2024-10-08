+++
 title = 'Dynamic Importing'
[params]
	author = 'Carson West'
+++
## [Dynamic Importing](./../dynamic-importing/)

### What is [Dynamic Importing](./../dynamic-importing/)?
Dynamic importing is a technique in Python that allows the importing of modules or packages at runtime based on a dynamically determined string. It is different from static importing, which imports modules or packages explicitly at the beginning of a script.

### How to Use [Dynamic Importing](./../dynamic-importing/)
The `importlib` module provides functions for dynamic importing:

- `importlib.import_module(module_name)`: Imports a module by its name and returns the module object.
- `importlib.reload(module)`: Reloads a previously imported module.

### Code Examples
```python
# Dynamically import the 'math' module
import importlib
math_module = importlib.import_module('math')

# Use the imported module
print(math_module.sqrt(16)) # Output: 4.0
```

```python
# Dynamically import the 'json' module and reload it
import importlib
json_module = importlib.import_module('json')
json_module = importlib.reload(json_module) # Reload the module

# Use the reloaded module
json_str = '{"name": "John"}'
json_data = json_module.loads(json_str) # Load JSON string
print(json_data['name']) # Output: John
```

### Related Python Concepts

- [Modules and Packages](./../modules-and-packages/): Dynamic importing provides a way to dynamically load modules and packages.
- [Importing Modules](./../importing-modules/): Dynamic importing is an alternative to static importing.
- [Variables and Data Types](./../variables-and-data-types/): Dynamic importing relies on strings to represent module names.
- [Functions](./../functions/): The `importlib.import_module()` and `importlib.reload()` functions are used for dynamic importing.
- [Decorators](./../decorators/): Dynamic importing can be used in conjunction with decorators to load modules based on runtime conditions.
- [Building and Distributing Python Packages](./../building-and-distributing-python-packages/)
- 
# [Python 1 Home](./../python-1-home/)