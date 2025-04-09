function solution(priorities, location) {
    let result = 0;
    const queue = [];
    const arr = priorities.map((pri, index) => {
        return {pri, index}
    });

    const findMax = (arr) => {
        return Math.max(...arr.map(({pri, index}) => pri));
    }

    while (arr.length > 0) {
        let {pri, index} = arr.shift();

        if (findMax(arr) <= pri) queue.push({pri, index});
        else arr.push({pri, index});
    }
    for (let i = 0; i < queue.length; i++) {
        let {pri, index} = queue[i];
        if (index === location) return result = i + 1;
    }

    return result;
}

const priorities1 = [2, 1, 3, 2];
const location1 = 2;

const priorities2 = [1, 1, 9, 1, 1, 1]
const location2 = 0;

console.log(solution(priorities1,location1));
console.log(solution(priorities2,location2));
