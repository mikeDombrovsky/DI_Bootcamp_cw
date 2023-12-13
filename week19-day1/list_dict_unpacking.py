def check(a, b, c):
    print(a, b, c)
    
my_list = [1, 2, 3]

check(*my_list) # list unpacking to variables 

def check_dict(a, b, c):
    print(a, b, c)
    
my_dict = {
    'one': 1,
    'two': 2
}    

check_dict(**my_dict)
    