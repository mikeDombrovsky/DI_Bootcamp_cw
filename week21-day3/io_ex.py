

# content = open('secrets.txt').read()
# print(content)


# try:
    
#     f = open('C:\Users\madom\c-workspace\dev_ins_html1\di_bootcamp\DI-Bootcamp-Stage1\DI_Bootcamp_cw\week21-day3\io_test\secrets.txt', mode='w') # permission - write  mode='w' mode='r' mode='r+'

#     f.write('write it to file')
    
# finally:

#     f.close()


with open('secrets.txt') as f:
    f.write('write it to file', mode='w') # auto_closing
    
with open('secrets.txt') as f:
    f.write('write it to file', 'w') # auto_closing
    f.seek() # move cursor to position
    print(f.read())
    print(f.readlines())
    print(f.readline(2)) # read n chars
    
with open('output.txt') as f:
    f.write('write it to file', mode='w+' ) # auto_closing mode to write to end, but r+ rewrites old info and doesn't create file
    print(f.write('Hello'))
    cursor_position = f.tell()
    print(cursor_position)
    f.seek(0) # move cursor to position
    print(f.tell())
    print(f.read())
    