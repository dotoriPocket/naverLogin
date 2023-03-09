import "./logo.css";
import logo from "../../assets/naverlogo.png";

const head = document.createElement("div");
const logo_img = document.createElement("img");

head.setAttribute("class", "head");
logo_img.setAttribute("src", logo);
logo_img.setAttribute("class", "logo_img");

head.appendChild(logo_img);

export default head;