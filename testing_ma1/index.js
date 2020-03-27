// File to write the backend code for the html page

let isInternetConnection = false;
let totalPrice;
const internetConnectionPrice = 200;
const phoneLinePrice = 150;
const motorolaPrice = 800;
const iPhonePrice = 6000;
const samsungPrice = 1000;
const sonyPrice = 900;
const huaweiPrice = 900;


document.getElementById("chkInternetConnection").addEventListener("click", ()=> {
    if (isInternetConnection)
        isInternetConnection = false;
    else
        isInternetConnection = true;
    console.log("isInternetConnection: ", isInternetConnection);
});
