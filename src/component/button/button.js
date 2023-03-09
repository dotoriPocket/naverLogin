import "./button.css";

function btnText(text) {
    let btn = document.createElement("button");
    
    btn.setAttribute("class", "btn");
    btn.innerText = text;
  
    // 이벤트 핸들러가 길어지면 따로 함수로 만들어서 넣어주세요~ handleButtonClick 같은 함수로 빼면 더 가독성 있을듯~!
    // 보통 탭이 3칸씩 들어가면 뭔가 이상한데? 라고 생각하면 좋음
    function handleButtonClick() {
        let idValue = document.getElementById("id_input").value;
        let pwValue = document.getElementById("pw_input").value;
        
        let failMessage = document.getElementsByClassName("alert_message")[0];
        let mainBox = document.getElementsByClassName("main_box")[0];

        if(idValue === "dotori" && pwValue === "1111") {
            mainBox.classList.toggle("class", "main_Box");
            mainBox.innerText = "로그인 성공";
        }
        else {
            failMessage.innerText = "아이디 또는 비밀번호를 확인하세요";
        }
    }

    btn.addEventListener("click", handleButtonClick);

    return btn;
}

export default btnText;