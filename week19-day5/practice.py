list_with_duplicates = ['a', 'b', 'c', 'b', 'm', 'n', 'n']

duplicates = []
for elem in list_with_duplicates:
    if list_with_duplicates.count(elem) >= 2:
        if duplicates.count(elem) == 0:
            duplicates.append(elem)

print(duplicates)

# Exercise! Display the image below to the right hand side where the 0 is going to be ' ', and the 1 is going to be
# '*'. This will reveal an image!
picture = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0],
]

for row in picture:
    for column_elem in row:
        if column_elem == 0:
            print(" ", end='')
        elif column_elem == 1:
            print("*", end='')
    print('')

# instead of global variable
total = 0

def count(total):
    total += 1
    return total

print(count(count(count(total))))

# nonlocal keyword - kinda global
def outer():
    x = 'local'
    def inner():
        nonlocal x
        x = 'nonlocal'
        print('inner', x)
        
    inner()
    print('outer', x)
    
    