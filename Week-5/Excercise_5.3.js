const hasDuplicate = function (param) {
    return [... new Set(param)].length !== param.length;
};

console.log(hasDuplicate([1,3,1,-2,8,9]));//true
//console.log(hasDuplicate([1, 5, -1, 4]));//false

/*
Set is a object.

Set is to keep unique values no duplicates are allowed

So here param is our array which we are passing

Creating new array [... new Set(param)]] with param which are passing

While using SET it will eliminate duplicate.and if duplicate exist new array length will defer 
with passed array.

With that we can find whether Array hasduplicate or not
*/