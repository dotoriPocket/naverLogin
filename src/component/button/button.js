import "./button.css";

function btnText(text) {
    let btn = document.createElement("button");
    
    btn.setAttribute("class", "btn");
    btn.innerText = text;
  
    btn.addEventListener("click", () => {
        
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

        
    })

    return btn;
}

export default btnText;