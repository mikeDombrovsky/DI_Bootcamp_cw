import operators

from operators import addOperator, divideOperator

from operators import addOperator as add, divideOperator as divide

print(operators.addOperator(3, 3))
print(operators.divideOperator(3, 2))


print(addOperator(4, 4))
print(divideOperator(4, 2))

print(add(5, 5))
print(divide(5, 2)) 

# pip install -r requirements.txt
# $ pip install pipreqs
# pip freeze > requirements.txt
