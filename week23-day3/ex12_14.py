import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Exercise 13: Interactive Plots
# plt.ion()  # Turn on interactive mode # works just without it..
# x = np.linspace(0, 20, 100)
# plt.plot(x, np.sin(x))

# plt.show()

# another one
# plt.plot([1, 2, 3, 4])
# plt.ylabel('some numbers')
# plt.show()


# Exercise 14: Integration With Pandas
df = pd.DataFrame({
    'Month': ['January', 'February', 'March', 'April', 'May',
              'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    'Temperature': [5.8, 6.1, 9.2, 12.8, 16.8, 19.9, 22.2, 22.4, 19.2, 14.6, 9.8, 6.5]
})


df.plot(x='Month', y='Temperature', color='red')
plt.show()
