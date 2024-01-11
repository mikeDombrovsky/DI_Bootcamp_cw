from mpl_toolkits.mplot3d import Axes3D  # Enables 3D plotting

import numpy as np
import matplotlib.pyplot as plt

# ex10 
x = np.linspace(0, 2 * np.pi, 400)
y = np.sin(x ** 2)

fig = plt.figure()
ax = plt.axes(projection='3d')

x_points = np.linspace(0, 2 * np.pi, 400)
y_points = np.sin(x ** 2)
z_points = y_points ** 2

ax.plot3D(x_points, y_points, z_points)

ax.scatter3D(x_points, y_points, z_points, c=z_points, cmap='hsv')
plt.show()


# ex11 

fig = plt.figure()
x_points = np.linspace(0, 2 * np.pi, 400)
dy = 0.2

y_points = np.sin(x_points)

plt.errorbar(x_points, y_points, yerr=dy, fmt='.k')

plt.show()


# ex12

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
