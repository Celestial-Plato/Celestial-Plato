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
        var arr = [].concat(...arg)
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


    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        drop: drop,
        dropRight: dropRight
    }
}();