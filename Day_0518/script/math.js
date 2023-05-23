/*
Math 객체
1) 속성: PI(원주율),E(오일러 상수), ...
    Math.PI
2) 
*/

// Math.PI 사용
console.log(`원주율: ${Math.PI}`);
console.log(`오일러상수: ${Math.E}`);


/*
    abs(숫자): 절대값을 반환
    '숫자': 숫자로 인식
    null  : 0
    ''    : 0
    '공백': 0
    '문자': NaN
    []    : 0
    [1]   : NaN
    "없음": NaN
*/
console.log("================abs()")
console.log(Math.abs(-1));        // 1
console.log(Math.abs('-2'));      // 2
console.log(Math.abs(null));      // 0
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs(''));        // 0
console.log(Math.abs(' '));       // 0
console.log(Math.abs('korea'));   // NaN
console.log(Math.abs([]));        // 0
console.log(Math.abs([1, 2]));    // NaN
console.log(Math.abs());          // NaN

// 참고: null, undefined, 0, '',  []: 거짓
// 비어 있지 않은 문자열, 배열은 참으로 인식
if (undefined) {
    console.log('참');
} else {
    console.log('거짓');
}


// ceil(숫자): 올림. 주어진 숫자보다 큰 가까운 정수 리턴
// 올릴 소수점이 없으면 자기 자신 리턴
console.log("================ceil()")
console.log(Math.ceil(0.95));       // 1
console.log(Math.ceil(5.00001));    // 6
console.log(Math.ceil(5));          // 5
console.log(Math.ceil(-0.95));      // -0 (0(정수 0), 0.0(실수 양수 0), -0.0(실수 음수 0))
console.log(Math.ceil(-5.00001));   // -5

// floor(숫자): 내림. 주어진 숫자보다 작은 가까운 정수 리턴
// 내릴 소수점이 없으면 자기 자신 리턴
console.log("================floor()")
console.log(Math.floor(0.95));       // 0
console.log(Math.floor(5.00001));    // 5
console.log(Math.floor(5));          // 5
console.log(Math.floor(-0.95));      // -1
console.log(Math.floor(-5.00001));   // -6

// trunc(숫자): 버림. 소수점 자리수 버림
// 버릴 소수점이 없으면 자기 자신 리턴
console.log("================trunc()")
console.log(Math.trunc(0.95));       // 0
console.log(Math.trunc(5.00001));    // 5
console.log(Math.trunc(5));          // 5
console.log(Math.trunc(-0.95));      // -0
console.log(Math.trunc(-5.00001));   // -5

// round(숫자): 반올림
// 반올림할 소수점이 없으면 자기 자신 리턴
console.log("================round()")
console.log(Math.round(0.95));       // 1
console.log(Math.round(5.00001));    // 5
console.log(Math.round(5));          // 5
console.log(Math.round(-5.9));       // -6
console.log(Math.round(-5.8));       // -6
console.log(Math.round(-5.7));       // -6
console.log(Math.round(-5.6));       // -6
console.log(Math.round(-5.5));       // -5
console.log(Math.round(-5.4));       // -5

// 참고
console.log("================참고");
console.log(0 / 0);      // NaN 출력
console.log(10 / 0);     // Infinity
console.log(10 / -0);    // -Infinity

console.log((0.1 + 0.2) == 0.3); // false
console.log((0.1 + 0.2) === 0.3); // false; 비트연산을 수행하는 과정에서 소수점까지 일치하지 않음

// max, min
console.log("================max()");
console.log(Math.max(1, 5, 3));     // 5
console.log(Math.max(-1, -5, -3));  // 3
console.log(Math.max());            // -Infinity

let ary = [1, 5, 3];
console.log(Math.max(ary));     // NaN
console.log(Math.max(... ary)); // ...: 스프레드 연산자

console.log("================min()");
console.log(Math.min(1, 5, 3));     // 5
console.log(Math.min(-1, -5, -3));  // 3
console.log(Math.min());            // Infinity

console.log(Math.min(ary));     // NaN
console.log(Math.min(...ary)); // ...: 스프레드 연산자

// pow(n1, n2): 거듭제곱을 구하는 연산자
// ** 연산자와 결과 동일
console.log(Math.pow(5, 3));    // 125
console.log(5 ** 3);            // 125
console.log(Math.pow(4, 0.5));  // 2
console.log(Math.pow(4, -2));   // 0.0625 (= 1/4^2)
console.log(4 ** -2);           // 0.0625

console.log(Math.pow(-4, 2));   // 16
// console.log(-4 ** 2);           // systax error

console.log(Math.pow(-4, -2));   // 0.0625
console.log(Math.pow(-4, -0.5)); // NaN

// random(): 0 이상 ~ 1 미만의 난수 발생
console.log("================ random");

for (let i = 0; i < 5; ++i) {
    console.log(Math.random());
}

// 0 ~ 50 (0이상 50 이하의 정수를 5번 발생시키시오)
let mi = 0;
let mx = 50;

for (let i = 0; i < 5; ++i) {
    console.log(Math.floor(Math.random() * mx));
}
