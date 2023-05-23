let text = document.getElementsByTagName("textarea")[0];
let resultTitle = document.getElementsByTagName("h2")[0];

text.addEventListener('keyup', function () {
    let temp = text.value;
    let result = document.getElementById("result");
    result.innerText = temp.length;
})

function check_length(area) {
    let text = area.value;
    let text_length = text.length;

    let max_length = 1000;

    if (text_length > max_length) {
        alert(max_length + "자 이상 작성할 수 없습니다.");
        text = text.substr(0, max_length);
        area.value = text;
        area.focus();
    }

    if (text_length >= 30) {
        // resultTitle.innerHTML = '<span style="color:red">글자 수 결과</span>';
        resultTitle.style.color = "red";
        resultTitle.style.backgroundColor = "blue";
    } else {
    // resultTitle.innerHTML = '<span style="color:black">글자 수 결과</span>';
        resultTitle.style.color = "black";
        resultTitle.style.backgroundColor = null;
}
}
