import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


plt.ion()  # Turn on interactive mode
x = np.linspace(0, 20, 100)
# This plot is automatically rendered because of the interactive mode
plt.plot(x, np.sin(x))



# Integration With Pandas
# Creating a simple DataFrame
df = pd.DataFrame({
    'name': ['john', 'mary', 'peter', 'jeff', 'bill', 'lisa', 'jose'],
    'age': [23, 78, 22, 19, 45, 33, 20],
    'gender': ['M', 'F', 'M', 'M', 'M', 'F', 'M'],
    'state': ['california', 'dc', 'california', 'dc', 'california', 'texas', 'texas'],
    'num_children': [2, 0, 0, 3, 2, 1, 4],
    'num_pets': [5, 1, 0, 5, 2, 2, 3]
})

# Plotting directly from the DataFrame
df.plot(kind='scatter', x='num_children', y='num_pets', color='red')
plt.show()
