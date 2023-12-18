class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor


class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)


nc = NewCircle(1)
print(nc.diameter)

nc.grow()

print(nc.diameter)


class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")


class Dog(Animal):
    def fetch_ball(self):
        print("I am a dog, and I love fetching balls")

    def make_sound(self):
        print("I am an DOGGG !!! WOUAFFF!!")


rex = Dog('dog', 4, "Wouaf")
rex.make_sound()
# >> I am an DOGGG !!! WOUAFFF!!
