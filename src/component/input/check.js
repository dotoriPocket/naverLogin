import "./check.css";

function check() {
    const check_box = document.createElement("div");
    const check_btn = document.createElement("input");
    const check_txt = document.createElement("p");

    check_box.setAttribute("class", "check_box");

    check_btn.setAttribute("type", "checkbox");
    check_btn.setAttribute("class", "check_btn");

    const check_mark = document.createElement("span");
   
    check_mark.setAttribute("class", "check_mark check_mark_none");

    check_txt.setAttribute("class", "check_txt");
    check_txt.innerText = "로그인 상태 유지";

    check_btn.addEventListener("click", () => {
        check_mark.classList.toggle("check_mark_none");
    })

    check_box.appendChild(check_mark);
    check_box.appendChild(check_btn);
    check_box.appendChild(check_txt);
    
    return check_box;
}

export default check;