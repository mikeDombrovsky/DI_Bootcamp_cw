import pandas as pd

# Creating a DateTime object
date = pd.to_datetime("4th of July, 2023")
print(date)


# Convert strings to DateTime
dates = pd.to_datetime(['2023-07-04', '2023-08-04', '2023-09-04'])
print(dates)


index = pd.date_range('1/1/2023', periods=9, freq='T') # 9 objects in 1 min
series = pd.Series(range(9), index=index)
print("Original Series:")
print(series)

# Resample to 3 minute intervals
print("\nResampled Series:")
print(series.resample('3T').sum()) 
