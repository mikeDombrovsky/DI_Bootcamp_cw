import numpy as np
import matplotlib.pyplot as plt

fig, axs = plt.subplots(2, 2)  # Create a figure and a 2x2 grid of axes


# Create an array of values from 0 to 2π
x = np.linspace(0, 2 * np.pi, 400)
# Compute the sin of each element squared in x
y = np.sin(x ** 2)

# A figure with just one subplots 
# fig, ax = plt.subplots()  # Creates a new figure with a single subplot
# ax.plot(x, y)  # Plots y vs x on the axes
# ax.set_title('A single plot')  # Sets the title of the plot

# A figure with 2 subplots, and unpack the output array immediately
fig, (ax1, ax2) = plt.subplots(2)  # Creates a new figure with two subplots
ax1.plot(x, y)  # Plots y vs x on the first subplot
ax2.plot(x, -y)  # Plots -y vs x on the second subplot

plt.show()  # Displays the plot(s)


x = np.linspace(0, 2 * np.pi, 400)
y = np.sin(x ** 2)
# A figure with 2x2 grid of Axes
fig, axs = plt.subplots(2, 2)
axs[0, 0].plot(x, y)
axs[0, 1].plot(x, y, color='orange')  # The 'tab:orange' specifies the line color
axs[1, 0].plot(x, -y, 'tab:green')  # The 'tab:green' specifies the line color
axs[1, 1].plot(x, -y, 'tab:red')  # The 'tab:red' specifies the line color

for ax in axs.flat:
    ax.set(xlabel='x', ylabel='y')  # Sets the labels for the x and y axes

# Hide x labels and tick labels for top plots and y ticks for right plots.
for ax in axs.flat:
    ax.label_outer()

plt.show()


# Working With Text And Annotations
fig, ax = plt.subplots()

t = np.arange(0.0, 5.0, 0.01)
s = np.cos(2*np.pi*t)
ax.plot(t, s, lw=2)

# The 'annotate' method is used to draw an arrow pointing to the point of interest
# 'xy' specifies the point (x,y) to annotate
# 'xytext' specifies the location where the text starts
# 'arrowprops' is used to style the arrow
ax.annotate('local max', xy=(2, 1), xytext=(3, 1.5),
            arrowprops=dict(facecolor='black', shrink=0.05),
            )
ax.annotate('local min', xy=(4.5, -1), xytext=(3, -1.5),
            arrowprops=dict(facecolor='black', shrink=0.05),
            )

ax.set_ylim(-2, 2)
plt.show()


# Working With Legend
fig, ax = plt.subplots()

ax.plot([1, 2, 3, 4], [1, 4, 2, 3], label='blue line')
ax.plot([1, 2, 3, 4], [3, 2, 1, 4], label='red line')
ax.legend() # show legend 

# using the title, loc and shadow parameters:
ax.legend(title='Legend', loc='upper right', shadow=True)

plt.show()
