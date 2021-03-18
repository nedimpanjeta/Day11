var myArr = [2, 4, 0, 8, 10];

function myArrayFunction(arr) {
    var myItem = [...arr];
    myItem[2] = 6;
    return myItem;
}

console.log(myArrayFunction(myArr));
module.exports = myArrayFunction;