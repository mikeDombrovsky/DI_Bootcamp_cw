import numpy as np
import matplotlib.pyplot as plt


x = np.linspace(0, 2 * np.pi, 400)
y = np.sin(x ** 2)

# Exercise 7: Multiple Plots And Subplots
fig, axs = plt.subplots(2, 2)
axs[0, 0].plot(x, y)
axs[0, 1].plot(x, -y, color='orange')
axs[1, 0].plot(x, y ** 2, 'tab:green')
axs[1, 1].plot(x, -(y ** 2), 'tab:red')

# plt.show()


# Exercise 8: Working With Text And Annotations
axs[0, 0].annotate('local annotation', xy=(x[0], y[0]), xytext=(3, 1.5),
                   arrowprops=dict(facecolor='black', shrink=0.05),
                   )

# axs[0, 0].legend(title='Legend', loc='upper right', shadow=True)

axs[0, 0].annotate('local max', xy=(x[0], y[0]), xytext=(x[0] + 1, y[0] + 1.5),
                   arrowprops=dict(facecolor='black', shrink=0.05),
                   )

for ax in axs.flat:
    ax.legend(title='Legend', loc='upper right', shadow=True)


plt.show()
