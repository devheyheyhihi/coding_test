function solution(genres, plays) {
    // 1. 장르별 총 재생 횟수와 노래 정보를 저장할 Map 생성
    const totalPlays = new Map(); // 장르별 총 재생 횟수
    const songsByGenre = new Map(); // 장르별 노래 리스트

    // 2. genres와 plays를 한 번만 돌면서 데이터 채우기
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        // 총 재생 횟수 누적
        totalPlays.set(genre, (totalPlays.get(genre) || 0) + play);

        // 노래 정보 추가 (인덱스, 재생 횟수 쌍)
        if (!songsByGenre.has(genre)) songsByGenre.set(genre, []);
        songsByGenre.get(genre).push([i, play]);
    }

    // 3. 장르를 총 재생 횟수 기준으로 정렬
    const sortedGenres = [...totalPlays].sort((a, b) => b[1] - a[1]);

    // 4. 각 장르에서 노래를 정렬하고 최대 두 개 뽑아서 결과 만들기
    const result = [];
    for (const [genre] of sortedGenres) {
        // 노래를 재생 횟수 내림차순, 같으면 인덱스 오름차순으로 정렬
        const songs = songsByGenre.get(genre).sort((a, b) => b[1] - a[1] || a[0] - b[0]);
        // 최대 두 개만 결과에 추가 (인덱스만)
        result.push(...songs.slice(0, 2).map(song => song[0]));
    }

    return result;
}

const genres = ["classic", "pop", "classic", "classic", "pop"]
const plays =[500, 600, 150, 800, 2500]

console.log(solution(genres, plays))
