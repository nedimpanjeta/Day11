function splitArrayInGroups(arr, n) {
	var rArr = [];
	for (var i = 0; i < n; i++) {
		rArr.push(arr.slice(0, n));

    return rArr;
}
}
// Only change code above this line
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2))
module.exports = splitArrayInGroups; 