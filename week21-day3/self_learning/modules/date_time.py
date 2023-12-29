import datetime
from time import time

print(datetime.date.today())
print(datetime.time(5, 45, 2))

t1 = time()
my_list = [0]
for i in range(1, 10000000):
    my_list[0] = i

t2 = time()

print(f'took {t2 - t1} seconds')
