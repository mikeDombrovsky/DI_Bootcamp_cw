from typing import Any


class Poopy:
    poopies = {
        'bobby':True,
        'lilly':False
    }
    
    def __getitem__(self, i):
        return self.poopies[i]
    
p = Poopy()
print(p['bobby'])