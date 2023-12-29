import sys
import random as rnd

num_from = int(sys.argv[1])
num_to = int(sys.argv[2])

generated = rnd.randint(num_from, num_to)

while True:
    users_number = int(input('Guess number: '))
    if users_number == generated:
        print('You are genius!')
        break
    print(f'No, it\'s not {users_number}, try again!')
