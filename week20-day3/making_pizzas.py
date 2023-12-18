import pizza as pz
from pizza import make_pizza as mp, make_spagetti # import specific function + alias

pz.make_pizza(16, 'pepperoni')
pz.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')

mp(20, 'mushrooms', 'green peppers')

make_spagetti()

