import "./button.css";

function btnText(text) {
    let btn = document.createElement("button");
    
    btn.setAttribute("class", "btn");
    btn.innerText = text;
    
    return btn;
}

export default btnText;