import pandas as pd


# Creating a DataFrame with some null values
data = {
    "Fruit": ["Apple", "Banana", None, "Date", "Grapes"],
    "Quantity": [20, 30, 15, None, 25],
    "Price": [3, 2, 4, 5, None],
    "Supplier": ["Supplier1", "Supplier2", "Supplier1", None, "Supplier1"]
}

df_null = pd.DataFrame(data)

# Display the DataFrame
print(df_null)

print('Checking for null values: ', df_null.isnull())

# Dropping all rows with any NaN values
dropped = df_null.dropna()
print('after droppa', dropped)

filled = df_null.fillna('lol')
filled2 = df_null.fillna(method='ffill')
filled3 = df_null.fillna(method='bfill')

print(filled, filled2, filled3)
