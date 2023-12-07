rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}

print(rick_dict.get('age'))
print(rick_dict.get('age', 'default value'))

# ! key of dict must be immutable !
for key in rick_dict:
    print(key, '=>', rick_dict[key])

another_dict = {
    'first_name':'Bob',
    'sex':'male'
}    

rick_dict.update(another_dict)
print(rick_dict)


for i in range(1, 15, 2):
    print(i)
    
    
for i in range(3):
    print(i)
    
print(enumerate(['one', 'two', 'three']))    
for i, item in enumerate(['one', 'two', 'three']):
    print(i, '-', item)
    
print(list(zip([1,3,5],['one','three','five'], [0, 1])))


for i in range(1, 10):
    print(i)
    if(i == 5):
        break # jump after else statement
else:
    print('loop is over')    
    
print('after loop')    

print('boo', end='')# end is for \n

my_number = '1234'
my_list = []

my_list = [num for num in my_number]
print(my_list)
# short way to fill, comprehension
my_list = [int(letter) * 2 for letter in my_number]


my_list = [x for x in range(0,6)]
print(my_list)

my_list = [x for x in range(0,6) if x < 4]
print(my_list)

my_list = []

for i in [2, 3, 4]:
    for j in [100, 200, 300]:
        my_list.append(i*j)

print(my_list) # [200, 400, 600, 300, 600, 900, 400, 800, 1200]

my_list = []
my_list = [(i*j) for i in [2, 3, 4] for j in [100, 200, 300]] # same with comprehension
print(my_list)

# dictionary = {key: value for var in iterable}
family_age = {'Lea': 12, 'Mark': 25, 'George': 50}

new_year = 1

new_family_age = {name: age+new_year for (name, age) in family_age.items()}

print(new_family_age)