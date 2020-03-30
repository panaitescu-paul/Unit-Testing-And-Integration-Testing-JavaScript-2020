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
let receiptNames = ["Internet connection", "Phone lines", "Motorola G99", "iPhone 99", 'Samsung Galaxy 99', "Sony Xperia 99", "Huawei 99"];
let receiptQuantity = [0, 0, 0, 0, 0, 0, 0];  // frequency array
let sel;
let selectedLeftItemName;
let selectedRightItemName;
let indexChosenCellPhones;
let selectedItems = [];
let opt;

function getTotalPrice () {
    document.getElementById("price").innerHTML = `Total price: ${totalPrice} DKK`;
}

function getSelectedLeftItem() { // get the name of the selected option from the Left side, return 0 if no option is selected
    sel = document.getElementById("cmbCellPhones");
    console.log("sel", sel);
    if (sel.options[sel.selectedIndex]) { //if an option is selected
        selectedLeftItemName = sel.options[sel.selectedIndex].text;
        console.log("selectedLeftItemName", selectedLeftItemName);
        return 1;
    } else {
        return 0;
    }
}

function getSelectedRightItem() { // get the name of the selected option from the Right side, return 0 if no option is selected
    sel = document.getElementById("txtChosenCellPhones");
    console.log("sel", sel);
    if (sel.options[sel.selectedIndex]) { //if an option is selected
        selectedRightItemName = sel.options[sel.selectedIndex].text;
        indexChosenCellPhones = sel.selectedIndex;
        console.log("selectedRightItemName", selectedRightItemName);
        console.log("indexChosenCellPhones", indexChosenCellPhones);
        return 1;
    } else {
        return 0;
    }
}

function alertMessage() {
    let message = '';
    for (let i = 0; i < receiptQuantity.length; i++){
        if (receiptQuantity[i] > 0) {
            message = message + ' \u2022 ' + receiptQuantity[i] + 'x ' + receiptNames[i] + '\n';
        }
    }
    message = message + 'Total price: ' + totalPrice + '\n';

    if (totalPrice !== 0) {
        return 'You have selected: \n' + message;
    } else {
        return "Nothing is selected! Please select something";
    }
}

document.getElementById("chkInternetConnection").addEventListener("click", () => {
    if (isInternetConnection) {
        isInternetConnection = false;
        totalPrice = totalPrice - internetConnectionPrice;
        receiptQuantity[0] = 0; // isInternetConnection is set to 0 for the receipt
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
        receiptQuantity[0] = 1; // isInternetConnection is set to 1 for the receipt
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
            break;
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
    receiptQuantity[1] = phoneLines; // set the phoneLines quantity for the receipt
    // calculate the new total price
    totalPrice = totalPrice + phoneLines * phoneLinePrice;
    console.log("totalPrice: ", totalPrice);
    if(parseInt(phoneLines) !== 0) {
        if(parseInt(phoneLines) === 1) {
            let str = (phoneLines + ' ' + document.getElementById("phoneLines").textContent);
            // delete the last character of the new str ('s' in this case)
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
    console.log(" ------------ rightBtn ------------");
    if (getSelectedLeftItem() === 0) { // if no element is selected
        return 0;
    } else {
        console.log("selectedCellPhones-: ",  selectedCellPhones );
        if (selectedLeftItemName !== undefined) {
            selectedCellPhones.push(selectedLeftItemName);
            console.log("selectedCellPhones+: ",  selectedCellPhones );
        }

        let select = document.getElementById('txtChosenCellPhones');
        console.log("select.length: ",  select.length );

        select.textContent = ''; // Delete the content of the Select element from HTML (all the "Option" children)
        console.log("selectedCellPhones.length: ",  selectedCellPhones.length );

        for (let i = 0; i < selectedCellPhones.length; i++) { // insert every element of the Array as an Option tag in HTML
            opt = document.createElement('option');
            opt.value = selectedCellPhones[i];
            opt.innerHTML = selectedCellPhones[i];
            select.appendChild(opt);
        }
    }

    if(selectedLeftItemName === "Motorola G99") {
        totalPrice = totalPrice + motorolaPrice;
        receiptQuantity[2]++;
    } else if(selectedLeftItemName === "iPhone 99") {
        totalPrice = totalPrice + iPhonePrice;
        receiptQuantity[3]++;
    } else if(selectedLeftItemName === "Samsung Galaxy 99") {
        totalPrice = totalPrice + samsungPrice;
        receiptQuantity[4]++;
    } else if(selectedLeftItemName === "Sony Xperia 99") {
        totalPrice = totalPrice + sonyPrice;
        receiptQuantity[5]++;
    } else if(selectedLeftItemName === "Huawei 99") {
        totalPrice = totalPrice + huaweiPrice;
        receiptQuantity[6]++;
    }
    getTotalPrice();
    console.log("totalPrice: ", totalPrice);


});

document.getElementById("leftBtn").addEventListener("click", ()=> {
    console.log(" ------------ leftBtn ------------");
    if (getSelectedRightItem() === 0) { // if no element is selected
        return 0;
    } else {
        console.log("selectedCellPhones: ",  selectedCellPhones );
        console.log("indexChosenCellPhones: ",  indexChosenCellPhones );
        if (indexChosenCellPhones > -1) {
            selectedCellPhones.splice(indexChosenCellPhones, 1); // delete the selected element
            //TODO: auto select the upper or lower element
            // if (indexChosenCellPhones === selectedCellPhones.length - 1) { // Case 1: auto select the upper element
            //     selectedCellPhones[indexChosenCellPhones-1].selected = true; // select the upper element
            // } else if (indexChosenCellPhones === 0) { // Case 2: auto select the lower element
            //     selectedCellPhones[indexChosenCellPhones+1].selected = true; // select the lower element
            // }


        }
        console.log("selectedCellPhones-: ",  selectedCellPhones );
        console.log("indexChosenCellPhones: ",  indexChosenCellPhones );

        let select = document.getElementById('txtChosenCellPhones');

        select.textContent = ''; // Delete the content of the Select element from HTML (all the "Option" children)
        for (let i = 0; i < selectedCellPhones.length; i++){ // insert the Option elements in HTML
            opt = document.createElement('option');
            opt.value = selectedCellPhones[i];
            opt.innerHTML = selectedCellPhones[i];
            select.appendChild(opt);
        }

    }

    console.log("sel.value: ", sel.value);
    if(totalPrice > 0) {
        if (selectedRightItemName === "Motorola G99") {
            totalPrice = totalPrice - motorolaPrice;
            receiptQuantity[2]--;
        } else if (selectedRightItemName === "iPhone 99") {
            totalPrice = totalPrice - iPhonePrice;
            receiptQuantity[3]--;
        } else if (selectedRightItemName === "Samsung Galaxy 99") {
            totalPrice = totalPrice - samsungPrice;
            receiptQuantity[4]--;
        } else if (selectedRightItemName === "Sony Xperia 99") {
            totalPrice = totalPrice - sonyPrice;
            receiptQuantity[5]--;
        } else if (selectedRightItemName === "Huawei 99") {
            totalPrice = totalPrice - huaweiPrice;
            receiptQuantity[6]--;
        }
    }

    //TODO Buy button functionality
    getTotalPrice();
    console.log("totalPrice: ", totalPrice);
});

document.getElementById("buyBtn").addEventListener("click",  () => {
    alert(alertMessage());
});
