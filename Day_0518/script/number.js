console.log(`최대값: ${Number.MAX_VALUE}`);
console.log(`최대값: ${Number.MIN_VALUE}`);

let data = "2.5";
console.log(data * 5);  // 문자열로 된 숫자는 곱하기 연산 가능
console.log(data + 5);  // 문자열로 된 숫자는 더하기 연산 시 문자열 결합처리

let temp = Number(data);
console.log(temp + 5);

temp = parseFloat(data); // 실수로 파싱
console.log(temp + 5);

temp = parseInt(data); // 정수로 파싱
console.log(temp + 5);

//-------------------------
data = "2a5";
console.log(data + 5);  // 결합

temp = Number(data);  
console.log(temp + 5); // NaN 출력

temp = parseFloat(data); // 앞에서부터 변환이 가능한 부분까지 변환
console.log(temp + 5);

temp = parseInt(data); // 변환이 가능한 부분까지 변환
console.log(temp + 5);