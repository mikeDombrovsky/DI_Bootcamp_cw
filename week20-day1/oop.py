class Car:
    def __init__(self, brand, color, model):  # dunder
        self.brand = brand
        self.color = color
        self.model = model
        print(f'new Car is created with brand {brand}!')


# instance of Car class
honda = Car('honda', 'red', 'Mustang')
tesla = Car('tesla', 'blue', 'model Y')

print(type(honda))

print(tesla.model)


class Dog:
    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def walk(self, number_of_meters):
        print("{} walked {} meters".format(self.name, number_of_meters))

    def rename(self, new_name):
        self.name = new_name


bobik = Dog('Bobik')
print(bobik.name)
bobik.bark()


class Person():
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def show_details(self):
    print("Hello my name is " + self.name)
    
  def set_name(self, name):
      self.name = name
      
first_person = Person("John", 36)
first_person.show_details()



class Computer:

    def description(self, name):
        """
        This is a totally useless function
        """
        print("I am a computer, my name is", name)
        # Analyse the line below
        print(self)


mac_computer = Computer()
mac_computer.brand = "Apple"
print(mac_computer.brand)

dell_computer = Computer()

Computer.description(dell_computer, "Mark")
# IS THE SAME AS:
dell_computer.description("Mark")
