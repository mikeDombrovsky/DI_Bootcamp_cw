import pandas as pd
import numpy as np

# ex4
store_1_stock = pd.read_csv('store_1_stock.csv')
# print(store_1_stock)
print(store_1_stock.head(1))
print(store_1_stock.tail(1))
print(store_1_stock.info())
print(store_1_stock.describe())

print('Quantity is :', store_1_stock['Quantity'].sum())
print('The largest 3 by quantity are :', store_1_stock.nlargest(3, 'Quantity'))


# ex5
# store_1_stock.set_index('Fruit', inplace=True)
print(store_1_stock.loc['Bananas'])
print(store_1_stock.loc['Bananas', 'Quantity'])
print(store_1_stock.loc[0])


# ex6

store_1_stock['Sale_Price'] = store_1_stock['Price per kg'] * 0.9

store_1_stock.rename(columns={'Price per kg': 'Original_Price'}, inplace=True)
print('-' * 20)
print(store_1_stock)

store_1_stock.drop(columns='Color', inplace=True)
print('-' * 20)
print(store_1_stock)


# ex7
# new_data = pd.DataFrame(
#     {"Fruit": ["Grapes"], "Quantity": [np.nan], "Price": [3.5]})
new_data = pd.DataFrame(
    {"Fruit": ["Grapes"], "Quantity": [pd.NA], "Price": [3.5]})

new_data = pd.DataFrame(
    {"Quantity": [5], "Original_Price": [3.5]}, index=['Grapes'])

new_data['Sale_Price'] = new_data['Original_Price']


# pd.concat adds a new row
df = pd.concat([store_1_stock, new_data], ignore_index=True)

print(df)
print('-' * 20)
print(df.isna())
print('-' * 20)
print(df['Quantity'].isna())
print(df['Quantity'].isnull())
print(df['Quantity'].isnull().any())


# Exercise 8: Data Type Conversion

if df['Quantity'].dtype != 'int':
    df['Quantity'] = df['Quantity'].astype('int')

# Exercise 9: Simple DataFrame Operations

# The total quantity of all fruits
print(df['Quantity'].sum())

# The name and quantity of the fruit with the highest, lowest quantity.
print(df['Quantity'].max())
print(df['Quantity'].min())
# or
print(df['Quantity'].idxmax())
print(df['Quantity'].idxmin())

# The average original price per kg of fruits.
print(df['Original_Price'].mean())
