function solution(n, lost_ori, reserve_ori) {
    let losts = [...lost_ori];
    let reserves = [...reserve_ori];
    let borrow = 0;

    for(let lost of losts){
        for(let reserve of reserves){
            if(lost - 1 === reserve || lost + 1 === reserve){
                borrow ++;
            }
        }
    }
    return;
}

console.log(solution(5,[2,4],[1,3,5]));
// console.log(solution(5,[2,4],[3]));
// console.log(solution(3,[3],[1]));