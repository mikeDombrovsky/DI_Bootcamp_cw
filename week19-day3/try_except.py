# static - syntax , runtime errors 

# while True:
#     try:
#         num1 = int(input('number to divide: '))
#         num2 = int(input('number to divide: '))
        
#         print(num1 / num2)
#     except:
#         print('something went wrong')
#         break
        
        
        
        
my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
sum=0
for num in my_list:
    try:
        sum += num
    except:
        print('oops!')
    print(sum)   
        
print(f'sum is {sum}')


valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:    # TRY THIS
        userage    = int(userage)
    except: # IF YOU GOT AN ERROR
        print("Wrong age!")
    else:   # ELSE
        valid_flag = True
    finally:
        print('There may or may not have been an exception.')

print("Next year, your age will be",userage + 1)


user_age = int(input('how old are you? '))

if userage < 0:
    raise Exception('age cant be lower than 0')



z = 9
assert 1 == z # exeption of type assertion error
print('Error: Those are not equals')

# pytest module - for testing - for self learning



while True:
    try:
        num1 = int(input('number to divide: '))
        num2 = int(input('number to divide: '))
        
        print(num1 / num2)
    except ZeroDivisionError:
        print('cannot divide by 0!')
        
    except:
        print('something went wrong')
        break