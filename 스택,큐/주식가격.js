function solution(prices) {
    const n = prices.length;
    const times = new Array(n).fill(0); // 각 가격이 떨어지지 않은 시간 저장
    const stack = []; // 아직 떨어지지 않은 가격의 인덱스 저장

    // prices 배열을 한 번 순회
    for (let i = 0; i < n; i++) {
        // 스택에 가격이 있고, 현재 가격이 스택 맨 위 가격보다 낮으면
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const top = stack.pop(); // 스택에서 꺼내기
            times[top] = i - top;    // 떨어지지 않은 시간 = 현재 인덱스 - 꺼낸 인덱스
        }
        stack.push(i); // 현재 인덱스를 스택에 추가
        console.log("i",i);
        console.log("stack",stack);
        console.log("times",times);
    }

    // 스택에 남은 인덱스 처리 (끝까지 떨어지지 않은 가격)
    while (stack.length > 0) {
        const top = stack.pop();
        times[top] = n - 1 - top; // 전체 길이 - 인덱스 - 1
    }

    return times;


}
const prices = [1, 2, 1, 2, 0];
console.log(solution(prices))
