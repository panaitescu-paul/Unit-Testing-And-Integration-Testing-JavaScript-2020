// cd testing_ma1/
// npm i
// --
// First run npm install
// Run tests: npm test
let mocha = require('mocha');
let chai = require('chai');
let describe = mocha.describe;
let expect = chai.expect;
let assert = require('chai').assert;

chai.should();

let Purchase = require("../testing_ma1/purchase");

describe('Purchase', () => {
    describe('Including/Excluding the internet connection', () => {
        let purchase;

        beforeEach(() => {
            purchase = new Purchase(0, false, 0, []);
        });


        describe('Check if the internet connection is included', () => {
            it('should be equal with true', () => {
                purchase.internetConnection(true);
                purchase.isInternetConnection.should.equal(true);
            });
            it('should total price be 200', () => {
                purchase.internetConnection(true);
                purchase.totalPrice.should.equal(200);

            });

        });
        // it('should be a number', () => {
        //     assert.isNumber(rectangle.width)
        // });

    });

});
