import "./message.css";

function message() {
    const alertMessage = document.createElement("p"); // let 대신 const!

    alertMessage.setAttribute("class", "alert_message");    

    return alertMessage;
}



export default message;