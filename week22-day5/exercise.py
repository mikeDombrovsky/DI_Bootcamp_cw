import numpy as np


# arr = np.arange(1, 6, 1)

# print(arr)
# print(arr ** 2)
# print(np.square(arr))

# arr1 = np.arange(1, 6, 1)
# arr2 = np.arange(6, 11, 1)
# print(arr1, arr2)

# print(arr1 + arr2)
# print(arr1 - arr2)
# print(arr1 * arr2)
# print(arr1 / arr2)

# print(np.add.__doc__)

array2D = np.arange(1, 26).reshape((5, 5))
print(array2D)

sliced = array2D[:3, 2:]
print(sliced)

replacer = np.arange(10, 25)
print(replacer)

# get last colomn REDO
# array2D[:, -1] = replacer

print(array2D)

matrix1 = np.arange(1, 10).reshape(3, 3)
matrix2 = np.arange(10, 19).reshape(3, 3)
print(matrix1, matrix2)
print(matrix1 * matrix2)
print(np.matmul(matrix1, matrix2))  # (!)another behaviour!
print(matrix1@matrix2)  # same!
print(matrix1.T)  # round wors to columns

matrix = np.arange(20, 41, 2)
print(matrix)

# filter()

print(np.where(matrix > 30)) # indexes of numbers


matrix = np.array([2, 2, 1, 1, 1, 0, 0, 0, 3, 3])
print(matrix)
count = np.bincount(matrix)
print(count)

print(np.repeat(matrix, 2))
print(np.repeat(np.arange(len(count)), count))

