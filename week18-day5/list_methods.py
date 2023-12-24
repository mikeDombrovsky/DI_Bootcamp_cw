from functools import reduce
# map, filter, zip, reduce
def multiply_by2(num):
    return num * 2
# map
print(list(map(multiply_by2, [1, 2, 3])))

def check_odd(num):
    return num % 2 != 0
# filter
print(list(filter(check_odd, [1, 2, 3])))

# zip
# makes tuples of elements from each iterable
print(list(zip(['one','two'], [1, 2, 3]))) 

# reduce
def accum(acc, item):
    return acc + item

sum = reduce(accum, [1, 2, 3], 0)
print('reduce accumulated', sum)

#list unpacking
a, b, c, *rest= [1, 2, 3, 4, 5, 6]
print(a, b, c, rest)
