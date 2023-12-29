
# Higher Order Function (HOK)
# accepts function as parameter
def greet(func):
    func()


# returns function
def greet2():
    def func():
        return 5
    return func

# @decorator


