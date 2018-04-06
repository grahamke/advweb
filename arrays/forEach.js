function vowelCount(str) {
    var arr = str.toLowerCase().split("");
    var counts = {};
    arr.forEach(function(val, idx, array) {
        switch(val) {
            case 'a' :
            case 'e' :
            case 'i' :
            case 'o' :
            case 'u' :
                if(counts[val] === undefined) {
                	counts[val] = 0;
                }
                counts[val] = counts[val] + 1;
                break;
            default:
                //ignore
       }
   });
   return counts;
}

console.log(vowelCount('testing'));
console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm'));// {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};

// forEach answers

function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2)
    })
    return newArr;
}

function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val)
        }
    })
    return newArr;
}

function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length-1])
    });
    return newArr;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}
