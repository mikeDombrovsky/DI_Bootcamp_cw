# Importing matplotlib library
import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()  # Create a figure and an axes

ax.plot([1, 2, 3, 4], [1, 4, 2, 3])  # Plot some data on the axes
plt.show()  # This will render and display the plot


#  Line Plot
x = np.linspace(0, 10, 100)  # Generate 100 evenly spaced numbers between 0 and 10
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x, y)
plt.show()

# Scatter Plot
x = np.random.rand(50)
y = np.random.rand(50)

fig, ax = plt.subplots()
ax.scatter(x, y)
plt.show()

#  Histogram
data = np.random.randn(1000)

fig, ax = plt.subplots()
ax.hist(data, bins=50)
plt.show()

# Saving Plots
fig, ax = plt.subplots()
ax.plot([1, 2, 3, 4], [1, 4, 2, 3])
fig.savefig('my_figure.png')  # save the figure to file

# Styling Plots
# Title, Labels
fig, ax = plt.subplots()
ax.plot([1, 2, 3, 4], [1, 4, 2, 3])
ax.set(title='A Simple Plot', xlabel='x', ylabel='y')
plt.show()

# Line Styles and Colors
fig, ax = plt.subplots()
ax.plot([1, 2, 3, 4], [1, 4, 2, 3], color='red',
        linestyle='--')  # dashed red line
plt.show()

# Marker Styles
fig, ax = plt.subplots()
# mark each point with a circle
ax.plot([1, 2, 3, 4], [1, 4, 2, 3], marker='o')
plt.show()

# Legends
fig, ax = plt.subplots()
ax.plot([1, 2, 3, 4], [1, 4, 2, 3], color='red', label='red line')
ax.legend()  # show the legend
plt.show()
