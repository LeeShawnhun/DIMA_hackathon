window.addEventListener('load', function () {
    // 창을 제어해주기 위해 변수로 설정
    let popup = this.window.open('popup.html', 'newWin', 'width=500, height=600, left=30, top=50');

    popup.focus();

});

document.getElementById("move").addEventListener('click', function () {
    // location.href을 통해 이동하면 기존의 창에서 넘어가짐
    // assign(), replace(), .href: 방식 유사함
    // 단, replace는 되돌아가지 못함
    location.href = "http://www.google.com";
});