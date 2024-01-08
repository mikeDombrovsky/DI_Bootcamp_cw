import matplotlib.pyplot as plt
import numpy as np


# # Exercise 1: Create A Line Plot
x = np.linspace(0, 10, 100)
y = x ** 2

# # plt.ion()
# plt.plot(x, y)
# plt.show()

# # 2
# fig, ax = plt.subplots()
# plt.plot(x, y)
# plt.show()

# Exercise 2: Create A Scatter Plot


fig, ax = plt.subplots()
# ax.plot([1, 1.3, 2, 2.5, 3, 3.5], [2, 3, 1, 4, 1, 3])
ax.scatter([1, 1.3, 2, 2.5, 3, 3.5], [2, 3, 1, 4, 1, 3])
plt.show()