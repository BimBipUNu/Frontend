function checkArr (arr) {
    let range = arr[1] - arr[0];
    let check = true;
    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i+1] - arr[i] !== range) {
            check = false;
        }
    }
    return check;
}
let arr = [2,4,6,8]
console.log(checkArr(arr)?"TRUE":"FALSE")