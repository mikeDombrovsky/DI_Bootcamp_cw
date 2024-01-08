from sqlalchemy import create_engine
import pandas as pd

# Creating a series
series = pd.Series([1, 2, 3, 4])
print(series)

# Creating a DataFrame
df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 32, 22]
})
print(df)

# Creating a DataFrame from a dictionary
data = {
    "fruits": ["apple", "banana", "cherry"],
    "count": [10, 20, 15]
}
df = pd.DataFrame(data)
print(df)

# Without explicit index
series = pd.Series([1, 2, 3, 4])
print(series)

# With explicit index
series = pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])
print(series)

df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 32, 22]
}, index=["a", "b", "c"])
print(df)


# Save the DataFrame to a CSV file
df.to_csv('my_data.csv', index=False)


# Reading data from a CSV file
df = pd.read_csv('file.csv')

# Reading data from an Excel file
df = pd.read_excel('file.xlsx')

# Reading data from a SQL database

# Creates a temporary SQLite database
engine = create_engine('sqlite:///:memory:')
df = pd.read_sql('SELECT * FROM my_table', engine)
