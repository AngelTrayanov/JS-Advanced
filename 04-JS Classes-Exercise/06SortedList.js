class List {
    constructor() {
        this.listOfNumbers = [];
        this.size = 0;
    }
    add(elemenent) {
        this.listOfNumbers.push(+elemenent);
        this.listOfNumbers.sort((a,b)=>a-b);
        this.size = this.listOfNumbers.length;
    }

    remove(index){
        if (index >= 0 && index < this.listOfNumbers.length) {
            this.listOfNumbers.splice(index, 1);
            this.size = this.listOfNumbers.length;
        }
    }

    get(index){
        if (index >= 0 && index < this.listOfNumbers.length) {
            return this.listOfNumbers[index];
        }
    }
}
let list = new List(); 

list.add(7); 

list.add(6); 

list.add(5); 
console.log(list);
console.log(list.get(1));  

list.remove(1); 
console.log(list.get(1)); 