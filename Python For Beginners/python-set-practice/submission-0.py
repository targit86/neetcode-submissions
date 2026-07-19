from typing import List

def contains_duplicate(words: List[str]) -> bool:
    word_set = set(words)
    word_list = list(word_set)
    return len(words) != len(word_list)

# do not modify code below this line
print(contains_duplicate(["hello", "world", "hello"]))
print(contains_duplicate(["hello", "world", "i", "am", "great"]))
print(contains_duplicate(["hello", "hello", "hello"]))
print(contains_duplicate(["Hello", "hellooo", "hello"]))
