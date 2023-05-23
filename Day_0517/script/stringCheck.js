/*
    1) 아이디는 공백을 포함하지 않은 생태로 3~5자여야 함
    2) 비밀번호는 공백을 포함하지 않은 상태로 3~5자여야 함
    3) 비밀번호 확인은 공백을 포함하지 않은 상태로 3~5자여야 하고,
        위 2)번의 값과 동일해야 한다.
    4) 모든 조건을 만족하면 결과를 경고창에 갈무리하여 출력
*/

// 첫 번째 코드
document.getElementById("btn").addEventListener("click", click_first);

function click_first() {
    let id = document.getElementById("userid");
    let idcheck = document.getElementById("idcheck");

    let pwd = document.getElementById("userpwd");
    let pwd1 = document.getElementById("pwd1");

    let pwdcheck = document.getElementById("pwdcheck");
    let pwd2 = document.getElementById("pwd2");

    let id_ = id.value;
    let pwd_ = pwd.value;
    let check_ = pwdcheck.value;

    if (id_.length > 5 || id_.length < 3 || id_.includes(" ")) {
        idcheck.innerHTML = '아이디를 제대로 입력하세요';
        id.focus();
        id.select();
        return;

    } else {
        idcheck.innerHTML = '';
    }

    if (pwd_.length > 5 || pwd_.length < 3 || pwd_.includes(" ")) {
        pwd1.innerHTML = '비밀번호를 제대로 입력하세요';
        pwd.focus();
        pwd.select();
        return;

    } else {
        pwd1.innerHTML = '';
    }

    if (check_.length > 5 || check_.length < 3
        || check_.includes(" ") || pwd_ != check_) {
        pwd2.innerHTML = '비밀번호를 제대로 입력하세요';
        pwdcheck.focus();
        pwdcheck.select();
        return;
    }

    if ()

    alert(`아이디: ${id_}\n비밀번호: ${pwd_}\n비밀번호 확인: ${check_}`);

    document.getElementById("userid").value = "";
    document.getElementById("userpwd").value = "";
    document.getElementById("pwdcheck").value = "";

    
}

// 두 번째 코드
// let btn = document.getElementById("btn");

// let userid = document.getElementById("userid");
// // keyup: 키보드를 눌렀다 떼면 이벤트 발생
// userid.addEventListener('keyup', function () {
//     let data = this.value;
    // let idcheck = document.getElementById("idcheck");

    // if (data.includes(' ')) {
    //     idcheck.innerHTML = '공백 없이 입력하세요';
    //     return;
    // }

    // if (data.length < 3 || data.length > 5) {
    //     idcheck.innerHTML = '글자 단디 입력해라';
    //     return;
    // }
    
    // idcheck.innerHTML = '';

// });

// let userpwd = document.getElementById("userpwd");
// // keyup: 키보드를 눌렀다 떼면 이벤트 발생
// userpwd.addEventListener('keyup', function () {
    // let data = this.value;
    // let pwd1 = document.getElementById("pwd1");

    // if (data.includes(' ')) {
    //     pwd1.innerHTML = '공백 없이 입력하세요';
    //     return;
    // }

    // if (data.length < 3 || data.length > 5) {
    //     pwd1.innerHTML = '글자 단디 입력해라';
    //     return;
    // }
    // pwd1.innerHTML = '';

// });

// let pwdcheck = document.getElementById("pwdcheck");
// // keyup: 키보드를 눌렀다 떼면 이벤트 발생
// pwdcheck.addEventListener('keyup', function () {
//     let data = this.value;
//     let pwd2 = document.getElementById("pwd2");

//     if (data.includes(' ')) {
//         pwd2.innerHTML = '공백 없이 입력하세요';
//         return;
//     }

//     if (data.length < 3 || data.length > 5) {
//         pwd2.innerHTML = '글자 단디 입력해라';
//         return;
//     }
//     pwd2.innerHTML = '';


