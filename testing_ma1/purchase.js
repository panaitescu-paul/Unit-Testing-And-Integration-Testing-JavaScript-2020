class Purchase {
    constructor(totalPrice, isInternetConnection, phoneLines, selectedCellPhones) {
        this.totalPrice = totalPrice;
        this.isInternetConnection = isInternetConnection;
        this.phoneLines = phoneLines;
        this.selectedCellPhones = selectedCellPhones;
    }

    internetConnection(isInternetConnectionChecked) {
        const internetConnectionPrice = 200;

        if (typeof isInternetConnectionChecked !== 'boolean') {
            throw new Error('isInternetConnectionChecked must be a boolean.');
        }
        this.isInternetConnection = isInternetConnectionChecked; // assign value to class attribute
        if (this.isInternetConnection)
            this.totalPrice += internetConnectionPrice;
        return this.totalPrice;
    }

    addPhoneLines() {
        const phoneLinePrice = 150;

        this.phoneLines++;
        this.totalPrice += phoneLinePrice;
        return this.totalPrice;
    }

    removePhoneLines() {
        const phoneLinePrice = 150;

        this.phoneLines--;
        this.totalPrice -= phoneLinePrice;
        return this.totalPrice;
    }

    selectCellPhone(modelName) {
        const cellPhoneNames = ["Motorola G99", "iPhone 99", 'Samsung Galaxy 99', "Sony Xperia 99", "Huawei 99"];
        const cellPhonePrices = [800, 6000, 1000, 900, 900];  // frequency array

        if (typeof modelName !== 'string') {
            throw new Error('modelName must be a string.');
        }
        this.selectedCellPhones.push(modelName);
        for (let i = 0; i < cellPhoneNames.length; i ++) {
            if (modelName === cellPhoneNames[i])
                this.totalPrice += cellPhonePrices[i];
        }
        return this.totalPrice;
    }

    unselectCellPhone(modelName) {
        const cellPhoneNames = ["Motorola G99", "iPhone 99", 'Samsung Galaxy 99', "Sony Xperia 99", "Huawei 99"];
        const cellPhonePrices = [800, 6000, 1000, 900, 900];  // frequency array

        if (typeof modelName !== 'string') {
            throw new Error('modelName must be a string.');
        }
        for (let i = 0; i < this.selectedCellPhones.length; i ++) {
            if (modelName === this.selectedCellPhones[i])
                this.selectedCellPhones.splice(i, 1); // delete an element from array at index i
        }
        for (let i = 0; i < cellPhoneNames.length; i ++) {
            if (modelName === cellPhoneNames[i])
                this.totalPrice -= cellPhonePrices[i];
        }
        return this.totalPrice;
    }

    showBuyingReceipt() {
        if (this.totalPrice !== 0)
            return  'Internet Connection: ' + this.isInternetConnection + '\n' +
                'Number of Phone Lines: ' + this.phoneLines + '\n' +
                'Cell Phones: ' + this.selectedCellPhones + '\n' +
                'Total Price: ' + this.totalPrice + '\n';
        return "Nothing is selected! Please select an item!";
    }

}

module.exports = Purchase;
