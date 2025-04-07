const solution = (answers) => {
    let answer = [];
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
        a1[i % a1.length] === answers[i] && score[0]++;
        a2[i % a2.length] === answers[i] && score[1]++;
        a3[i % a3.length] === answers[i] && score[2]++;
    }
    for (let j = 0; j < score.length; j++) {
        Math.max(...score) === score[j] && answer.push(j + 1);
    }
    return answer;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));
