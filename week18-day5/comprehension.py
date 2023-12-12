# list, set, dict comprehension
# my_list = [param for param in iterable]
my_list = [char for char in 'hello'] 
my_list2 = [num for num in range(0, 7)]
my_list3 = [num ** 2 for num in range(0, 7)]
my_list4 = [num * 2 for num in range(0, 7) if num % 2 == 0]

print(my_list, my_list2, my_list3, my_list4)

# find duplicates
some_list = ['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n']
duplicates = []

for value in some_list:
    if some_list.count(value) > 1:
        if value not in duplicates:
            duplicates.append(value)

print(duplicates)

# same result with comprehension
duplicates2 = list(set([x for x in some_list if some_list.count(x) > 1]))

# set is the same 
my_set = {char for char in 'hello'}

simple_dict = {
    'a': 1,
    'b': 2
}

# dict comprehension
# my_dict = { ACTION for key, value in simple_dict.items()}
my_dict = { key: value ** 2 for key, value in simple_dict.items()}
print(my_dict)

# we may use any variables as key and value
dict_2 = {num: num * 2 for num in [1, 2, 3]}