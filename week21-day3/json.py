import json

my_family = {
    "parents": ['Beth', 'Jerry'],
    "children": ['Summer', 'Morty']
}

json_file = "my_file.json"

with open(json_file, 'w') as file_obj:
    
   # json.dump(obj2save , destination_file)
    json.dump(my_family, file_obj, indent=2, sort_keys=True)

print(json.dumps(my_family, indent=2))

with open(json_file) as f:
    print(json.load(f))
    f.seek(0)
    print(type(json.load(f)))
 