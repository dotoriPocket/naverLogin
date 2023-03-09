import "../src/component/body/main.css";
import btnText from './component/button/button';
import inputBox from './component/input/input';
import head from './component/body/logo';
import main_box from './component/body/main';
import check_box from "./component/input/check";
import alertMessage from "./component/input/message";

function component() {
    const element = document.createElement('div');

    element.setAttribute("class", "body");

    element.appendChild(head);
    element.appendChild(main_box);
    main_box.appendChild(inputBox("ID"));
    main_box.appendChild(inputBox("PW"));
    main_box.appendChild(check_box);
    main_box.appendChild(alertMessage);
    main_box.appendChild(btnText("로그인"));
  
    return element;
  }
  
document.body.appendChild(component());