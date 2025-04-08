//해시 풀이
const solution = (clothes) => {
    const hash = new Map();

    // 1. 종류별 의상 개수 카운트
    for (let [name, type] of clothes) {
        hash.set(type, (hash.get(type) || 0) + 1);
    }

    // 2. 각 종류별 경우의 수 계산 (입거나 안 입거나)
    let total = 1;
    for (let count of hash.values()) {
        total *= (count + 1); // 의상 개수 + 안 입는 경우
    }

    // 3. 아무것도 안 입는 경우 제외
    return total - 1;
}

//함수형 풀이
function solution2(clothes) {
    const hash = clothes.reduce((acc, [name, type]) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    return Object.values(hash).reduce((total, count) => total * (count + 1), 1) - 1;
}

const clothes1 = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
const clothes2 = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(clothes1));
console.log(solution(clothes2));
