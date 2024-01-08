# iterable has __iter__
# generators are iterable

def make_list(num):
    res = []
    for i in range(num):
        res.append(i * 2)
    return res


def generator_func(num):
    for i in range(num):
        yield i * 2


for item in generator_func(5):
    print(item)

g = generator_func(5)
print(g)  # <generator object generator_func at 0x000002C96D34AC10>
print(next(g))
print(next(g))
print(next(g))
print(next(g))
print(next(g))
# print(next(g))  # StopIteration error


def special_for(iterable):
    iterator = iter(iterable)
    while True:
        try:
            print(iterator)
            print(next(iterator) * 3)
        except StopIteration:
            break


special_for([1, 2, 3])


class MyGen():
    current = 0
    def __init__(self, first, last):
        self.first = first
        self.last = last
        
    def __iter__(self):
        return self
    
    def __next__(self):
        if MyGen.current < self.last:
            num = MyGen.current
            MyGen.current += 1
            return num
        raise StopIteration
        
gen = MyGen(0, 10)
for i in gen:
    print(i)
