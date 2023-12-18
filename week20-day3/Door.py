class Door:
    def __init__(self, isOpened=False):
        self.isOpened = isOpened
    
    def open_door(self):
        self.isOpened = True
        
    def close_door(self):
        self.isOpened = False
        

class BlockedDoor(Door):
    def open_door(self):
        raise Exception('Door cannot be opened!')
    
    def close_door(self):
        raise Exception('Door cannot be closed!')
    
door = Door()
blocked_door = BlockedDoor()

print('door isOpened - ', door.isOpened)
door.open_door()
print('door isOpened - ', door.isOpened)
door.close_door()
print('door isOpened - ', door.isOpened)

print('blocked_door isOpened - ', blocked_door.isOpened)
blocked_door.open_door()

