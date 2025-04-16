function solution(array, commands) {
    let answer = [];

    answer = commands.map(i => {
        return array.slice(i[0] - 1, i[1]).sort((a,b)=>a-b)[i[2] - 1]
    });

    return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const command = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array,command));