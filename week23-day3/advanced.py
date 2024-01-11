# Importing necessary modules
from mpl_toolkits.mplot3d import Axes3D  # Enables 3D plotting
import numpy as np
import matplotlib.pyplot as plt

# Initialize a new figure
fig = plt.figure()

# Create a 3D axis object
ax = plt.axes(projection="3d")

# Define data for the line
z_line = np.linspace(0, 15, 1000)
x_line = np.cos(z_line)
y_line = np.sin(z_line)
# Plot the line
ax.plot3D(x_line, y_line, z_line, 'gray')

# Define data for the points
z_points = 15 * np.random.random(100)
x_points = np.cos(z_points) + 0.1 * np.random.randn(100)
y_points = np.sin(z_points) + 0.1 * np.random.randn(100)

# Plot the points, with color determined by z_points and colormap 'hsv'
ax.scatter3D(x_points, y_points, z_points, c=z_points, cmap='hsv')

plt.show()

## Error Bars
# Importing necessary libraries

# Creating data
x = np.linspace(0, 10, 50)
dy = 0.8  # Error in measurement
y = np.sin(x) + dy * np.random.randn(50)

# Generate an error bar plot; 'fmt='.k' specifies black points
plt.errorbar(x, y, yerr=dy, fmt='.k')
plt.show()


# Twin Axes
fig, ax1 = plt.subplots()

x = np.linspace(0, 2*np.pi, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Plot sin on the first axis in green
ax1.plot(x, y1, 'g-')
ax1.set_xlabel('X data')
ax1.set_ylabel('Sin', color='g')

# Create a twin of the first axis sharing the x-axis
ax2 = ax1.twinx()

# Plot cos on the second axis in blue
ax2.plot(x, y2, 'b-')
ax2.set_ylabel('Cos', color='b')

plt.show()
