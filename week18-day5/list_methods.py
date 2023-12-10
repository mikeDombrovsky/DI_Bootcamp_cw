# map, filter, zip, reduce
def multiply_by2(num):
    return num * 2

print(list(map(multiply_by2, [1, 2, 3])))

def check_odd(num):
    return num % 2 != 0