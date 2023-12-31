def hello():
    print('hello')
    
greet = hello
del hello # hello variable(link) is deleted

greet()
print('---')

def hello2(func):
    func()
    
def greet2():
    print('greet2')
    
a = hello2(greet2)

print(a)

# @decorator 
# def hi():
#     pass


def my_decorator(func):
    def wrap_func():
        print('**decorated**')
        func()
        print('*************')
    return wrap_func

@my_decorator
def decorated():
    print('I am decorated')
    
decorated()

# same using functions
decorated2 = my_decorator(greet)
decorated2()

