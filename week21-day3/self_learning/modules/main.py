import utility
import shopping.shopping_cart as cart


def print_cart():
    # Use a breakpoint in the code line below to debug your script.
    print(f'Cart is, {cart}')
    print(f'Cart is, {cart.buy("apple")}')


if __name__ == '__main__':
    print_cart()
