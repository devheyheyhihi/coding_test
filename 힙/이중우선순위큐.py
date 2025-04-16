from heapq import heapify, heappush, heappop


def solution(operations):
    max_heap = []
    min_heap = []

    for operation in operations:
        [op, num] = operation.split(' ')
        if op == "I":
            heappush(min_heap, int(num))
            heappush(max_heap, -int(num))
        elif op == "D":
            if num == '1' and max_heap:
                max_num = heappop(max_heap)
                min_heap.remove(-max_num)
                heapify(max_heap)   # 로직상 힙 깨져도 리스트 순서가 바뀌지 않으므로 불필요
            elif num == '-1' and min_heap:
                min_num = heappop(min_heap)
                max_heap.remove(-min_num)
                heapify(min_heap)   # 로직상 힙 깨져도 리스트 순서가 바뀌지 않으므로 불필요

    return [0, 0] if not min_heap else [-max_heap[0], min_heap[0]]


print(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]))
print(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]))
print(solution(["I 16", "I -5643", "I 3", "D -1"]))
print(solution(["I 3", "I 2", "I 1", "D 1", "D 1", "I 3", "D -1"]))
