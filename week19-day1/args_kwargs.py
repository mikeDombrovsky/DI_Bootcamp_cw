# print('hello', 'world') # can take any number of params *args

# def my_print(*args):
#     print(args) # tuple
#     print(type(args))

# my_print('1','2')




# print('hello', 'world') # can take any number of params *kwargs

# def my_print(**kwargs):
#     print(kwargs) # dict
#     print(type(kwargs))

# my_print(var1='1',var2='2')





def my_print(var1, var2, *args, **kwargs): # can take any number of params *args
    print(args) # tuple
    print(kwargs) # dict
    print(type(args))
    print(var1,var2)

my_print(var1='1',var2='2')
my_print('1','2', '3','4')
my_print('1','2', '3','4', var3='5',var4='6')



    