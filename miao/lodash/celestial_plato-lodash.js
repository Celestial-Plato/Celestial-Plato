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

    function difference(a, ...arg) {
        var arr = [].concat(...arg), result = [];
        for(var i=0; i<a.length; i++) {
            if (!arr.includes(a[i])) {
                result.push(a[i]);
            }
        }
        return result;
    }

    function differenceBy(a, ...arg) {

        if(Array.isArray(arg[arg.length - 1])) {
            return difference(a, ...arg)
        }
        var f = arg.pop();
        var array = arg.reduce((pre, cur) => pre.concat(cur))//展平
        var g = iterator(f), result = [];
        var arr = array.map(it => g(it));
        for(var i=0; i<a.length; i++) {
            if (!a.includes(arr[i])) {
                result.push(a[i]);
            }
        }
        return result;
    }
    function differenceWith(arr, comp, f) {
        var flag, result = [];
        for(let val of arr) {
            flag = true;
            for(let cp of comp)
                if(f(val, cp)) {
                    flag = false;
                    break;
                }
            if(flag = true) {
                result.push(val);
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
    function dropRightWhile(a, f) {
        var g = iterator(f);
        for(var i = a.length - 1; i >= 0; i--) {
            if(g(a[i])) a.pop();
        }
        return a;
    }

    function dropRight(a, n = 1) {
        var result = [];
        for(var i = 0; i < a.length - n; i++) {
            result.push(a[i]);
        }
        return result;
    }
    function dropWhile(a, f) {
        var arr = a.slice();
        var g = iterator(f);
        for(let i = 0; i < a.length; i++) {
            if(g(a[i])) arr.shift();
        }
        return arr;
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


    function findLastIndex(arr, f, num = arr.length - 1) {
        for(let i = num; i >= 0; i--) {
            if(it(arr[i])) return i;
        }
        return -1;
    }

    function flatten(arr, deepth = 1) {
        let result = [];
        if(deepth === 0 ) return arr;
        for(let i = 0; i < arr.length; i++) {
            if(!Array.isArray(arr[i])) {
                result.push(arr[i]);
            } else {
                let help = flatten(arr[i], deepth -1);
                for( let j = 0; j < help.length; j++) {
                    result.push(help[j]);//常见错误，push[]
                }

            }
        }
        return result;
    }

    function flattenDeep(arr) {
        let result = [];

        for(let i = 0; i < arr.length; i++) {
            if(!Array.isArray(arr[i])) {
                result.push(arr[i]);
            } else {
                let help = flatten(arr[i]);
                for( let j = 0; j < help.length; j++) {
                    result.push(help[j]);//常见错误，push[]
                }

            }
        }
        return result;
    }

    function flattenDepth(arr, deepth) {
        let result = [];
        if(deepth === 0 ) return arr;
        for(let i = 0; i < arr.length; i++) {
            if(!Array.isArray(arr[i])) {
                result.push(arr[i]);
            } else {
                let help = flatten(arr[i], deepth -1);
                for( let j = 0; j < help.length; j++) {
                    result.push(help[j]);//常见错误，push[]
                }

            }
        }
        return result;
    }

    function fromPairs(arr) {
        let map = {};
        for(let i = 0; i < arr.length; i++) {
            map[arr[i][0]] = arr[i][1];
        }
        return map;
    }

    function head(arr) {
        return arr[0];
    }

    function indexOf(arr, val, fromIndex = 0) {
        if(fromIndex < 0) fromIndex = Math.max(arr.length - 1 + fromIndex, 0);
        for(let i = fromIndex; i < arr.length; i++) {
            if(arr[i] === val) return i;
        }
    }

    function initial(arr) {
        arr.pop();
        return arr;
    }

    function intersection(a, ...ary) {
        for(let i = 0; i < ary.length; i++) {
            a = a.filter(val => ary[i].includes(val))//一次将a与每一个数组比较，不断更新
        }
        return a;
    }

    function intersectionBy(a, ...ary) {
        var f = ary.pop();
        var g = iterator(f);
        for(let i = 0; i < ary.length; i++) {
            a = a.filter(val => ary[i].map(it => g(it)).includes(g(val)))
        }
        return a;
    }

    function intersectionWith(a, ...ary) {
        var f = ary.pop();
        for(let i = 0; i < ary.length; i++) {
            a = a.filter(val => ary[i].some(it => f(val, it)));
        }
        return a;
    }

    function join(arr, sep) {
        var str;
        str = arr.reduce((pre,cur) => pre + cur + sep,'' );
        return str.slice(0, str.length -1);
    }

    function last(arr) {
        return arr.pop();
    }

    function lastIndexOf(arr, val, fromIndex = arr.length -1) {
        for(let i = fromIndex; i >= 0; i--) {
            if(arr[i] === val) return i;
        }
        return -1;
    }
    function nth(arr, n = 0) {
        if(n < 0); n = arr.length -1 + n;
        return arr[n];
    }

    function pull(arr, ...remove) {
        return arr.filter(val => !remove.includes(val));
    }

    function pullAll(arr, remove) {
        return arr.filter(val => !remove.includes(val));
    }

    function pullAllBy(a, remove, f) {
        var g = iterator(f)
        return  a.filter(val => !remove.map(it => g(it)).includes(g(val)));
    }

    function pullAllWith(a, remove, f) {
        return a.filter(val => !remove.some(it => f(val, it)));
    }

    function pullAt(arr, ...remove) {
        return  arr.filter((val, idx) => !remove.includes(idx))
    }

    function remove(arr, f) {
        var array = arr.slice();
        arr = arr.filter(val => !f(val))
        return array.filter(val => f(val))
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

    function toPath(str) {
        return str.replace(/\[|\]\./g,'.').split('.')
    }
    function isEqual(a, b) {
        let typea = typeof a;
        let typeb = typeof b;
        if(typea !== typeb) {//类型不相同
            return false;
        } else {//类型相同，判断是不是数组
            if(typea ==  "object") {
                if (Array.isArray(a) + Array.isArray(b) === 1) {//是不是都是数组
                    return false;
                }
                if (Array.isArray(a)) {//都是数组
                    if(a.length !== b.length) {
                        return false;
                    }
                }
                let keysa = Object.keys(a),  keysb = Object.keys(b);//属性名的集合
                if(keysa.length !== keysb.length) return false;//判断长度

                for(let idx of keysa) {
                    if(!(idx in b)) return false;//判断属性值为undefine的例外情况，比如{b: undefiend}和{c: undefined}
                    if(!isEqual(a[idx], b[idx])) {
                        return false;
                    } //else return true;空数组返回undefined;
                }

                return true;
            }  else return a === b;//原始类型
        }
    }


    return {
        fromPairs: fromPairs,
        flatten: flatten,
        flattenDeep: flattenDeep,
        flattenDepth: flattenDepth,
        findLastIndex: findLastIndex,
        isEqual: isEqual,
        toPath: toPath,
        chunk: chunk,
        compact: compact,
        difference: difference,
        drop: drop,
        dropRight: dropRight,
        dropRightWhile: dropRightWhile,
        dropWhile: dropWhile,
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
        countBy: countBy,
        head: head,
        indexOf: indexOf,
        intersection: intersection,
        intersectionBy: intersectionBy,
        intersectionWith: intersectionWith,
        join: join,
        last: last,
        lastIndexOf: lastIndexOf,
        nth: nth,
        pull: pull,
        pullAll: pullAll,
        pullAllWith: pullAllWith,
        pullAt: pullAt,
        remove: remove
    }
}();