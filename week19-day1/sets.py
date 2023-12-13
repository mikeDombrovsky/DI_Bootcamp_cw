a = {1, 2, 3, 4, 5}
b = {2, 3, 6, 7, 5}
c = a ^ b # add to new list all from b to a, without duplicates from a and b(minus join)
print('a =', a, 'b =', b)
print('a ^ b = ',c)
d = a - b # remove 
print('a - b = ', d)
e = b - a 
print('b - a = ', e)