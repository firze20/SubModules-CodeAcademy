const _ = {
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end){
        if(!end){
            if(number > 0 && number < start){
                return true;
            }
        }
        if(number === start){
            return true;
        }
        if(start > end){
            if(number > end && number < start){
                return true;
            }
        }
        if(number < start){
            return false;
        }
        if(number >= end){
            return false;
        }
        if(number > start && number < end){
            return true;
        }
    },
    words(string){
        const result = string.split(' ');
        return result;
    },
    pad(string, length){
        if(length <= string.length){
            return string;
        }
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = (length - string.length - startPaddingLength);
        const paddingString = ' '.repeat(startPaddingLength)+string+' '.repeat(endPaddingLength);
        return paddingString;
    },
    has(object, key) {
        const hasValue = object.hasOwnProperty(key);
        return hasValue;
    },
    invert(object) {
        const invertedObject = {};
        Object.keys(object).forEach(key => {
            invertedObject[object[key]] = key;
        });
        return invertedObject;
    },
    findKey(object, predicate){
        for(let key in object){
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if(predicateReturnValue){
                return key;
            };
        };
        undefined
        return undefined;
    },
    drop(array, n) {
        if(!n){
            n = 1;
            const droppedArray = array.slice(n);
            return droppedArray;
        }
        const droppedArray = array.slice(n);
        return droppedArray;
    },
    dropWhile(array, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, array);
        }
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size){
        if(!size) {
            size = 1;
        }
        let arrayChunks = [];
        for(let i = 0; i < array.length; i+=size){
            let arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};

const abcArray = ['a', 'b', 'c', 'd'];

console.log(_.chunk(abcArray, 3));


// Do not write or modify code below this line.
module.exports = _;

