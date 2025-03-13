let math = Number(prompt("Nhập điểm môn toán: "))
let physics = Number(prompt("Nhập điểm môn lý: "))
let chemistry = Number(prompt("Nhập điểm môn hóa: "))
document.write("Điểm trung bình: " + ((math + physics + chemistry)/3).toFixed(2))
