from typing import List

def read_integers() -> List[int]:
    user_input = input()
    ints_string = user_input.split(",")
    ints = []
    for i in ints_string:
        ints.append(int(i))
    return ints

# do not modify the code below
print(read_integers())
print(read_integers())
print(read_integers())
