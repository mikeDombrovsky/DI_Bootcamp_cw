import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': np.random.rand(10),
    'B': np.random.rand(10)
})

df.plot()

df.plot(kind='bar')


df['A'].plot(kind='hist')


df.plot(kind='box')


df.plot(title='My Plot', xlabel='Index', ylabel='Values')


df.plot()

plt.title('My Plot')  # Set the plot title
plt.xlabel('Index')  # Set the label for the x-axis
plt.ylabel('Values')  # Set the label for the y-axis
plt.grid(True)  # Display a grid
plt.legend(loc='upper left')  # Place the legend in the upper left corner
