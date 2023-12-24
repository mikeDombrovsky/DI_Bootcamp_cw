class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor
        
    @staticmethod
    def get_color():
       return Circle.color
   
    @staticmethod
    def set_color(color):
        Circle.color = color


circle1 = Circle(2)
print(circle1.color)  # null? ! NO, RED
print(Circle.color)  # red
print(circle1.get_color())  # red
circle1.grow(3)  # circle1.diameter = 2 * 3 = 6
print(circle1.diameter)  # 6


circle1.grow()
Circle.grow(circle1)  # the same! self is the address in memory

print(Circle.get_color())
Circle.set_color('Blue')

print(Circle.get_color())