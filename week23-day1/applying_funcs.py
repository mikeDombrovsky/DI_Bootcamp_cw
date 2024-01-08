import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, 3, 4],
    'B': [10, 20, 30, 40],
    'C': [100, 200, 300, 400]
})

# Using map() function to replace values in a Series
df['A'] = df['A'].map({1: 'one', 2: 'two'})

print(df['A'])

# Using apply() function to find the square root of all values in a DataFrame
df[['B', 'C']] = df[['B', 'C']].apply(np.sqrt)

print(df)

# Using applymap() function to format all DataFrame values
df = df.applymap(lambda x: f"{x:.2f}" if pd.notnull(x) else x)

print(df)


df = pd.DataFrame({
    'Animal': ['Falcon', 'Falcon', 'Parrot', 'Parrot'],
    'Max Speed': [380., 370., 24., 26.],
    'Weight': [1, 1.5, 0.3, 0.5]
})

# Grouping the data by animal and finding the average for each group
df_grouped = df.groupby('Animal').mean()

print(df_grouped)


# Concatenating DataFrames
df1 = pd.DataFrame({'A': ['A0', 'A1', 'A2', 'A3'],
                    'B': ['B0', 'B1', 'B2', 'B3'],
                    'C': ['C0', 'C1', 'C2', 'C3'],
                    'D': ['D0', 'D1', 'D2', 'D3']},
                   index=[0, 1, 2, 3])

df2 = pd.DataFrame({'A': ['A4', 'A5', 'A6', 'A7'],
                    'B': ['B4', 'B5', 'B6', 'B7'],
                    'C': ['C4', 'C5', 'C6', 'C7'],
                    'D': ['D4', 'D5', 'D6', 'D7']},
                   index=[4, 5, 6, 7])

df_concat = pd.concat([df1, df2])

print(df_concat)

# Merging DataFrames on a key
df3 = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],
                    'A': ['A0', 'A1', 'A2', 'A3'],
                    'B': ['B0', 'B1', 'B2', 'B3']})

df4 = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],
                    'C': ['C0', 'C1', 'C2', 'C3'],
                    'D': ['D0', 'D1', 'D2', 'D3']})

df_merge = pd.merge(df3, df4, on='key')

print(df_merge)


# Sorting Values And Rank
df = pd.DataFrame({
    'B': ['B2', 'B3', 'B6', 'B7'],
    'A': ['A4', 'A1', 'A6', 'A7'],
    'C': ['C4', 'C1', 'C6', 'C7'],
    'D': ['D4', 'D1', 'D6', 'D7']},
    index=[2, 3, 6, 7])

# Sorting by index
df_sort_index = df.sort_index()

# Sorting by values in column 'A'
df_sort_values = df.sort_values(by='A')

print(df_sort_index)
print(df_sort_values)

# rank -add column with index of sorting
df['Rank_A'] = df['A'].rank()
print(df)
