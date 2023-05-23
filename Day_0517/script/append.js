window.onload = function () {

    document.getElementById("reg").addEventListener("click", function () {
        let name = document.getElementById("username");
        let age = document.getElementById("age");

        if (name.value.length == 0 || age.value.length == 0) {
            alert("데이터를 입력해주세요");
            // 프로그램이 밑으로 내려가는 것을 막아줌
            return;
        }
        
        if (isNaN(age.value)) {
            alert("나이를 숫자로 입력해주세요")
            // age 영역으로 커서 이동
            age.focus();
            // 입력값 block처리
            age.select();
            return;
        }

        let data = `이름: ${name.value} 나이: ${age.value}<br>`;

        let target = document.getElementById('target');

        // 문제: append 함수는 태그를 인식하지 못함
        // target.append(data);

        /* 해결: insert 함수
          'beforebegin': element 앞에
          'afterbegin' : element 안에 가장 첫번째 child
          'beforeend'  : element 안에 가장 마지막 child
          'afterend'   : element 뒤에*/
        target.insertAdjacentHTML('beforeend', data)

        // 값 추가 후 input창 비우기
        document.getElementById("username").value = '';
        document.getElementById("age").value = '';


    });

};
