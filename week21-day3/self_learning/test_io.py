my_file = open('test.txt')
print(my_file.read())
my_file.seek(0)

print(my_file.readline())
print(my_file.readline())
my_file.seek(0)

print(my_file.readlines())

my_file.close()
try:
    # mode: r read, w write - cleans and writes, r+ read and write- writes on old data, a - append to the end
    with open('test.txt', mode='r+') as my_file:
        text = my_file.write('=)')
        print(text)
except IOError as err:
    print(err)

