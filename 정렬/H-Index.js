
// 오름차순은 안돌아감
// function solution(citations) {
//     citations.sort((a,b)=>a-b);
//     let answer = 0;
//     for(let i = 0; i < citations.length; i++){
//         if(citations[i] <= i+1) answer = citations[i]
//         else break
//     }
//     return answer;
// }

function solution(citations) {
    citations.sort((a, b) => b - a);
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break;
        }
    }
    return h;
}

console.log(solution([3, 0, 6, 1, 5]))