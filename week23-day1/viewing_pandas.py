import pandas as pd

# Sample DataFrame
df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie", "David", "Eve"],
    "Age": [25, 32, 22, 35, 47],
    "Score": [85, 63, 77, 96, 54]
})

# Head
# Returns the first 3 rows of the DataFrame

print(df.head(3))

# Tail
# Returns the last 3 rows of the DataFrame

print(df.tail(3))

# Info
# Provides a summary of the DataFrame including the number of non-null entries in each column

print(df.info())

# Describe
# Provides descriptive statistics of the DataFrame

print(df.describe())


# loc
print(df.loc[0])  # Selects row by index label

# iloc
print(df.iloc[0])  # Selects row by integer location (0-1-2-3... index)


# Adding a new column
df['Grade'] = ['A', 'B', 'C', 'A', 'F']

# Renaming columns
df.rename(columns={'Name': 'StudentName'}, inplace=True)

# Removing columns
df.drop('Grade', axis=1, inplace=True)


# Creates a new column 'Double_Age' with the original age multiplied by 2
df['Double_Age'] = df['Age'] * 2

# Overwrites the 'Age' column with the original values multiplied by 2
df['Age'] = df['Age'] * 2


# Checking for missing values
# Returns a DataFrame where each cell is either True or False depending
# on that cell's null status.
print(df.isna())

# Filling missing values
# Fills NA/NaN values with the specified value (in this case, with 'NA' string).
df.fillna(value='NA', inplace=True)

# Dropping rows with missing values
# Removes rows where at least one element is missing.
df.dropna(inplace=True)


# Converting a column data type
df['Age'] = df['Age'].astype('float')


# Mean of numeric columns
print(df.mean())

# Minimum of numeric columns
print(df.min())

# Maximum of numeric columns
print(df.max())

# Standard deviation of numeric columns
print(df.std())
