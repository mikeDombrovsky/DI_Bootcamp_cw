numbers = [1, 2, 3, 4, 5]
numbers2 = [1, 2, 3, 4, 5]


class Person:

    def __init__(self, f_name, l_name):
        self.f_name = f_name
        self.l_name = l_name

    @property
    def email(self):
        return f'{self.f_name}.{self.l_name}@gmail.com'

    @property
    def name(self):
        return self.l_name

    @name.setter
    def name(self, new_name):
        self.f_name = new_name

    def __str__(self):
        return f'name {self.name} lastname {self.l_name}'
    
    def __repr__(self):
        return f'{self.__class__.__name__}( {self.name},lastname {self.l_name})'
    

print(type(str(numbers)))
print(type(repr(numbers)))
