
//단방향만을 탐색했으므로 틀린 답
const solution1 = (phone_book) => {
    for(let i= 0; i < phone_book.length; i++){
        for(let j = i+1; j < phone_book.length; j++){
            if(phone_book[i]===phone_book[j].slice(0,phone_book[i].length)){
                return false;
            }
        }
    }
    return true;
}

// 답 자체는 맞았으나 시간 초과(시간 복잡도 고려)
const solution2 = (phone_book) => {
    for (let i = 0; i < phone_book.length; i++) {
        for (let j = 0; j < phone_book.length; j++) {
            if (i !== j && phone_book[j].startsWith(phone_book[i])) {
                return false;
            }
        }
    }
    return true;
}

//가장 최적화된 답
function solution3(phone_book) {
    phone_book.sort(); // 사전순 정렬
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}

//해시 사용한 답
const solution4 = (phone_book) => {
    const hash = new Map();
    for (let phone of phone_book) {
        hash.set(phone, '');
    }
    console.log("hash",hash)
    for (let phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            if (hash.has(phone.slice(0, i))) {
                return false;
            }
        }
    }
    return true;
}

const phone_book1 = ["119", "97674223", "1195524421"]
const phone_book2 = ["123","456","789"]
const phone_book3 = ["12","123","1235","567","88"]

console.log(solution4(phone_book1));
console.log(solution4(phone_book2));
console.log(solution4(phone_book3));
