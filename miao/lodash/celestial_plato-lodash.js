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
        return str;
    }

    function iterator(it) {
        if (typeof it === "string") {
            return val => val[it];
        }
        if(typeof it=== "function") {
            return it;
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


    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        drop: drop,
        dropRight: dropRight,
        uniq: uniq,
        uniqBy: uniqBy,
        zip: zip,
        unzip: unzip
    }
}();