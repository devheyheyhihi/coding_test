from heapq import heapify, heappush, heappop


def solution(jobs):
    jobs.sort()
    heap = []
    current, total, i = 0, 0, 0
    while i < len(jobs) or heap:
        while i < len(jobs) and current >= jobs[i][0]:
            heappush(heap, [jobs[i][1], jobs[i][0]])
            i += 1
        if heap:
            duration, request = heappop(heap)
            current += duration
            total += current - request
        else:
            current = jobs[i][0]  # 다음 요청으로 점프
    return total // len(jobs)


jobs = [[0, 3], [3, 5], [1, 9], [2, 6]]
print(solution(jobs))
