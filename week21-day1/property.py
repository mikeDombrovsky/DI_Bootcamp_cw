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
        
bobby_name = 'Bobby'
l_name = 'Levi'

email = f'{bobby_name}.{l_name}@gmail.com'

bob = Person(bobby_name, l_name, email)

print(bob.email)