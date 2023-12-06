# precedence
# ()
# **
# * /
# + -

complex #type for real numbers


bin_5 = bin(5)
print(bin_5)
print(int(bin_5, 2))

_private_variable = 'something'

#constant convention
CONSTANT = 0

#two underscores for tunders
__do_not_do_this = 0

a, b, c = 1, 2, 3

#augmented assigmnet operator
d = 3
d += 2

#<class 'str'>
long_str = '''
wow
0 0
---
'''
# Escape Sequence
weather = "It\'s \"kind of\" \t sunny \n"

#formatted strings
name = 'bobby'
f'formatted {name}'

#[start:stop:stepover]
print(name[1:3:2])#pass every 1,3.. etc 
print(name[1:])#to end
print(name[:3])#to 3
print(name[::1])#default
print(name[-1])#from end
print(name[::-1])#reverse

# str is immutable!

#type conversion
str100 = str(100)
print(type(str100))

#True - 1 False - 0

#Multiply strings
print("*" * 5)

#Short Circiting
if True or False:
    print('I check just first one')
    
# absence of value, like null    
none_value = None    

# ternary operator
is_friend = True
can_message = 'message allowed' if is_friend else 'not allowed'
print(can_message)

not True
not(True)

#list is kinda array in python
li = [1,3,2,4,5]
li2 = ['a','b','c']
#fast copy
copy = li[:]
#everything in python is object
copy.extend(['add', 'it'])
copy.pop()#removes and returns last or by index

print(copy.index('add'))# may throw error
print(copy.count('add'))
li.sort()
print(sorted(li)) # creates new list
print(li[::-1])# reverse a copy

list(range(1, 20)) # generate list.  range(100) makes from 0 to 99
new_str = '-'.join('elems', 'of', 'list')
print(new_str)

#tuple immutable and fast. Almost all list functions works same
a = 1,2,3 
b = (1,2,3)
print(a[1])

x, y, *other = (1,2,3,4,5) # other is list of rest

# set - unordered unique elems
my_set = {1,2,3,4,5,6}
set_from_list = set([1,1,2,2,3]) # {1,2,3}
print(1 in my_set) # True, no indexes

print(my_set.difference(set_from_list))
my_set.discard(1) # removes if exists
my_set.difference_update(set_from_list) # Remove all elements of another set from this set.
my_set.intersection(set_from_list)
my_set & set_from_list
my_set.isdisjoint(set_from_list) # bool if have same elements
my_set.union(set_from_list) # unites without duplicates in new set
print(my_set | set_from_list) # same
print(my_set.issubset(set_from_list))
print(my_set.issuperset(set_from_list))


print(True == 1)
print('' == 1)
print([] == 1)
print(10 == 10.0)
print([] == [])

# is more strict check
print(True is 1)
print('' is 1)
print([] is 1)
print(10 is 10.0)
print([] is [])

for item in [1,2,3]:
    pass # do nothing, just alow to have loop without error


for num in range(0,10):
    print(num)
    

for _ in range(0,10,2):
    print(_)   
    
for _ in range(10,0,-2): # reversed
    print(_)       
    
for i, char in enumerate('hello'):
    print(i, char)
    
    