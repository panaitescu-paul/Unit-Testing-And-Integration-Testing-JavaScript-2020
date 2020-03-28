// Have to discuss about how we would implement this structure
// class Purchase {
//
//     constructor(totalPrice, isInternetConnection, phoneLines, selectedCellPhones) {
//         this.totalPrice = totalPrice;
//         this.isInternetConnection = isInternetConnection;
//         this.phoneLines = phoneLines;
//         this.selectedCellPhones = selectedCellPhones;
//     }
//     get totalPrice() {
//         return this._totalPrice;
//     }
//
//     set totalPrice(value) {
//         if (typeof value !== 'number') {
//             throw new Error('Total price must be a number.');
//         }
//
//         this._totalPrice = value;
//     }
//
// }
const internetConnectionPrice = 200;
const phoneLinePrice = 150;
const motorolaPrice = 800;
const iPhonePrice = 6000;
const samsungPrice = 1000;
const sonyPrice = 900;
const huaweiPrice = 900;
let totalPrice = 0;
let isInternetConnection = false;
let phoneLines = 0;
let selectedCellPhones = [];
let sel;
let text;

function getTotalPrice () {
    document.getElementById("price").innerHTML = `Total price: ${totalPrice} DKK`;
}

function val() {
    sel = document.getElementById("cmbCellPhones");
    text = sel.options[sel.selectedIndex].text;
}

document.getElementById("chkInternetConnection").addEventListener("click", () => {
    if (isInternetConnection) {
        isInternetConnection = false;
        totalPrice = totalPrice - internetConnectionPrice;
    } else {
        isInternetConnection = true;
        totalPrice = totalPrice + internetConnectionPrice;
    }
    console.log("isInternetConnection: ", isInternetConnection);
    console.log("totalPrice: ", totalPrice);
    getTotalPrice();
});

document.getElementById("txtPhoneLines").addEventListener('input',  (e) => {
    totalPrice = totalPrice - phoneLines * phoneLinePrice;
    // regex for digits between 0 and 8
    const numbers = /^[0-9]+$/;
    // if the input field is less than 0, is not a number or the length is higher than 1, then the input field is reset to 0
    if(e.target.value < 0 || !e.target.value.match(numbers)) {
        e.target.value = 0;
    } else if (e.target.value > 8 || e.target.value.toString().length > 1){
        e.target.value = 8;
    }
    console.log("Phone lines: ", e.target.value);
    phoneLines = e.target.value;

    totalPrice = totalPrice + phoneLines * phoneLinePrice;
    console.log("totalPrice: ", totalPrice);
    getTotalPrice();
});

document.getElementById("rightBtn").addEventListener("click", ()=> {
    console.log( sel.value );

    if(sel.value === "moto") {
        totalPrice = totalPrice + motorolaPrice;
    } else if(sel.value === "iphone") {
        totalPrice = totalPrice + iPhonePrice;
    } else if(sel.value === "samsung") {
        totalPrice = totalPrice + samsungPrice;
    } else if(sel.value === "sony") {
        totalPrice = totalPrice + sonyPrice;
    } else if(sel.value === "huawei") {
        totalPrice = totalPrice + huaweiPrice;
    }
    getTotalPrice();
    console.log("totalPrice: ", totalPrice);

    selectedCellPhones.push(text);
    console.log("selectedCellPhones: ",  selectedCellPhones );

    let select = document.getElementById('txtChosenCellPhones');

    for (let i=0; i < select.length; i++) { // clean the Option elements from HTML
        if (select.options[i].value)
            select.remove(i);
    }
    for (let i = 0; i < selectedCellPhones.length; i++){ // insert the Option elements in HTML
        let opt = document.createElement('option');
        opt.value = selectedCellPhones[i];
        opt.innerHTML = selectedCellPhones[i];
        select.appendChild(opt);
    }
});

document.getElementById("leftBtn").addEventListener("click", ()=> {
    console.log( sel.value );

    if(sel.value === "moto") {
        totalPrice = totalPrice - motorolaPrice;
    } else if(sel.value === "iphone") {
        totalPrice = totalPrice - iPhonePrice;
    } else if(sel.value === "samsung") {
        totalPrice = totalPrice - samsungPrice;
    } else if(sel.value === "sony") {
        totalPrice = totalPrice - sonyPrice;
    } else if(sel.value === "huawei") {
        totalPrice = totalPrice - huaweiPrice;
    }
    getTotalPrice();
    console.log("totalPrice: ", totalPrice);
});
