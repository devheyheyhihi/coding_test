//스택 문제 풀이
function solution(arr) {
    const stack = [];

    for (let num of arr) {
        if (stack.length === 0 || stack[stack.length - 1] !== num) {
            stack.push(num); // 이전 요소와 다르면 스택에 추가
        }
    }

    return stack;
}


//큐 사용 문제 풀이
function solution(arr) {
    const queue = [];

    for (let num of arr) {
        if (queue[queue.length - 1] !== num) {
            queue.push(num); // 마지막 요소와 다르면 추가
        }
    }

    return queue;
}

const arr1 = [1,1,3,3,0,1,1]
const arr2 = [4,4,4,3,3]

console.log(solution(arr1));
console.log(solution(arr2));
