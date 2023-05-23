let inputbox = document.querySelectorAll("input[type=text]");

for (let i of inputbox) {
    i.addEventListener('keyup', function () {
        let temp = i.value;
        if (temp < 0 || temp > 100 || (temp != parseFloat(temp) && temp != "")) {
            alert("숫자를 제대로 입력해주세요");
            i.focus();
            i.select();
        }
    })}

let button = document.querySelectorAll("input[type=button]")[0];
button.addEventListener('click', function () {
    let totalScore = 0;
    for (let i = 0; i < 4; ++i) {
        let tempScore = inputbox[i].value * 0.1;
        totalScore += tempScore;
    };

    for (let i = 4; i < inputbox.length; ++i) {
        let tempScore = inputbox[i].value * 0.2;
        totalScore += tempScore;
    };

    let result = document.getElementById("avg")
    result.innerHTML = totalScore;
    result.className = "result";
    
});
