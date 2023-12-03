print('hi');
print(5+3)

my_age = 'poo'
print(my_age)
my_age = 35
print(my_age)

# converting -- casting
str(5) 

# 'str' + 4  -- error
print('one', 'two')

my_num = 5
#increment not 5++
my_num+=1

name='Poopy'
#formatting
phtase = f'Hello {name}! Are you {my_num}?'
print(phtase)

print(f'I am now {my_age + 5}')

#legacy formatting
legacy = 'my age is {} and in 5 years will be {}'.format(my_age, my_age + 5)
print(legacy)

'my age is {0} and in 5 years will be {1}'.format(my_age, my_age + 5)
'my age is {1} and in 5 years will be {0}'.format(my_age, my_age + 5)



#For example,  
#my_name = "Frank"  this line creates a name variable type: string 
#print("My name is {}".format(my_name))

cars = 100
space_in_a_car = 4.0
drivers = 30
passengers = 90
cars_not_driven = cars - drivers
cars_driven = drivers
carpool_capacity = cars_driven * space_in_a_car
average_passengers_per_car = passengers / cars_driven


print("There are", cars, "cars available.")#There are 100 cars available.
print("There are only", drivers, "drivers available.")#There are only drivers 30 drivers available.
print("There will be", cars_not_driven, "empty cars today.")#There will be 70 empty cars today.
print("We can transport", carpool_capacity, "people today.")#We can transport 120.0 people today.
print("We have", passengers, "to carpool today.")#We have 90 to carpool today.
print("We need to put about", average_passengers_per_car,"in each car.")#We need to put about 3 in each car.


#input always is string
#inp = input('type name:')
#print(inp)
#age = input('type age:')
#string duplicates as 101010 if typed 10
#print(age * 3)
#print(int(age) * 3)

#type(age)

5 == 5 # True

print('a' > 'k')

num = int(input('put num'))


if num == 5:
  print('its 5')
elif num == 10:
  print('its 10')
else:
  print(f'its not 5, its{num}')

print('lol')

if 5 == 5 and 6 == 6:
  print('kokoko')

if 5 in [1,2,3,4,5]:
  print('wow!')

if 'a' in 'alo':
  print('it is!')

if not 5==6:
  print('its the same that != but DONT USE !True')

guess = int(input('type a number between 1 and 100'))

if(guess < 1 or guess > 100):
  print('wrong number')
elif(guess % 3 == 0):
  print('Fizz')
elif(guess % 5 == 0):
  print('Buzz')
elif(guess % 3 == 0 and guess %5 == 0):
  print('FizzBuzz')    



#sequence data types str - immutable, List - mutable
my_str = 'abc'
my_str[-1]#last, index starts from end
my_str[-2]# 2 from last 

#list type sequence
my_list = [guess, my_str, my_age]

#Tuple immutable sequence - like const
my_tuple = ('one',2, 2.5)

#slicing to any sequence
my_list[0:1] #[guess]
my_list[1:]# from 1 to end
my_list[:2]# from 0 to 2

my_list.append('10')
my_list.insert(0,'10')#pushes rest of arr to right
my_list.clear() # clear all
my_list.remove('name') # delete name
len(my_list)#size

sum([1,2,3])
sorted([4,2,3,1])#must contain same type

[1,2,3] + [4,5,6] #creates new list of both
[1,2,3].extend([4,5,6]) # adds to first

dir(list) #all methids of lists

list1 = [5, 10, 15, 20, 25, 50, 20]

i = list1.index(20)
if i > 0:
  list1[i] = 200
 
#unpacling number of vars must be same that elements number
one, two, three = ('1', '2','3')









