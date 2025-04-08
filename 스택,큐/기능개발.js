const solution1 = (prog,spd) => {
    const result = [];
    let progresses = prog.slice(); // 원본 보존
    let speeds = spd.slice();

    while(progresses.length > 0){
        progresses = progresses.map((progress, index)=> progress + speeds[index])

        // 앞 기능이 100 미만이면 다음 날로
        if (progresses[0] < 100) continue;

        let endPro = 0;

        for(const progress of progresses){
            if(progress >= 100) endPro++;
            else break;
        }

        if(endPro !== 0) {
            result.push(endPro);
            progresses.splice(0,endPro);
            speeds.splice(0,endPro);
        }
    }
    return result;
}
function solution2(progresses, speeds) {
    // 1. 완료 일수를 계산해 큐로 초기화
    const queue = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    const result = []; // 배포 묶음 저장

    // 2. 큐가 빌 때까지 처리
    while (queue.length > 0) {
        let count = 1; // 현재 배포될 기능 수
        let currentDay = queue.shift(); // 첫 번째 기능의 완료 일수

        // 3. 뒤에 대기 중인 기능들 확인
        while (queue.length > 0 && queue[0] <= currentDay) {
            queue.shift(); // 기준 일수 이하인 기능 제거
            count++;
        }

        result.push(count); // 배포된 기능 수 추가
    }

    return result;
}


const progresses1 = [93, 30, 55];
const speeds1 = [1, 30, 5];

const progresses2 = [95, 90, 99, 99, 80, 99];
const speeds2 = [1, 1, 1, 1, 1, 1];

const progresses3 = [93, 30, 55];
const speeds3 =  [1, 30, 5];

console.log(solution2(progresses1,speeds1));
console.log(solution2(progresses2,speeds2));
console.log(solution2(progresses3,speeds3));
