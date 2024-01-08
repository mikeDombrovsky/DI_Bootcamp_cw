import pandas as pd

series = pd.Series([20, 30, 15, 10],
                   index=['Apples',
                          'Bananas',
                          'Cherries',
                          'Dates'])
print(series)

# ex2

df = pd.DataFrame({
    'Quantity': [20, 30, 15, 10],
    'Color': ['Red', 'Yellow', 'Red', 'Brown'],
    'Price per kg': [3, 2, 4, 5]
}, index=['Apples',
          'Bananas',
          'Cherries',
          'Dates'])
print(df)
df.to_csv('store_1_stock.csv')

# ex3

store_1_stock = pd.read_csv('store_1_stock.csv')
print(store_1_stock)

