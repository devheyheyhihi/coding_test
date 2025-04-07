//해시 사용

const solution = (participant, completion) => {
    // participant.sort();
    // completion.sort();
    // for(var i=0;i<participant.length;i++){
    //     if(participant[i]!==completion[i])
    //         return participant[i]
    // }
    // return participant[(participant.length)-1];

    const hash = new Map();

    for(let p of participant){
        hash.set(p, (hash.get(p) || 0) + 1);
    }
    for (let c of completion) {
        hash.set(c, hash.get(c) - 1);
    }
    for (let [name, count] of hash) {
        if (count > 0) return name;
    }
};

const participant = ["leo", "kiki", "eden"];

const completion = ["eden", "kiki"];

console.log(solution(participant,completion));
