import matplotlib.pyplot as plt
import numpy as np

# # Exercise 1: Plotting Basics
# fig, ax = plt.subplots()
# x = np.linspace(-10, 10, 20)
# y = x * x
# ax.plot(x, y)
# plt.show()

# Exercise 2: Basic Plots
fig, ax = plt.subplots()
x = np.linspace(0, 10, 20)
y1 = x ** 2
y2 = x ** 1.5

ax.plot(x, y1)
ax.scatter(x, y2)

# plt.show()

# Exercise 3: Saving Plots
fig.savefig('my_plot.png')

# Exercise 4: Styling Plots
ax.plot(x, y1, color='red', linestyle='--', marker='o', label='y = x^2')

ax.set(title='', xlabel='y = x^1.5')
plt.show()
