import numpy as np

# Define an array
array = np.array([1, 2, 3, 4, 5])

# Apply the ufunc np.sqrt (square root)
result = np.sqrt(array)

print(result)
# Output: [1., 1.41421356, 1.73205081, 2. , 2.23606798]


lst = [2, 4, 6, 8, 13, 2020]
numpy_arr = np.array(lst)
np.mean(numpy_arr)
# 342.1666666666667

np.median(numpy_arr)
# 7.0

numpy_arr.min()
# 2

numpy_arr.max()
# 2020


# >>> lst_2d = [[3, 5, 7, -4, 1], [0, 5, 33, -750, 2]]
# >>> numpy_arr_2d = np.array(lst_2d)

# >>> np.mean(numpy_arr_2d, 1)
# array([2.4, -142.])

# Define two arrays
array1 = np.array([1, 2, 3, 4, 5])
array2 = np.array([6, 7, 8, 9, 10])

# Perform addition
result_add = array1 + array2

# Perform subtraction
result_sub = array1 - array2

# Perform multiplication
result_mul = array1 * array2

# Perform division
result_div = array1 / array2

print("Addition:", result_add)
# Output: Addition: [ 7  9 11 13 15]

print("Subtraction:", result_sub)
# Output: Subtraction: [-5 -5 -5 -5 -5]

print("Multiplication:", result_mul)
# Output: Multiplication: [ 6 14 24 36 50]

print("Division:", result_div)
# Output: Division: [0.16666667 0.28571429 0.375 0.44444444 0.5]


numpy_arr + 5
# array([7, 9, 11, 13, 18, 2025])

numpy_arr ** 3
# array([ 8, 64, 216, 512, 2197, 8242408000])


# Get documentation for np.sqrt function
help(np.sqrt)
print(np.sqrt.__doc__) # same


# Define an array
array = np.array([1, 0, 2, 0, 3, 0, 4, 5])

# Get the indices of non-zero elements
indices = np.nonzero(array)

print(indices)
# Output: (array([0, 2, 4, 6, 7]),)

# Define a 2D array
array2D = np.array([[0, 1, 0], [2, 0, 3], [0, 4, 0]])

# Get the indices of non-zero elements
indices2D = np.nonzero(array2D)

print(indices2D)
# Output: (array([0, 1, 1, 2]), array([1, 0, 2, 1]))

# bincount
# Define an array
array = np.array([0, 2, 2, 6, 5])

# Use bincount
count = np.bincount(array)

print(count)
# Output: [1 0 2 0 0 1 1]


# Recreate the original array but sorted
recreated_array = np.repeat(np.arange(len(count)), count)

print(recreated_array)
# Output: [0 2 2 5 6]