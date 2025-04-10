function solution(scoville, K) {
    let heap = scoville.slice(); // 원본 배열 복사
    let count = 0;

    // 힙 속성을 유지하기 위해 초기 힙 변환 (O(n))
    for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
        heapifyDown(heap, i, heap.length);
        console.log("heap",heap);
    }

    // 최소값이 K 미만이고 2개 이상 남았을 때까지 반복
    while (heap[0] < K && heap.length >= 2) {
        // 최소값 2개 꺼내기
        let min1 = removeMin(heap);
        console.log("min1: ",min1, "heap: ",heap);
        let min2 = removeMin(heap);
        console.log("min2: ",min2, "heap: ",heap);

        // 새 스코빌 지수 계산
        let newSco = min1 + min2 * 2;

        // 새 값 삽입
        insert(heap, newSco);

        count++; // 섞은 횟수 증가
    }

    // 모든 값이 K 이상인지 확인
    return heap.length > 0 && heap[0] < K ? -1 : count;
}

// 힙에 값 삽입 (Heapify Up)
function insert(heap, value) {
    heap.push(value); // 배열 끝에 추가
    let index = heap.length - 1;

    // 부모와 비교하며 올라가기
    while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (heap[parentIndex] <= heap[index]) break;
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
    }
}

// 최소값 제거 및 반환 (Heapify Down)
function removeMin(heap) {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();

    console.log("removeMin1",heap);
    const min = heap[0]; // 루트 (최소값)
    console.log("min",min);
    heap[0] = heap.pop(); // 마지막 값을 루트로 이동
    console.log("heap[0]",heap[0]);
    console.log("removeMin2",heap);
    heapifyDown(heap, 0, heap.length);
    console.log("removeMin3",heap);
    return min;
}

// 아래로 내려가며 힙 속성 유지
function heapifyDown(heap, index, length) {
    while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        console.log("heap: ",heap);
        console.log("left: ",left, " right: ",right," smallest: ",smallest);

        if (left < length && heap[left] < heap[smallest]) smallest = left;
        if (right < length && heap[right] < heap[smallest]) smallest = right;
        if (smallest === index) break;

        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
}

const scoville = [3, 12, 1, 10, 9, 2];
// const scoville = [1, 8, 2];
const K = 7;

console.log(solution(scoville , K));
