const expect = require("chai").expect;

function isOddOrEven(string) { 
    if (typeof(string) !== 'string') { 
        return undefined; 
    } 
    if (string.length % 2 === 0) { 
        return "even"; 
    } 
 
    return "odd"; 
}

describe('string.length isOddOrEven', function(){
    //type is not a string(number)
    //type is not a string(object)

    //string.length is even
    //string.length is odd
    it('test with number input, should return udefined', function () {
        let expected = isOddOrEven(100);
        expect(expected).to.equal(undefined, 'function did not return the correct result');
    });
    it('test with object input, should return udefined', function () {
        let expected = isOddOrEven({name:'Acho'});
        expect(expected).to.equal(undefined, 'function did not return the correct result');
    });
    it('test with number input, should return even', function () {
        let expected = isOddOrEven('asds');
        expect(expected).to.equal('even', 'function did not return the correct result');
    });
    it('test with number input, should return odd', function () {
        let expected = isOddOrEven('ads');
        expect(expected).to.equal('odd', 'function did not return the correct result');
    });
});