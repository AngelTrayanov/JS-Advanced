function solve(input) {
    let obj = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        let value = arguments[i];
        if (type === 'object') {
            console.log(`${type}:`);
        } else {
            console.log(`${type}: ${arguments[i]}`);
        }
        if (!obj.hasOwnProperty(type)) {
            obj[type] = 0;
        }
        obj[type]+=1;

        // if (typeof arguments[i] === 'function') {
        //     if (!obj.hasOwnProperty('function')) {
        //         obj['function'] = 0;
        //     }
        //     obj.function++;
        // } else if (typeof arguments[i] === 'number') {
        //     if (!obj.hasOwnProperty('number')) {
        //         obj['number'] = 0;
        //     }
        //     obj.number++;
        // } else if (typeof arguments[i] === 'string') {
        //     if (!obj.hasOwnProperty('string')) {
        //         obj['string'] = 0;
        //     }
        //     obj.string++;
        // } else if (typeof arguments[i] === 'object') {
        //     if (!obj.hasOwnProperty('object')) {
        //         obj['object'] = 0;
        //     }
        //     obj.object++;
        // } else if (typeof arguments[i] === 'undefined') {
        //     if (!obj.hasOwnProperty('undefined')) {
        //         obj['undefined'] = 0;
        //     }
        //     obj.undefined++;
        // }

    }
    Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(e => console.log(`${e[0]} = ${e[1]}`));
}

solve(42, 'cat', 42, function () {
    console.log('Hello world!');
});
// solve(42, 'cat', [], undefined);