from translate import Translator

trans = Translator(to_lang='ja')

try:
    with open('./test.txt', mode='r') as my_file:
        text = my_file.read()
        print(text)
        translated = trans.translate(text)
        print(translated)
        with open('./test-ja.txt', mode='w') as f:
            f.write(translated)
except FileNotFoundError as e:
    print(e)