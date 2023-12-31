from time import time, sleep

def timer(func):

    def wrapper(*args, **kwargs):
        start = time()
        func(*args, **kwargs)
        end = time()
        print(f"Time <{func.__name__}>: {end-start}")

    return wrapper

@timer
def function_to_measure(arg1, arg2):
    print('function_to_measure working...')
    sleep(2)
    print('result = ', arg1 + arg2)
    print('function_to_measure ended!')
    

function_to_measure(1, 2)