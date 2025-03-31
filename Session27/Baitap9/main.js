function sortEven(arr) {
    // Lọc và sắp xếp các số chẵn tăng dần
    const soChan = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);

    let indexChan = 0;

    // Xây dựng mảng kết quả
    return arr.map(num => {
        if (num % 2 === 0) {
            return soChan[indexChan++];
        } else {
            return num; // Giữ nguyên số lẻ
        }
    });
}
let numbers = [5,8,6,3,4,2,7]
console.log(sortEven(numbers));