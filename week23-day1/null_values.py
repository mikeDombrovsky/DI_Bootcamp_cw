import pandas as pd
import numpy as np

# Creating a DataFrame with some null values
df = pd.DataFrame({
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, np.nan, 8],
    'C': [9, 10, 11, 12]
})

# Checking for null values
print(df.isnull())


# Dropping all rows with any NaN values
df_dropped = df.dropna()

print(df_dropped)


# Filling NaN values with 0
df_filled = df.fillna(0)

print("DataFrame after filling NaN values with 0:")
print(df_filled)

# Forward fill (propagate the previous value forward)
df_ffill = df.fillna(method='ffill')

print("DataFrame after forward filling:")
print(df_ffill)

# Backward fill (propagate the next value backward)
df_bfill = df.fillna(method='bfill')

print("DataFrame after backward filling:")
print(df_bfill)



