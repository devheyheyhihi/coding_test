# 중복 처리 X, 리스트로 느림(시간복잡도 증가)
# def solution(n, lost, reserve):
#     borrow = 0
#     for l in lost:
#         if l+1 in reserve:
#             reserve.remove(l+1)
#             borrow += 1
#             continue
#         if l-1 in reserve:
#             reserve.remove(l-1)
#             borrow += 1
#             continue
#     answer = n - len(lost) + borrow
#     return answer
def solution(n, lost, reserve):
    reserve_set = set(reserve) - set(lost)
    lost_set = set(lost) - set(reserve)
    borrow = 0
    for l in sorted(lost_set):  # 순서 보장
        if l-1 in reserve_set:
            reserve_set.remove(l-1)
            borrow += 1
        elif l+1 in reserve_set:
            reserve_set.remove(l+1)
            borrow += 1
    return n - len(lost_set) + borrow

print(solution(5, [2, 4], [1, 3, 5]))
print(solution(5,[2,4],[3]))
print(solution(3,[3],[1]))
