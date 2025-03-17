let money = Number(prompt("Nhập số tiền gửi: "))
let month = Number(prompt("Nhập số tháng gửi: "))
month =Math.floor(month /12)
let interest
month>0?interest= money * (104.3/100) * month: interest= money
document.writeln(interest)
