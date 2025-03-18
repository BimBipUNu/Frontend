let a = Number(prompt("Nhập a: "))
let b = Number(prompt("Nhập b: "))
let c = Number(prompt("Nhập c: "))

let maxValue
a>=b && a>=c ? maxValue=a : b>=a && b>=c ? maxValue=b : maxValue =c
document.writeln("Số lớn nhất trong 3 số là: " + maxValue)
