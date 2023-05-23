/* 데이터 타입의 종류
    - 문자열, Escape Sequence

*/

/* 1) 문자열
    - '' "" 내부의 문자들
    - \n, \t, \b, \\, \', \"
   2) 숫자형: 정수(2진수(0b prefix), 10진수, 8진수(숫자 0이 prefix), 16진수(0x prefix)), 
              실수 (소숫점을 가진 수, 지수형 실수: 0.123E+5)

   3) 논리형: true, false 반환
              js에서는 불린형 연산이 가능함 (true: 1, false: 0)

   4) 함수형: function 키워드로 생성 --> first class function(일급함수)
              전달인자로 전달하거나, 함수 그 자체를 리턴할 수 있다. (고계?)
   5) 객체(Object)
    - []: 배열(Array) 객체
    - {}: Obejct - Python의 dictionary, Java의 Hashmap

   6) undefined
    - 값이 없는 변수를 나타내는 자료형
    - 변수를 선언하고 값을 대입하지 않을 때 undefined형이라고 한다.

    ※ null: typeof 연산자를 사용하면 object라고 출력되지만 object는 아님
            객체형에서는 아무 것도 참조하지 않을 때
            개발자들이 참조형을 사용할 때 null로 초기화함
*/

// 문자열 연습
let str = "kim's Bakery";
console.log(str);
console.log(typeof str);

let n1 = 12;
console.log(typeof n1);

let n2 = 0xef;
console.log(n2 + " " + typeof n2);

let bool = 10 < 12;
console.log(bool + ": " + typeof bool);
// js에서는 불린형 연산이 가능함 (true: 1, false: 0)
console.log(true + true);

// 함수의 선언
function test(data) {
    console.log("전달된 값: " + data);
}
// 함수의 호출
test(25);

// 함수의 타입 출력
console.log(typeof test);

// test 함수 실행 후 나오는 값 반환
let test2 = test();

// test 함수 그 자체를 선언
let test3 = test;
console.log(typeof test3);

// 표현적 함수
let myfunc = function () {
    console.log("익명함수를 처리함")
};

myfunc();
console.log(typeof myfunc);

// 함수를 데이터처럼 처리할 수 있음 ==> callback 함수
let num = 1;
function timer() {
    console.log('문자처리: ' + num++);
}

// setTimeout(timer, 1000);
// setInterval(timer, 1000);

// 함수의 결과값을 함수로 지정할 수 있음
function test4() {
    return function () {
        console.log("test");
    }
}

// 함수의 결과값을 반환받아 대입
let myfunc2 = test4();
myfunc2();

(function test5() {
    console.log('immediate run');
})();

//Object 타입
let ary = [1, 2, 3, 4];
console.log(typeof ary);
console.log(ary + ", 개수: " + ary.length);

// JS 객체: 값 이외의 함수 포함 가능
let obj1 = { name: 'hongGilDong', age: '25' };
console.log(typeof obj1);
console.log(obj1);

// JSON: 데이터 송수신용, 값만 포함
let obj2 = { "name": 'hongGilDong', "age": '25' };
console.log(typeof obj2);
console.log(obj2);

// undefined형
let name;
console.log(name);
console.log(typeof name);

// null type
console.log(typeof null); // null의 타입은 object? 오류임 ㅋ
