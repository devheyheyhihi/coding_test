function solution1(sizes) {
    let test= sizes.flat();
    test.sort((a,b)=> a - b);
    let test1 = test.slice(0,test.length/2);
    let test2 = test.slice(test.length/2);
    return Math.max(...test1) * Math.max(...test2);
}

//반복문 사용
const solution2 = (sizes) => {
    let max_width = 0;
    let max_height = 0;
    sizes.map((size)=>{
        if(size[0] > size[1]) {
            if(max_width < size[0]) max_width = size[0];
            if(max_height < size[1]) max_height = size[1];
        }
        else {
            if(max_width < size[1]) max_width = size[1];
            if(max_height < size[0]) max_height = size[0];
        }
    })
    return max_width * max_height;
}

//완전탐색 알고리즘
function solution(sizes) {
    // 가능한 W 후보 수집
    const candidates = new Set();
    sizes.forEach(([w, h]) => {
        candidates.add(w);
        candidates.add(h);
    });

    let minArea = Infinity;

    // 각 W에 대해 탐색
    for (let W of candidates) {
        let maxH = 0;
        let canFit = true;

        // 모든 명함을 W 이하 가로로 맞추기
        for (let [w, h] of sizes) {
            // 회전 없이 가로 W 이하
            let height = h;
            if (w > W) {
                // 회전 시도
                height = w;
                if (h > W) {
                    canFit = false; // 둘 다 W 초과
                    break;
                }
            }
            maxH = Math.max(maxH, height);
        }

        if (canFit) {
            minArea = Math.min(minArea, W * maxH);
        }
    }

    return minArea;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));