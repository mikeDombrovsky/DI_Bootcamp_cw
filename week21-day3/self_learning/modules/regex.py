import re

string = 'search inside this text here and here'

print('search' in string)  # True

search1 = re.search('this', string)  # if not returns None

print(search1)
print(search1.span())  # indexes from to
print(search1.start())  # where starts
print(search1.end())  # where ends
print(search1.group())  # returns match

pattern = re.compile('text')
search2 = pattern.search(string)
print(search2.group())

search3 = pattern.findall(string)
print(search3)

search4 = pattern.fullmatch(string)
print(search4)

search4 = pattern.match(string)  # returns object if just start of string matches pattern
print(search4)

pattern2 = re.compile(r'([a-zA-Z]).(t)')  # r means raw string

search5 = pattern2.search(string)
print(search5.group())

pattern_email = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')

my_email = 'poopy@gmail.com'

match_email = pattern_email.fullmatch(my_email)
print(match_email is not None)
