# Dict - unordered pairs of key-value
# Key must be immutable type (hashable)
dictionary = {
    'a': [1, 2, 3],
    'b': 2,
    'b':3, # overwrite prev value
    3: True,
    False: True
}

print(dictionary[3])

print(dictionary.get(False))
print(dictionary.get('fake_key')) # None instead of error
print(dictionary.get('fake_key','default')) 
print(dictionary)

user = dict(name='Johny')
print(user)

print('is \'a\' in dictionary? ', 'a' in dictionary.keys()) 

user2 = user.copy()
user.clear()
print(user, user2)
user2.pop('name')
