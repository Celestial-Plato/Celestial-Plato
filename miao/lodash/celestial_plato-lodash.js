var celestial_plato = function () {

    function chunk(a, n) {
        var result = [], count = 0, arr = [];
        for(var i = 0; i < a.length; i++) {//定义一个数组；
            arr.push(a[i]);
            count++;
            if (count === n) {
                count = 0;
                result.push(arr);
                arr = [];
            }
        }
        if(count !== 0) result.push(arr);
        return result
    }


    function compact(array) {
        return array.filter(i => !!i === true);
    }

    function difference(a,...arg) {
        var arr = [].concat(...arg), result = [];
        for(var i=0; i<a.length; i++) {
            if (!arr.includes(a[i])) {
                result.push(a[i]);
            }
        }
        return result;
    }

    function drop(a, n = 1) {
        var result = [];
        for(var i = n; i < a.length; i++) {
            result.push(a[i]);
        }
        return result;
    }

    function dropRight(a, n = 1) {
        var result = [];
        for(var i = 0; i < a.length - n; i++) {
            result.push(a[i]);
        }
        return result;
    }

    function fill(a, str, start = 0, end = a.length) {
        for(var i = start; i < end; i++) {
            a[i] = str;
        }
        return a;
    }

    function iterator(it) {
        if (typeof it === "string") {
            if(it === 'length') return val => val.length;
            return val => val[it];
        }
        if(typeof it === "function") {
            return it;
        }
        if(Array.isArray(it)) {
            return obj => obj[it[0]] === it[1]
        }
        if(typeof it === "object") {
            return function(obj) {
                for(let key in it) {
                    if(obj[key] !== it[key])
                        return false;
                }
                return true;
            }
        }
    }

    function iterate(it) {
        if (typeof it === "string") {
            return val => val[it];
        }
        if(typeof it === "function") {
            return it;
        }
        if(Array.isArray(it)) {
            return obj => obj[it[0]] === it[1]
        }
        if(typeof it === "object") {
            return function(obj) {
                for(let key in it) {
                    if(obj[key] !== it[key])
                        return false;
                }
                return true;
            }
        }
    }

    function zip(...args) {
        var result = [], arr= [].concat(...args), a = [], b = [];
        for(var i = 0; i < arr.length; i++) {
            i % 2 === 0 ? a.push(arr[i]) : b.push(arr[i]);
        }
        result.push(a);
        result.push(b);
        return result;
    }
    function unzip(array) {
        var result = [];
        for(var i = 0; i < array[0].length; i++) {
            var arr = [];
            arr.push(array[0][i],array[1][i]);
            result.push(arr);
        }
        return result;
    }

    function uniq(array) {
        var arr = [];
        for(let val of array) {
            if(!arr.includes(val)) arr.push(val);
        }
        return arr;
    }

    function uniqBy(array, f) {
        var it = iterator(f), judge = [], arr = [];
        for(let val of array) {
            if(!judge.includes(it(val))) {
                arr.push(val);
                judge.push(it(val));
            }
        }
        return arr;
    }

    function forEach(array, f) {
        for(let key in array) {
            if(f(array[key],key) === false)
            break;
        }
        return array;
    }


    function every(arr, f) {
        var it = iterator(f)
        for(let key in arr) {
            if(!it(arr[key])) return false;
        }
        return true;
    }

    function map(arr, f) {
        var it = iterator(f), result = [];
        for(let val of arr) {
            result.push(it(val))
        }
        return result;
    }

    function filter(arr, f) {
        var it = iterator(f), result =[];
        for(let key in arr) {
            if(it(arr[key])) {
                result.push(arr[key]);
            }
        }
        return result;
    }

    function findIndex(arr, f, num = 0) {
        var it = iterator(f)
        for(let i = num; i < arr.length; i++) {
            if(it(arr[i])) return i;
        }
        return -1;
    }

    function reduce(col, f, initial) {
        var arr = Object.keys(col);//将对象的key放到一个数组中;
        var start = 0;//第一个key;
        if (arguments.length === 2) {
            initial = col[arr[0]]
            start = 1
        }
        for (var i = start; i < arr.length; i++) {
            initial = f(initial, col[arr[i]], arr[i], col)
        }
        return initial;
    }

    function some(col, f) {
        var it = iterator(f)
        for(let key in col) {
            if(it(col[key])) return true;
        }
        return false;
    }
    function keys(obj) {
        var result = []
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                result.push(key);
        }
        return result;
    }

    function values(obj) {
        var result = []
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                result.push(obj[key]);
        }
        return result;
    }
    function keyBy(obj, f) {
        var it = iterator(f);
        var result = {};
        for(let val of obj) {
            result[it(val)] = val;
        }
        return result;
    }
    function reverse(arr) {
        var n = arr.length;
        for(var i = 0; i< n / i; i++) {
            [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
        }
        return arr;
    }

    function slice(arr, start = 0, end = arr.length) {
        var result = [];
        for(var i = start; i < end; i++) {
            result.push(arr[i])
        }
        return result;
    }

    function countBy(col, f) {
        var it = iterator(f), map = {};
        for(let key in col) {
            map[it(col[key])] === undefined ? map[it(col[key])] = 1 :  map[it(col[key])]++;
        }
        return map;
    }

    function groupBy(col, f) {
        var it = iterator(f), map = {};
        for(let key in col) {
            map[it(col[key])] === undefined ? map[it(col[key])] = [col[key]] :  map[it(col[key])].push(col[key])
        }
        return map;
    }

    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        drop: drop,
        dropRight: dropRight,
        uniq: uniq,
        uniqBy: uniqBy,
        zip: zip,
        unzip: unzip,
        filter: filter,
        findIndex: findIndex,
        map: map,
        every: every,
        forEach: forEach,
        fill: fill,
        some: some,
        reduce: reduce,
        keys: keys,
        values: values,
        keyBy: keyBy,
        reverse: reverse,
        slice: slice,
        groupBy: groupBy,
        countBy: countBy

    }
}();