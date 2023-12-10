def my_outer(a, b):
    def my_inner():
        print(a + b)
        
    print('from outer')  
    my_inner()