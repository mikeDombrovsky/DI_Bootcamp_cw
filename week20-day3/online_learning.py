class Player:
    # class object attribute - static for every object
    membership = True

    def __init__(self, name='noname'):
        self.name = name


class Wizard(Player):
    def __init__(self, name, magic_power):
        super().__init__(name)
        self.magic_power = magic_power
        self.mana = 100
        
        
class Warrior(Player):
    def __init__(self, name, power):
        super().__init__(name)
        self.power = power
        
gendalf = Wizard('Gendalf the Gray', 'white flame')
        
class HybridBorg(Wizard, Warrior):
    def __init__(self, name, magic_power, power):
        # Wizard.__init__(self, name, magic_power)
        Warrior.__init__(self, name, power)


print(isinstance(gendalf, Wizard))  # True
print(isinstance(gendalf, Player))  # True
print(isinstance(gendalf, object))  # True

print(dir(gendalf)) # all methods and variables + dunder

gendalf_2000 = HybridBorg('Gendalf the Gray', 'white flame', '100')

print(dir(gendalf_2000))


