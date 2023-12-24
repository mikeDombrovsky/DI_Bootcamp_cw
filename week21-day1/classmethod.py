class Vehicle:
    
    def __init__(self, number_of_wheels, id, color):
        self.number_of_wheels = number_of_wheels
        self.id = id
        self.color = color
    
    @classmethod
    def create_car(cls, id, color):
        return cls(4, id, color)
        
# car1 = Vehicle(4, '001', 'Black')
# car2 = Vehicle(4, '002', 'Black')
# car3 = Vehicle(4, '003', 'Black')


car1 = Vehicle.create_car('001', 'Black')


bike1 = Vehicle(2, '001', 'Black')
bike2 = Vehicle(2, '001', 'Black')