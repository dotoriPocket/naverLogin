import id_img from "../../assets/shape_id.png"
import pw_img from "../../assets/shape_pw.png"
import "./input.css";

function inputBox(type) {
    const input_box = document.createElement("div");
    const input = document.createElement("input");
    const idImg = document.createElement("img");
    const pwImg = document.createElement("img");

    idImg.setAttribute("src", id_img);
    idImg.setAttribute("class", "img1");

    pwImg.setAttribute("src", pw_img);
    pwImg.setAttribute("class", "img2");
    
    input_box.setAttribute("class", "input_box");

    input.setAttribute("class", "input");
    input.setAttribute("value", "");
    
    
    if(type === "ID") {
        input_box.classList.add("input_margin");
        input.setAttribute("id", "id_input");
        input_box.appendChild(idImg);
        input_box.appendChild(input);
        input.placeholder = "아이디";
    }
    else if(type === "PW") {
        input.setAttribute("type", "password");
        input.setAttribute("id", "pw_input");
        input_box.appendChild(pwImg);
        input_box.appendChild(input);
        input.placeholder = "비밀번호";
    }

    input.addEventListener("focus", () => {
        input_box.classList.add("box_focus");
    })


    input.addEventListener("blur", () => {
        input_box.classList.remove("box_focus");
    })

    return input_box;
} 

export default inputBox;