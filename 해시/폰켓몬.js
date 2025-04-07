const solution = (nums) => {
    // let hash = {};
    // for(let num of nums){
    //     hash[num] = (hash[num] || 0) + 1
    // }
    // let answer =  parseInt(nums.length / 2) < Object.keys(hash).length ?
    //     parseInt(nums.length / 2) : Object.keys(hash).length
    // return answer
    const hash = new Map();
    const half = Math.floor(nums.length / 2);

    for (let num of nums) {
        if (!hash.has(num)) {
            hash.set(num, true);
            if (hash.size > half) return half; // 조기 종료
        }
    }
    return hash.size;
}
const nums1 = [3,1,2,3];
const nums2 = [3,3,3,2,2,4];
const nums3 = [3,3,3,2,2,2];
console.log(solution(nums1));
console.log(solution(nums2));
console.log(solution(nums3));
