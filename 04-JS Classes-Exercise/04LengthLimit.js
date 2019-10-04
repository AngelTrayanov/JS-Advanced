class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = +innerLength;
    }

    decrease(length) {
        this.innerLength -= Number(length);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    increase(length) {
        this.innerLength += Number(length);
    }

    toString() {
        let dotValue = this.innerString.length - this.innerLength;
        if (dotValue < 0) {
            dotValue = 0;
        }
        if (dotValue > 3) {
            dotValue = 3;
        }
        return (this.innerString.substr(0, Math.min(this.innerLength, this.innerString.length)) + '.'.repeat(dotValue));
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test 

test.decrease(3);
console.log(test.toString()); // Te... 

test.decrease(5);
console.log(test.toString()); // ... 

test.increase(4);
console.log(test.toString()); // Test 