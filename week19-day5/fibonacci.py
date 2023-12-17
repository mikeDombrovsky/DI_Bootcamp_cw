def fiboncci(n):
    fib_sequence = []
    current = 1
    prev = 0

    for i in range(n + 1):
        fib_sequence.append(prev)
        box = prev
        prev += current
        current = box

    print(fib_sequence)


fiboncci(20)

def fiboncci2(n):
    a = 0
    b = 1
    for i in range(n + 1):
        # generator yield - does not store the entire sequence in memory
        yield a
        temp = a
        a = b
        b = temp + b
    
        
for x in fiboncci2(20):
    print(x)