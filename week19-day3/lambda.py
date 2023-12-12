

def upper_str(s):
    return s.upper()

# same lambda function
upper_str2 = lambda s: s.apper()

map_obj = map(lambda s: s.upper(), ['one', 'two'])
print(list(map_obj))

people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

filtered = filter(lambda name: len(name) <= 4 , people)
print(filtered)
mapped = map(lambda name: 'Hello ' + name, filtered)

print(list(mapped))
