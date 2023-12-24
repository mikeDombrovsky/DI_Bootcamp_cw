class Racecar():
    def __init__(self, model, reg_no, top_speed=0, nitros=False):
        self.model = model
        self.reg_no = reg_no
        self.top_speed = top_speed
        self.nitros = nitros

        if self.nitros:
            self.top_speed += 50

    def __str__(self):
        return self.model.capitalize()

    def __repr__(self):
        return f"This is a Racecar with registration: {self.reg_no}"

    def __call__(self):
        print(f"Vroom Vroom. The {self.model} Engines Started")

    def __gt__(self, other):
        if self.top_speed > other.top_speed:
            return True
        else:
            return False

    def drive(self, km):
        print(f"You drove the {self.model} {km} km in {km / self.top_speed} hours.")

    def race(self, other_car):
        if self > other_car:
            print(f"I am the winner")
        else:
            print(f"The {other_car.model} is the winner")

class PrintList():

    def __init__(self, my_list):
        self.mylist = my_list

    def __repr__(self):
        return str(self.mylist)

# printlist = PrintList(["a", "b", "c"])
# print(printlist.__repr__())
# printlist