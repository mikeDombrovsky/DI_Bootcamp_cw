# __new__ # creates location in memory

numbers = [1, 2, 3, 4, 5]
numbers2 = [1, 2, 3, 4, 5]

print(type(numbers))
print(type(str(numbers)))
print(dir(numbers.__str__())) # same like line above


print(numbers + numbers2 == numbers.__add__(numbers2))
print(len(numbers) == numbers.__len__())

class CallableBob:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __call__(self):
        print('I am callable!')
    
    def __gt__(self, other):
        return self.age > other.age
    
    def __add__(self, other):
        return CallableBob('newBob', self.age + other.age)
        
        
bob = CallableBob('bob', 20)
dood = CallableBob('dood', 25)

bob()

print(bob > dood)