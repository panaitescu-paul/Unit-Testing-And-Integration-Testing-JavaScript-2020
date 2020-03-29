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
let nrOfSelectedCellPhones = [0, 0, 0, 0, 0];
let sel;
let text;
let selectedItems = [];

function getTotalPrice () {
    document.getElementById("price").innerHTML = `Total price: ${totalPrice} DKK`;
}

function val() {
    sel = document.getElementById("cmbCellPhones");
    //console.log(sel);
    text = sel.options[sel.selectedIndex].text;
    //console.log(text);
}

document.getElementById("chkInternetConnection").addEventListener("click", () => {
    if (isInternetConnection) {
        isInternetConnection = false;
        totalPrice = totalPrice - internetConnectionPrice;
        // searching through the selected items array and removing the internet connection
        for(let i = 0; i < selectedItems.length; i ++) {
            if (selectedItems[i] === document.getElementById("internetConnection").textContent) {
                selectedItems.splice(i, 1);
                break;
            }
        }
    } else {
        isInternetConnection = true;
        totalPrice = totalPrice + internetConnectionPrice;
        // adding the internet connection text from HMTL to the selected items array
        selectedItems.push(document.getElementById("internetConnection").textContent);
    }
    console.log("isInternetConnection: ", isInternetConnection);
    console.log("totalPrice: ", totalPrice);
    getTotalPrice();
});

document.getElementById("txtPhoneLines").addEventListener("input",  (e) => {
    // reset the number of phone lines in the selected items array
    for(let i = 0; i < selectedItems.length; i ++ ) {
        if(selectedItems[i].indexOf("Phone line") !== -1) {
            selectedItems.splice(i, 1);
        }
    }
    // reset the total price to 0
    totalPrice = totalPrice - phoneLines * phoneLinePrice;
    // regex for digits between 0 and 8
    const numbers = /^[0-9]+$/;
    // TODO add a second comment to include the else if case (higher than 8 and input field reset to 8)
    // if the input field is less than 0, is not a number or the length is higher than 1, then the input field is reset to 0
    if(e.target.value < 0 || !e.target.value.match(numbers)) {
        e.target.value = 0;
    } else if (e.target.value > 8 || e.target.value.toString().length > 1){
        e.target.value = 8;
    }
    console.log("Phone lines: ", e.target.value);
    phoneLines = e.target.value;
    // calculate the new total price
    totalPrice = totalPrice + phoneLines * phoneLinePrice;
    console.log("totalPrice: ", totalPrice);
    if(phoneLines != 0) {
        if(phoneLines == 1) {
            let str = (phoneLines + ' ' + document.getElementById("phoneLines").textContent);
            selectedItems.push(str.slice(0, -1));
        } else {
            selectedItems.push(phoneLines + ' ' + document.getElementById("phoneLines").textContent);
        }
    } else {
        for(let i = 0; i < selectedItems.length; i ++ ) {
            if(selectedItems[i].indexOf("Phone line") !== -1) {
                selectedItems.splice(i, 1);
            }
        }
    }
    getTotalPrice();
});

document.getElementById("rightBtn").addEventListener("click", ()=> {
    console.log(sel.value);
    if(sel.value === "moto") {
        totalPrice = totalPrice + motorolaPrice;
        // TODO
        // increase nr of appearances
        nrOfSelectedCellPhones[0]++;
        // search through selected items. if entry not found, push it. if found, increase nr of appearances and modify the text in selected items array
        for(let i = 0; i < selectedItems.length; i ++) {
            if(selectedItems[i].indexOf("Motorola") == -1) {
                selectedItems.push(nrOfSelectedCellPhones[0] + ' x ' + text);
                console.log(nrOfSelectedCellPhones);
            } else {
                selectedItems[i] = nrOfSelectedCellPhones[0] + ' x ' + text;
                console.log(nrOfSelectedCellPhones);
                break;
            }
        }
    } else if(sel.value === "iphone") {
        totalPrice = totalPrice + iPhonePrice;
        nrOfSelectedCellPhones[1]++;
    } else if(sel.value === "samsung") {
        totalPrice = totalPrice + samsungPrice;
        nrOfSelectedCellPhones[2]++;
    } else if(sel.value === "sony") {
        totalPrice = totalPrice + sonyPrice;
        nrOfSelectedCellPhones[3]++;
    } else if(sel.value === "huawei") {
        totalPrice = totalPrice + huaweiPrice;
        nrOfSelectedCellPhones[4]++;
    }
    getTotalPrice();
    console.log("totalPrice: ", totalPrice);

    selectedCellPhones.push(text);
    console.log("selectedCellPhones: ",  selectedCellPhones );

    // let select = document.getElementById('txtChosenCellPhones');
    //
    // for (let i=0; i < select.length; i++) { // clean the Option elements from HTML
    //     if (select.options[i].value)
    //         select.remove(i);
    // }
    // for (let i = 0; i < selectedCellPhones.length; i++){ // insert the Option elements in HTML
    //     let opt = document.createElement('option');
    //     opt.value = selectedCellPhones[i];
    //     opt.innerHTML = selectedCellPhones[i];
    //     select.appendChild(opt);
    //
});

document.getElementById("leftBtn").addEventListener("click", ()=> {
    console.log(sel.value);
    if(totalPrice > 0) {
        if (sel.value === "moto") {
            totalPrice = totalPrice - motorolaPrice;
        } else if (sel.value === "iphone") {
            totalPrice = totalPrice - iPhonePrice;
        } else if (sel.value === "samsung") {
            totalPrice = totalPrice - samsungPrice;
        } else if (sel.value === "sony") {
            totalPrice = totalPrice - sonyPrice;
        } else if (sel.value === "huawei") {
            totalPrice = totalPrice - huaweiPrice;
        }
    }
    //TODO Buy button functionality
    getTotalPrice();
    console.log("totalPrice: ", totalPrice);
});

document.getElementById("buyBtn").addEventListener("click",  () => {
    if(selectedItems.length === 0) {
        alert("Nothing is selected! Please select something");
    } else {
        alert("You have selected: " + selectedItems);
    }
});
