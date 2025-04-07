function solution(s) {
    // const temp = s.split(' ');
    // let max = temp[0];
    // let min = temp[0];
    // for(let i = 0; i < temp.length; i++){
    //     if(Number(max) < Number(temp[i])) max = temp[i];
    //     if(Number(min) > Number(temp[i])) min = temp[i];
    //     // console.log("i:",i," temp[i]:", temp[i]," max:",max," min:",min);
    // }
    //
    // return `${min} ${max}`;
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}

const s1 = "1 2 3 4";
const s2 = "-1 -2 -3 -4";
const s3 = "-1 -1";

console.log(solution(s1))
console.log(solution(s2))
console.log(solution(s3))
