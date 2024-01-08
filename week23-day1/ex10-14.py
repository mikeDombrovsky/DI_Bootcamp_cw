import pandas as pd

# Creating a DataFrame with data for the fruit vendor
data = {
    "Fruit": ["Apple", "Banana", "Cherry", "Date", "Grapes"],
    "Quantity": [20, 30, 15, 10, 25],
    "Original_Price": [3, 2, 4, 5, 2.5],
    "Supplier": ["Supplier1", "Supplier2", "Supplier1", "Supplier2", "Supplier1"]
}

df = pd.DataFrame(data)

# Display the DataFrame
print(df)


# Exercise 10: Applying Functions To Data
def get_fruit_price(fruit_name):
    if fruit_name == 'Banana':
        return 1.2
    if fruit_name == 'Apple':
        return 2.0
    if fruit_name == 'Grapes':
        return 2.5
    return None
    
df['Updated_Price'] = df['Fruit'].map(get_fruit_price)
print(df)

# Exercise 11: Grouping Data With Pandas

print(df.groupby('Supplier')['Quantity'].sum())


# Exercise 12: Merging, Joining, And Concatenating DataFramess


df_new = pd.DataFrame({
    'Fruit': ['Apple', 'Banana', 'Cherry', 'Peach'],
    'Quantity': [110, 160, 175, 200],
    'Price': [2.3, 0.6, 3.1, 2.5],
    'Supplier': ['Supplier4', 'Supplier4', 'Supplier4', 'Supplier4']
})

# concat frames
print(pd.concat([df, df_new]))
print('-' * 20)
merged = pd.merge(df, df_new, on='Fruit')
print('-' * 20)
print(merged['Price'])
print('-' * 20)
print(merged['Original_Price'])
print(merged['Original_Price'] - merged['Price'])

# merged['diff_frice'] = 


# Exercise 13: Sorting Values And Rank
print(df)
print('-' * 20)
df.sort_values(by='Quantity', ascending=False)
print(df)

df['rank_a'] = df['Quantity'].rank()
print(df)