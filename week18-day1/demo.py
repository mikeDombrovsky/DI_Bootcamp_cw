class User:
    def __init__(self, name, email):
        self._name = name
        self._email = email

    def get_name(self):
        return self._name
    
    def get_email(self):
        return self._email
    
    def do_smtg(self):
        raise ValueError()

    def __str__(self):
        return f'{self._name} {self._email}'
    
users = [User('Name','test@mail.com'), User('Name2','test2@mail.com')]

for user in users:
    user.do_smtg()
    