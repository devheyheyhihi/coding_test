function solution1(bridge_length, weight, truck_weights) {
    let time = 0;
    let init_truck = [...truck_weights];

    let crossed_tr_queue = [];
    let crossing_tr_queue = [];
    let temp = 0;
    while (temp < bridge_length){
        crossing_tr_queue.push(0)
        temp++;
    }
    while(JSON.stringify(crossed_tr_queue) !== JSON.stringify(init_truck)){
        let driving_tr = crossing_tr_queue.shift();
        if(driving_tr !== 0) crossed_tr_queue.push(driving_tr);

        let cur_bridge_weights = crossing_tr_queue.reduce((acc,cur)=>{return acc+cur},0);
        if(cur_bridge_weights + truck_weights[0] <= weight){
            let start_tr = truck_weights.shift();
            crossing_tr_queue.push(start_tr);
        } else crossing_tr_queue.push(0);

        time ++;
    }
    return time;
}

function solution2(bridge_length, weight, truck_weights) {
    let time = 0;
    const crossing = []; // { weight, entryTime } 객체로 다리 위 트럭 관리
    const waiting = [...truck_weights];
    let bridgeWeight = 0;

    while (waiting.length > 0 || crossing.length > 0) {
        time++;

        // 다리 끝에 도달한 트럭 제거
        if (crossing.length > 0 && time - crossing[0].entryTime >= bridge_length) {
            const truck = crossing.shift();
            bridgeWeight -= truck.weight;
        }

        // 새 트럭 추가 가능 여부
        if (waiting.length > 0 &&
            crossing.length < bridge_length &&
            bridgeWeight + waiting[0] <= weight) {
            const truckWeight = waiting.shift();
            crossing.push({ weight: truckWeight, entryTime: time });
            bridgeWeight += truckWeight;
        }
    }
    return time;
}

const solution = (bridge_length,weight,truck_weights) => {
    // return solution1(bridge_length, weight, truck_weights)
    return solution2(bridge_length, weight, truck_weights)
}

const bridge_length1 = 2;
const weight1 = 10;
const truck_weights1 = [7,4,5,6];

const bridge_length2 = 100;
const weight2 = 100;
const truck_weights2 = [10];

const bridge_length3 = 100;
const weight3 = 100;
const truck_weights3 = [10,10,10,10,10,10,10,10,10,10];

console.log(solution(bridge_length1,weight1,truck_weights1));
console.log(solution(bridge_length2,weight2,truck_weights2));
console.log(solution(bridge_length3,weight3,truck_weights3));
