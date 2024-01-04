import numpy as np

# ex1
arr1 = np.array(range(10, 20))

# print(arr1)

# print('number of dimensions:', arr1.ndim)
# print('shape:', arr1.shape)
# print('size:', arr1.size)
# print('data type:',arr1.dtype)

# arr2 = arr1.astype('float64')
# print(arr2)
# print('data type:', arr2.dtype)

# arr2 = arr2.astype('int32')
# print('data type:', arr2.dtype)
# print(arr2)

# arr2 = arr2 * 2

# print(arr2)


# ex2
# print(arr1[3])

# array_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# print(arr1[1][2])

# print(arr1[2:6])

# print(array_2d[0:2, 1:3])


# ex3
# print(np.arange(10, 21))
# print(np.arange(10, 21, 2))
# print(np.linspace(0, 1, 5))
# print(np.random.rand(3))
# print(np.random.randint(1, 10, 4))

# ex4
print(np.reshape(np.arange(1, 10), (3, 3)))

matrix = np.array([[10, 20, 30], [40, 50, 60], [70, 80, 90]])
print(matrix[2][1])
# print(matrix[2, 1]) # the same

sub = matrix - matrix.mean(axis=1, keepdims=True)
print(sub)

matrix = np.array([[4, 2, 3], [6, 1, 5], [7, 9, 8]])
print(matrix[matrix[:, 1].argsort()])


matrix[[0, 2]] = matrix[[2, 0]]
print(matrix)
