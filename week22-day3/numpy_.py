import numpy as np

array = np.array([1, 2, 3])

print(array)

array = array + 2

print(array)

# Create a 1D NumPy array
array_1d = np.array([1, 2, 3, 4, 5])

# Check properties of the array
print(array_1d.ndim)  # Output: 1
print(array_1d.shape)  # Output: (5,)
print(array_1d.size)  # Output: 5
print(array_1d.dtype)  # Output: int64

# Create a 2D array from a list of lists
array_2d = np.array([[1, 2, 3], [4, 5, 6]])
print(array_2d)
# Output:
# [[1 2 3]
#  [4 5 6]]

# Create a 2D array of zeros with shape (3, 2)
zeros = np.zeros((3, 2))
print(zeros)
# Output:
# [[0. 0.]
#  [0. 0.]
#  [0. 0.]]


# Create an array of integers
array = np.array([1, 2, 3, 4, 5])

# Convert to float type
float_array = array.astype('float64')

print(float_array)  # Output: array([1., 2., 3., 4., 5.])
print(float_array.dtype)  # Output: float64

# Access elements at index 1
print(array_1d[1])  # Output: 2

# Access elements at the last index
print(array_1d[-1])  # Output: 5

# Slice a 1D array
print(array_1d[1:4])  # Output: array([2, 3, 4])

# Slice a 2D array (get first 2 rows and 2 columns)
print(array_2d[:2, :2])
# Output:
# [[1 2]
#  [4 5]]

# Reverse a 1D array
print(array_1d[::-1])  # Output: array([5, 4, 3, 2, 1])

# Reverse the order of rows in 2D array
print(array_2d[::-1])
# Output:
# [[4 5 6]
#  [1 2 3]]


# Generate a sequence from 0 to 9
sequence = np.arange(10)
print(sequence)

# Generate a sequence from 5 to 15 with step size 2, can be floats too
sequence = np.arange(5, 15., 2)
print(sequence)

# Generate 5 equally spaced numbers between 0 and 1
sequence = np.linspace(0, 1, 5)
print(sequence)
# Output: [0., 0.25, 0.5, 0.75, 1.]

# Generate 5 random numbers between 0 and 1
random_numbers = np.random.rand(5)
print(random_numbers)
# [0.160247, 0.98714835, 0.12196584, 0.90590343, 0.07529476]

# Generate 5 random integers between 0 and 10
random_integers = np.random.randint(0, 10, 5)
print(random_integers)  # [5, 1, 2, 7, 3]
