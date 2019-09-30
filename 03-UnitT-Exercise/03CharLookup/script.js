const expect = require('chai').expect;

function lookupChar(string, index) { 
    if (typeof(string) !== 'string' || !Number.isInteger(index)) { 
        return undefined; 
    } 
    if (string.length <= index || index < 0) { 
        return "Incorrect index"; 
    } 
 
    return string.charAt(index); 
} 

describe('lookupChar', function () {
    //check if first parameter is string, return undefined
    it('should return undefined with a non-string first parameter', function(){
        let expected = lookupChar(5,5);
        expect(expected).to.equal(undefined, 'non-string first parameter');
    });
    //check if second parameter is number, return undefined
    it('should return undefined with a non-integer second parameter', function(){
        let expected = lookupChar('das', 'das');
        expect(expected).to.equal(undefined, 'non-onteger second parameter');
    });
    it('should return undefined with a floating point second parameter', function(){
        let expected = lookupChar('das', 1.5);
        expect(expected).to.equal(undefined, 'non-integer second parameter');
    });
    //check the index(negative number or bigger number), return Incorrect index
    it('should return Incorrect index with negative index',function(){
        let expected = lookupChar('das', -1);
        expect(expected).to.equal("Incorrect index", 'did not return correct index');
    });
    it('should return Incorrect index with bigger index',function(){
        let expected = lookupChar('das', 4);
        expect(expected).to.equal("Incorrect index", 'index is bigger than length');
    });
    //return the character at the specified index
    it('should return correct char', function(){
        let expected = lookupChar('hello', 1);
        expect(expected).to.equal('e', 'returned correct char');
    });
});