// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
//
// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
//
//     제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

//스택 문제 풀이
function solution(s){
    const stack = [];
    for(let paren of s){
        if(paren === '('){
            stack.push(paren);
        } else if(paren === ")"){
            if(stack.length > 0) stack.pop();
            else return false;
        }
    }
    return stack.length === 0;
}

//큐 문제 풀이
function solution(s) {
    const queue = [];
    let front = 0; // 앞 포인터

    for (let paren of s) {
        if (paren === '(') {
            queue.push(paren);
        } else if (paren === ')') {
            if (front >= queue.length) return false;
            front++;
        }
    }
    return front === queue.length;
}

const s1 = "()()"
const s2 = "(())()"
const s3 = ")()("
const s4 = "(()("

console.log(solution(s1)); //true
console.log(solution(s2)); //true
console.log(solution(s3)); //false
console.log(solution(s4)); //false
