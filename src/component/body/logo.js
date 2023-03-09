import "./logo.css";
import naverLogo from "../../assets/naver_logo.png";

function logo() {
    const head = document.createElement("div");
    const logo_img = document.createElement("img");

    head.setAttribute("class", "head");
    logo_img.setAttribute("src", naverLogo);
    logo_img.setAttribute("class", "logo_img"); // 변수는 logoImg 같이 해주면 더 좋을 것 같음. class명은 _ 로 구분하는게 좋음.
    // class 명도 조금 더 명확하게 해주면 좋을 것 같음. logo_img 대신 logo_img_size 같이?

    head.appendChild(logo_img);

    // 이렇게 export하면 컴포넌트를 여러개 붙일 때 문제가 됨. ( 모든 컴포넌트가 동일한 엘리먼트를 가지고 있기 때문에 하나만 변경되어도 모든 컴포넌트가 변경됨 )
    // 컴포넌트를 여러개 붙여도 문제가 되지 않으려면 함수로 호출하게 해 줘야함.

    return head;
}

export default logo;