# OOP
print(type(None))   # <class 'NoneType'>
print(type(True))   # <class 'bool'>
print(type(5))      # <class 'int'>
print(type(5.5))    # <class 'float'>
print(type('5.5'))  # <class 'str'>
print(type([]))     # <class 'list'>
print(type(()))     # <class 'tuple'>
print(type({}))     # <class 'dict'>

class BigObject:
    pass


print(type(BigObject))     # <class 'type'>

big_obj = BigObject()

print(type(big_obj))     # <class '__main__.BigObject'>
