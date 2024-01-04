import numpy as np
# Create a 1D array
array = np.array([1, 2, 3, 4, 5, 6])

# Reshape it into a 2D matrix
matrix = np.reshape(array, (2, 3))

print(matrix)
# Output:
# [[1 2 3]
#  [4 5 6]]

# Create a 3x3 identity matrix
identity_matrix = np.eye(3)

print(identity_matrix)
# Output:
# [[1. 0. 0.]
#  [0. 1. 0.]
#  [0. 0. 1.]]

# Define a matrix
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# Access the first row
first_row = matrix[0]

# Access the second column
second_column = matrix[:, 1]

print("First row: ", first_row)
# Output: First row:  [1 2 3]

print("Second column: ", second_column)
# Output: Second column:  [2 5 8]

# Subtract row mean from each element
mean_subtracted = matrix - matrix.mean(axis=1, keepdims=True)

print(mean_subtracted)
# Output:
# [[-1.  0.  1.]
#  [-1.  0.  1.]
#  [-1.  0.  1.]]

# Sorting
# Create a matrix
matrix = np.array([[1, 3, 2], [4, 1, 5], [7, 9, 8], [10, 5, 11]])

print("Original matrix:")
print(matrix)
# Output:
# [[ 1  3  2]
#  [ 4  1  5]
#  [ 7  9  8]
#  [10  5 11]]

# Sort matrix by second column

sorted_matrix = matrix[matrix[:,1].argsort()]

print("\nMatrix sorted by second column:")
print(sorted_matrix)
# Output:
# [[ 4  1  5]
#  [ 1  3  2]
#  [10  5 11]
#  [ 7  9  8]]

# Swap the first and second row
matrix[[0, 1]] = matrix[[1, 0]]

print(matrix)
# Output:
# [[ 4  1  5]
#  [ 1  3  2]
#  [ 7  9  8]
#  [10  5 11]]