class AppleComputer:
    def __init__(self):
        self.name = 'Apple comp'
        # self.__max_price = 900  # private attribute
        self._max_price = 900  # protected (not?) attribute
        
    def show_price(self):
        print(f'Selling Price: {self.__max_price}')
        
    def __get_min_price(self):
        print('mix price is 100')
        
    def public_min_price(self):
        self.__get_min_price()
        
comp1 = AppleComputer()
# comp1.max_price = 10
comp1.__max_price = 10
# comp1._max_price = 10
comp1.show_price()