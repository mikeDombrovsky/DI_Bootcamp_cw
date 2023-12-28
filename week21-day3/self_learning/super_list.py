class SuperList(list):
    def __len__(self):
        return 100
    
super_list = SuperList()

print(len(super_list))
super_list.append(5)

print(super_list[0])
print(issubclass(SuperList, list))