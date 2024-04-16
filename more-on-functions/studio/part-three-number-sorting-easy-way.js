//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function sortValuesAsc(numsArr) {
    numsArr.sort(function(a, b) {
       return a - b
    })
    return numsArr;
}
//Sort each array in decending order.
function sortValuesDesc(numsArr) {
    numsArr.sort(function(a, b) {
       return a - b
    })
    return numsArr.reverse();
}

console.log(sortValuesAsc(nums1))
console.log(sortValuesDesc(nums1))