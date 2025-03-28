let array = [1, 3, 5, 3, 7];
console.log(findEven(array));

function findEven(array) {
    let arrEven = array.filter(item => item % 2 === 0);
    if (arrEven.length === 0) {
       return "Khong co so chan trong mang"
    } else {
        return `${arrEven}`;
        }
}