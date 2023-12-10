#  key word arguments - not position args. We can use just if position are first, then key ones
def say_hi(useername, language='EN'):
    print(useername, language)
    
say_hi(language='RU', useername='Mike')
say_hi('Mike', language='RU')
say_hi('Mike')

# default values, after one default param next must be also have defaults
# / operator returns  float. but // operator returns int (!)

# unpacking
first, last = ('name', 'Poopy')

def calculation(a, b):
    return a + b, a - b # returns a tuple with two elements

res = calculation(2, 3)
print(res)

def f1():
    print('f1')
    
def f2():
    print('f1')
    
funcs = [f1, f2]    

for f in funcs:
    print(f) # address of function
    f()
    
my_hoppys = []
    
def add_hoppy(my_hoppys, my_hoppy):
    my_hoppys.append(my_hoppy)
    
add_hoppy(my_hoppys, 'coding')
add_hoppy(my_hoppys, 'running')

print(my_hoppys)

# passing by reference
def pop_item(my_list):
    my_list.pop()
    
numbers = [1, 2, 3, 4, 5, 6, 7]

pop_item(numbers)

print(numbers)

