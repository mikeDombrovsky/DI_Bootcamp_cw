import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

sales_data = {
    'Year': ['2017', '2018', '2019', '2020', '2021'],
    'Product A': [30, 35, 40, 50, 60],
    'Product B': [40, 30, 20, 15, 10],
    'Product C': [50, 60, 70, 80, 90]
}


fig, ax = plt.subplots()
df = pd.DataFrame(sales_data)
df.set_index('Year', inplace=True)



# df.plot()
plt.figure()
plt.plot(df['Product A'], label='Product A', color='blue', marker='o')
plt.plot(df['Product B'], label='Product B', color='orange', marker='s')
plt.plot(df['Product C'], label='Product C', color='green',marker='^')
plt.grid(True)

plt.xlabel('Year')
plt.ylabel('Sales')
plt.title('Sales Trend for Products A, B, C from 2017 to 2021')
plt.legend(['My products are cool'])

plt.show()
