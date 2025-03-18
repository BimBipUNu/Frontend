//1: "javascript" + 5
let result = "javascript" + 5; //"javascript5"
// Toán tử + nối chuỗi với số, do đó số 5 được chuyển thành chuỗi và nối với "javascript".
console.log(result); // "javascript5"

//2: "javascript" - 1
result = "javascript" - 1; //NaN
// Phép trừ không áp dụng được cho chuỗi "javascript", dẫn đến NaN (Not a Number).
console.log(result); // NaN

//3: "3" + 2
result = "3" + 2; //"32"
// Toán tử + nối chuỗi "3" với số 2, tạo thành chuỗi "32".
console.log(result); // "32"

//4: "5" - 4
result = "5" - 4; //1
// Chuỗi "5" được tự động chuyển thành số 5, rồi thực hiện phép trừ 5 - 4.
console.log(result); // 1

//5: isNaN("123")
result = isNaN("123"); //false
// Chuỗi "123" được chuyển thành số 123, và đây là số hợp lệ nên isNaN trả về false.
console.log(result); // false

//6: isNaN("hello")
result = isNaN("hello"); //true
// Chuỗi "hello" không thể chuyển thành số hợp lệ, nên isNaN trả về true.
console.log(result); // true

//7: Number.isNaN("123")
result = Number.isNaN("123"); //false
// Number.isNaN không chuyển đổi kiểu dữ liệu. Chuỗi "123" không phải là NaN, nên trả về false.
console.log(result); // false

//8: Number.isNaN(NaN)
result = Number.isNaN(NaN); //true
// Number.isNaN kiểm tra trực tiếp giá trị, và NaN là một NaN thật sự nên trả về true.
console.log(result); // true
