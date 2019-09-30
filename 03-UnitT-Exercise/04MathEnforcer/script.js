let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcerObject', () => {
    it('Add five with positive number, shoukd return num + 5', () => {
        let expected = mathEnforcer.addFive(10);
        expect(expected).to.equal(15, 'return result with positive number');
    });
    it('Add five with negative number, shoukd return num + 5', () => {
        let expected = mathEnforcer.addFive(-10);
        expect(expected).to.equal(-5, 'return result with negative number');
    });
    it('Add five with floating point number, shoukd return num + 5', () => {
        let expected = mathEnforcer.addFive(1.5);
        expect(expected).to.be.closeTo(6.5, 0.01, 'return result with floating point number');
    });
    it('Add five with string, shoukd return indefined', () => {
        let expected = mathEnforcer.addFive('1.5');
        expect(expected).to.equal(undefined, 'return result with string number');
    });

    it('subtractTen with positive number, shoukd return num - 10', () => {
        let expected = mathEnforcer.subtractTen(11);
        expect(expected).to.equal(1, 'return result with positive number');
    });
    it('subtractTen with negative number, shoukd return num - 10', () => {
        let expected = mathEnforcer.subtractTen(-10);
        expect(expected).to.equal(-20, 'return result with negative number');
    });
    it('subtractTen with floating point number, shoukd return num - 10', () => {
        let expected = mathEnforcer.subtractTen(10.8);
        expect(expected).to.be.closeTo(0.8, 0.01, 'return result with floating point number');
    });
    it('subtractTen with string, shoukd return indefined', () => {
        let expected = mathEnforcer.subtractTen('1.5');
        expect(expected).to.equal(undefined, 'return result with string');
    });

    it('Sum with two positive numbers, should return their sum', () => {
        let expected = mathEnforcer.sum(5, 5);
        expect(expected).to.equal(10, 'return result with two positive numbers');
    });
    it('Sum with two negative numbers, should return their sum', () => {
        let expected = mathEnforcer.sum(-5, -5);
        expect(expected).to.equal(-10, 'return result with two negative numbers');
    });
    it('Sum with two floating point numbers, should return their sum', () => {
        let expected = mathEnforcer.sum(-5.5, -5.5);
        expect(expected).to.be.closeTo(-11, 0.01, 'return result with two floating point numbers');
    });
    it('Sum with num and string, should return undefined', () => {
        let expected = mathEnforcer.sum(-5.5, '-5.5');
        expect(expected).to.equal(undefined, 'return undefined with num and string');
    });
    it('Sum with string and num, should return undefined', () => {
        let expected = mathEnforcer.sum('-5.5', -5.5);
        expect(expected).to.equal(undefined, 'return undefined with string and num');
    });
});