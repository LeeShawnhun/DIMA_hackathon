/*
CSS 속성 접근
1) style: 읽기는 태그에 직접 스타일을 지정했을 때에만 읽어올 수 있다.
            내부스타일이나 외부 스타일로 지정한 경우는 빈문자열 반환
            쓰기는 태그에 style 속성으로 직접 적용

2) classname
    - 특정 요소에 지정된 클래스의 이름을 읽거나 쓸 수 있다.
    - element.className = 클래스명 
    - element.className += 클래스명

3) classList
    - 특정 요소에 지정된 클래스의 이름을 집합 형태로 출력
    - list.add()로 클래스 추가할 수 있음
    - list.remove()로 클래스 제거할 수 있음
    - list.toggle()로 클래스를 On/Off 할 수 있음

*/
let temp = document.getElementById("target");
console.log(temp.classList);

document.getElementById("btn").addEventListener('click', function () {
    let h2tag = document.getElementById("one");
    console.log(`글자색: ${h2tag.style.color}`);
    console.log(`글자크기: ${h2tag.style.fontSize}`);

    // 스타일이 지정되지 않으면 공백인 문자열로 설정되어 있음
    // 태그에 직접 설정한 것들만 .style로 접근할 수 있음
    console.log(typeof h2tag.style.color);

    let ptag = document.getElementById("target");

    console.log(h2tag.className);
    console.log(ptag.className);

    // class속성 이름 변경
    ptag.className = "test3";

    // class속성 추가
    // ptag.className += " test3";
});

document.getElementById("darkbtn").addEventListener('click', function () {
    let background = document.getElementsByTagName("body")[0];
    let ptag = document.getElementById("target");

    background.className = "todark";
    ptag.className = "todark";
});