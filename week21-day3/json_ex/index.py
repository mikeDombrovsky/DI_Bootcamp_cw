import json

f_ly = {
    "firstName": "Jane",
    "lastName": "Doe",
    "hobbies": ["running", "sky diving", "singing"],
    "age": 35,
    "children": [
        {
            "firstName": "Alice",
            "age": 6
        },
        {
            "firstName": "Bob",
            "age": 8
        }
    ]
}

with open('file.json', 'w') as f:
    json.dump(f_ly, f, indent=2)
    
    

with open('file.json') as f_obj:
    family = json.load(f_obj)

print(family)

for child in family['children']:
    print(f'age: {child["firstName"]}\nAge: {child["age"]}')
    
for i in range(len(family['children'])):
    family['children'][i]['favorite_color'] = 'green'
    
