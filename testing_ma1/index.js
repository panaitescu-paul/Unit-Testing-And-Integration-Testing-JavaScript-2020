// File to write the backend code for the html page

let isInternetConnection = false;
let totalPrice = 0;
const internetConnectionPrice = 200;
const phoneLinePrice = 150;
const motorolaPrice = 800;
const iPhonePrice = 6000;
const samsungPrice = 1000;
const sonyPrice = 900;
const huaweiPrice = 900;
let selectedCellPhones = [];
let sel;
let text;

document.getElementById("chkInternetConnection").addEventListener("click", ()=> {
    if (isInternetConnection) {
        isInternetConnection = false;
        totalPrice = totalPrice - internetConnectionPrice;
    } else {
        isInternetConnection = true;
        totalPrice = totalPrice + internetConnectionPrice;
    }
    console.log("isInternetConnection: ", isInternetConnection);
    console.log("totalPrice: ", totalPrice);
    // document.getElementById("price").innerHTML = `Total price: ${totalPrice} DKK`;
});

document.getElementById("txtPhoneLines").addEventListener('input',  (e)=> {
    let phoneLines = e.target.value;
    console.log("Phone lines: ", phoneLines);

    //TODO: eliminate invalid values...
    // if (phoneLines < 0){
    //     phoneLines = 0;
    // } else if (phoneLines > 8){
    //     phoneLines = 8;
    // }
    console.log("Phone lines: ", phoneLines);
    // totalPrice = totalPrice + phoneLines * phoneLinePrice;
    calculatePrice();
    // document.getElementById("price").innerHTML = `Total price: ${totalPrice} DKK`;
});

//TODO:
function calculatePrice() {
    totalPrice = totalPrice + internetConnectionPrice + phoneLines * phoneLinePrice;
}



document.getElementById("rightBtn").addEventListener("click", ()=> {
    document.getElementById("cmbCellPhones")

    console.log( sel.value );
    selectedCellPhones.push(text);
    console.log("selectedCellPhones: ",  selectedCellPhones );

    let select = document.getElementById('txtChosenCellPhones');

    for (var i=0; i<select.length; i++) { // clean the Option elements from HTML
        if (select.options[i].value)
            select.remove(i);
    }
    for (let i = 0; i<selectedCellPhones.length; i++){ // insert the Option elements in HTML
        let opt = document.createElement('option');
        opt.value = selectedCellPhones[i];
        opt.innerHTML = selectedCellPhones[i];
        select.appendChild(opt);
    }


});
//
// document.getElementById("leftBtn").addEventListener("click", ()=> {
//
// });

function val() {
    sel = document.getElementById("cmbCellPhones");
    text = sel.options[sel.selectedIndex].text;
    // console.log("text: ",  text );

}











