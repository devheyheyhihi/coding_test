from heapq import heapify, heappush, heappop

def solution(scoville, K):
    heapify(scoville)
    count = 0
    while scoville[0] < K and len(scoville) >= 2:
        heappush(scoville, heappop(scoville) + heappop(scoville) * 2)
        count += 1
    return count if scoville[0] >= K else -1


scoville = [3, 12, 1, 10, 9, 2]
K = 7

print(solution(scoville, K))
