(function vector() {
     
    
    function add(arr1,arr2) {
        let resultArr = [];
        let x = arr1[0] + arr2[0];
        let y = arr1[1] + arr2[1];
        resultArr.push(x, y);
        return resultArr;
    }

    function multiply(arr1,multiplier) {
        let resultArr = [];
        let x = arr1[0] * multiplier;
        let y = arr1[1] * multiplier;
        resultArr.push(x, y);
        return resultArr;
    }

    function length(arr1) {
        let result = Math.sqrt((arr1[0]*arr1[0])+(arr1[1]*arr1[1]));
        return result;
        
    }

    function dot(arr1,arr2) {
        let result = (arr1[0]*arr2[0])+(arr1[1]*arr2[1]);
        return result;
    }
 
    function cross(arr1,arr2) {
        let result = (arr1[0]*arr2[1])-(arr1[1]*arr2[0]);
        return result;
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
})();