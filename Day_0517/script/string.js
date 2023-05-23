let data1 = "ABCDEFG";

// .length: 문자열의 길이
console.log('문자열 길이: ' + data1.length);

// .charAt(N): 특정 위치의 문자열
console.log("==================")
console.log('인덱스 0번 위치: ' + data1.charAt(0));

let text = "Hello world, welcome to the universe.";

// .includes(string): 특정 문자열 포함 여부 확인
console.log("==================")
let result = text.includes("world");
console.log(result);

// 단어가 아니여 찾을 수 있음
console.log("==================")
result = text.includes("ll");
console.log(result);

// .replace(string1, string2): 문자열 교체
console.log("==================")
result = text.replace("Hello", "hi");
console.log(text);
console.log(result);

// .search(string): 문자열의 위치를 알려줌
console.log("==================")
result = text.search("world");
console.log(result);

// 결과가 없으면 -1 출력
console.log("==================")
result = text.search("ㅋㅋ");
console.log(result);

// .slice(N1, N2): N1 개수만큼 N2의 위치 전까지 가져옴
// N2 > N1이어야 함
console.log("==================")
result = text.slice(6, 12); // 12는 위치를 의미함
console.log(result);
console.log(text);

console.log("==================")
result = text.slice(-3, -1); // 음수 사용 가능
console.log(result);

// .split
console.log("========split==========")
let splitData = text.split(" "); // 스플릿한 결과는 배열로 반환
console.log(splitData);

// .substr(): 권장 X
console.log("========substr==========")
result = text.substr(6, 12);
console.log(result);
console.log(text);

result = text.substr(35, 10);
console.log(result);

// .substring: slice()와 유사
console.log("========substring==========")
result = text.substring(6, 12);
console.log(result);
console.log(text);

result = text.substring(35, 10); // 앞 뒤 인덱스의 순서 상관없음; 최대 길이보다 커도 됨
console.log(result);

result = text.substring(-3, 2); // 앞에 음수를 쓰면 가져올 수 있을 만큼 가져옴
console.log(result);

// .trim(): 문자열 앞뒤의 공백을 제거
console.log("========trim==========")
text = "      h ello       ";
console.log("길이: " + text.length);
result = text.trim();
console.log(result);
console.log(result.length);
