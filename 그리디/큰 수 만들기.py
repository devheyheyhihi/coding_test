
# 실패 알고리즘 => 그리디에만 집중 => 첫번째 제거 알고리즘만 봄
# def solution(number, k):
#     numbers = list(number)
#     max_number = max(numbers[:k])
#     first_remove = 0
#     while numbers[first_remove] != max_number:
#         first_remove+=1
#     numbers = numbers[first_remove:]
#
#     second_remove = k-first_remove
#     i = 0
#     while second_remove > 0 and i < len(numbers):
#         if(numbers[i] < numbers[i+1] and numbers[i+1]):
#             numbers.remove(numbers[i])
#             second_remove -= 1
#         i += 1
#
#     return ''.join(numbers)


def solution(number, k):
    stack = []
    for i, num in enumerate(number):
        while stack and stack[-1] < num and k > 0:
            stack.pop()
            print("stack pop: ",stack)
            k -= 1
        stack.append(num)
        print("stack append: ",stack)

    if k > 0:
        stack = stack[:-k]

    return ''.join(stack)

print(solution("1924", 2))
print(solution("1231234", 3))
print(solution("4177252841", 4))