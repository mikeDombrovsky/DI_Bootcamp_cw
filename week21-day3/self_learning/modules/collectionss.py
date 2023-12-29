from collections import Counter, defaultdict, OrderedDict

li = [1, 2, 3, 4, 5, 6, 7]

print(Counter(li))  # creates dict with counted copies of elements

def_dict = defaultdict(lambda: 'does not exist', {'a': 1, 'b': 2})

print(def_dict['c'])


ordered_dict = OrderedDict() # usual dict unordered, but here it is

ordered_dict['b'] = 2
ordered_dict['a'] = 1

print(ordered_dict)
