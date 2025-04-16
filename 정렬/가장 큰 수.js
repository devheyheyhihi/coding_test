// function solution(numbers) {
//     const answer1 = numbers.map((a)=>a.toString());
//
//     const answer2 = answer1.sort((a, b) => (b + a).localeCompare(a + b))
//
//     const answer3 = answer2.join('')
//
//     if (answer3[0] === "0") return "0";
//     return answer3
// }


function solution(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;
}


console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));