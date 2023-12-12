def highest_even(li):
    highest = 0
    for num in li:
        if num % 2 == 0 and num > highest:
            highest = num
    return highest        

print(highest_even([10, 2, 3, 4, 8, 11]))

# max()
# min()