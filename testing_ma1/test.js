// Order of execution:
// cd testing_ma1
// npm i
// npm test
let mocha = require('mocha');
let chai = require('chai');
let describe = mocha.describe;
let expect = chai.expect;
let assert = require('chai').assert;

chai.should();

let Purchase = require("../testing_ma1/purchase");

describe('Purchase', () => {
    describe('Internet connection functionality', () => {
        let purchase;

        beforeEach(() => {
            purchase = new Purchase(0, false, 0, []);
        });

        describe('Check the internet connection data type', () => {
            it('should be a boolean', () => {
                purchase.internetConnection(true);
                assert.isBoolean(purchase.isInternetConnection);
            });
            it('should only accept boolean values', () => {
                expect(() => purchase.internetConnection('true')).to.throw('isInternetConnectionChecked must be a boolean.');
            });
            it('should only accept boolean values', () => {
                expect(() => purchase.internetConnection(1)).to.throw('isInternetConnectionChecked must be a boolean.');
            });
        });

        describe('Check if the internet connection is included', () => {
            it('should be equal with true', () => {
                purchase.internetConnection(true);
                purchase.isInternetConnection.should.equal(true);
            });
            it('should not be equal with false', () => {
                purchase.internetConnection(true);
                purchase.isInternetConnection.should.not.equal(false);
            });
            it('should total price be equal with 200', () => {
                purchase.internetConnection(true);
                purchase.totalPrice.should.equal(200);
            });
            it('should total price not be equal with 0', () => {
                purchase.internetConnection(true);
                purchase.totalPrice.should.not.equal(0);
            });
            it('should return 200', () => {
                purchase.internetConnection(true).should.equal(200);
            });
            it('should not return 0', () => {
                purchase.internetConnection(true).should.not.equal(0);
            });
        });

        describe('Check if the internet connection is excluded', () => {
            it('should be equal with false', () => {
                purchase.internetConnection(false);
                purchase.isInternetConnection.should.equal(false);
            });
            it('should not be equal with true', () => {
                purchase.internetConnection(false);
                purchase.isInternetConnection.should.not.equal(true);
            });
            it('should total price be equal with 0', () => {
                purchase.internetConnection(false);
                purchase.totalPrice.should.equal(0);
            });
            it('should total price not be equal with 200', () => {
                purchase.internetConnection(false);
                purchase.totalPrice.should.not.equal(200);
            });
            it('should return 0', () => {
                purchase.internetConnection(false).should.equal(0);
            });
            it('should not return 200', () => {
                purchase.internetConnection(false).should.not.equal(200);
            });
        });
    });
    describe('Buying functionality', () => {
        let purchase;

        beforeEach(() => {
            purchase = new Purchase(0, false, 0, []);
        });

        describe('Check if there is nothing selected', () => {
            it('should be equal with "Nothing is selected! Please select an item!"', () => {
                purchase.showBuyingReceipt().should.equal("Nothing is selected! Please select an item!");
            });
        });

        describe('Check if there is something selected', () => {
            it('should be equal with true internet connection and 200 DKK total price', () => {
                purchase.internetConnection(true);
                purchase.showBuyingReceipt().should.equal('Internet Connection: ' + true + '\n' +
                    'Total Price: ' + 200 + ' DKK'
                );
            });
            it('should be equal with one phone lines and 150 DKK total price', () => {
                purchase.addPhoneLines();
                purchase.showBuyingReceipt().should.equal('Number of Phone Lines: ' + 1 + '\n' +
                    'Total Price: ' + 150 + ' DKK'
                );
            });
            it('should be equal with one iPhone 99 cell phone and 6000 DKK total price', () => {
                purchase.selectCellPhone('iPhone 99');
                purchase.showBuyingReceipt().should.equal('Cell Phones: ' + 'iPhone 99' + '\n' +
                    'Total Price: ' + 6000 + ' DKK'
                );
            });
            it('should be equal with true internet connection, one phone lines, one iPhone 99 cell phone and 6350 DKK total price', () => {
                purchase.internetConnection(true);
                purchase.addPhoneLines();
                purchase.selectCellPhone('iPhone 99');
                purchase.showBuyingReceipt().should.equal('Internet Connection: ' + true + '\n' +
                    'Number of Phone Lines: ' + 1 + '\n' +
                    'Cell Phones: ' + 'iPhone 99' + '\n' +
                    'Total Price: ' + 6350 + ' DKK'
                );
            });
        });
    });
});
