# 커서 이동 최적화X 오른쪽으로만 생각 => 그리디 X
# def solution(name):
#     times = 0
#     for sp in name:
#         print("sp", sp)
#         print("ord(sp)", ord(sp))
#         print("ord('Z') - ord(sp)", ord('Z') - ord(sp))
#         print("ord(sp) - ord('A')", ord(sp) - ord('A'))
#         if ord('Z') - ord(sp) > ord(sp) - ord('A'):
#             print("A")
#             times += ord(sp) - ord('A')
#         elif ord('Z') - ord(sp) <= ord(sp) - ord('A'):
#             print("Z")
#             times += ord('Z') - ord(sp) + 1
#         print("times",times)
#
#     times += len(name) - 1
#     return times


# 좌우 이동 최적화 개선 but 두번 이동만을 고려
# def solution(name):
#     change = 0
#     for ch in name:
#         change += min(ord(ch) - ord('A'), 26 - (ord(ch) - ord('A')))
#
#     n = len(name)
#     move = n - 1
#
#     for i in range(n):
#         next_i = i + 1
#         while next_i < n and name[next_i] == 'A':
#             next_i += 1
#         back = i + i + n - next_i
#         forward = i + i + next_i
#         move = min(move, back, forward)
#
#     return change + move


def solution(name):
    # 알파벳 변경 횟수
    change = 0
    for ch in name:
        change += min(ord(ch) - ord('A'), 26 - (ord(ch) - ord('A')))
        print("change: ",change)

    # 커서 이동 계산
    n = len(name)
    move = n - 1  # 기본: 오른쪽으로만

    for i in range(n):
        next_i = i + 1
        while next_i < n and name[next_i] == 'A':
            next_i += 1
        # 오른쪽 i번, 왼쪽으로 돌아가기
        back = i + (n - next_i)
        # 왼쪽으로 n-i번, 오른쪽으로 next_i
        forward = (n - i) + next_i
        move = min(move, back, forward)

    return change + move

# print(ord('A'))
# print(chr(66))
# print(ord('Z'))
# print(ord('X'))

print(solution("JEROEN"))
# print(solution("JAN"))
