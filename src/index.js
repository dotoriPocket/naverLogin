import "../src/component/body/main.css";
import btnText from "./component/button/button";
import inputBox from "./component/input/input";
import logo from "./component/body/logo";
import check from "./component/input/check"; // " 와 " 를 혼용에서 사용중!!
import message from "./component/input/message";

function component() {
    const element = document.createElement("div");
    const main_box = document.createElement("div");

    element.setAttribute("class", "body");
    main_box.setAttribute("class", "main_box");

    element.appendChild(logo());
    main_box.appendChild(inputBox("ID"));
    main_box.appendChild(inputBox("PW"));
    main_box.appendChild(check());
    main_box.appendChild(message());
    main_box.appendChild(btnText("로그인"));
    element.appendChild(main_box); // main_box에 내부 컴포넌트 추가하는것 다 끝나고 element에 추가하면 좋을듯~ 코드를 읽을 때 위에서부터 읽으니 흐름에 맞춰서 작성하면 더 좋을 것 같음.
  
    return element;
  }
  
document.body.appendChild(component());