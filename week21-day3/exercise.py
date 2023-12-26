with open('nameslist.txt') as f:
    file = f.readlines()
    print(file)
    print(file[4])
    # for line in f:
    #     print(line)
    
    print(f.read(10))
    
    words = []
    for line in f:
        words.append(line.strip())
        
    print(f'Darth - {file.count("Darth")}')
    

with open('nameslist.txt', 'a+') as f:
    f.write('\nMike')
    
content = ''
with open('nameslist.txt') as f:
    content = f.read()
    

with open('nameslist.txt', mode='w') as f:
    f.write(content.replace())
    print(f.read())
    
