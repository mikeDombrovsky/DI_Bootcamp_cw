import pandas as pd
# Exercise 14: Converting Dates And Adding Them To DataFrames
data = {
    "Fruit": ["Apple", "Banana", "Date", "Grapes", "Apple", "Date", "Cherry", "Peach"],
    "Quantity": [10, 15, 50, 25, 100, 150, 175, 200],
    "Price": [2.5, 1.0, 3.5, 2.0, 2.5, 3.5, 3.1, 2.5],
    "Updated_Price": [2.0, 1.2, 3.5, 2.0, 2.0, 3.5, 3.1, 2.5],
    "Supplier": ["Supplier1", "Supplier2", "Supplier3", "Supplier1",
                 "Supplier2", "Supplier3", "Supplier4", "Supplier4"]
}

df = pd.DataFrame(data)

# Print the DataFrame
print(df)


arrival_dates = ["2023-07-01", "2023-07-05",
                 "2023-07-10", "2023-07-15", "2023-07-20"]

date_time_obj = pd.to_datetime(arrival_dates)

data['Arrival_Date'] = pd.NaT

df.loc[:len(arrival_dates) - 1, 'Arrival_Date'] = arrival_dates

print(data)

# Exercise 15: Resampling Time Series Data

sales = pd.Series([150, 200, 250, 150, 300, 200, 250, 300, 350, 400, 350,
                  200, 250, 300, 400],
                  index=pd.date_range('2023-07-01', periods=15, freq='D'))

print(sales)

print(sales.resample('W').sum())
