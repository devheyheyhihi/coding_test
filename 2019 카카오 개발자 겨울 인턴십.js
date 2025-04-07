const board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]

const moves = [1,5,3,5,1,2,1,4]

const coding_test = (board,moves) => {
    let basket = [];
    let answer = 0;
    for(let i = 0; i < moves.length; i++) {
        for(const row of board) {
            if(row[moves[i]-1] !== 0) {
                basket.push(row[moves[i]-1]);
                row[moves[i]-1] = 0;
                if(basket[basket.length-1] === basket[basket.length-2]) {
                    basket.pop();
                    basket.pop();
                    answer += 2;
                }
                break;
            }
        };
    }
    return answer;
}

console.log(coding_test(board,moves));
