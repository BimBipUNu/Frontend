let num1 = Number(prompt("Nhập số đầu tiên: "))
let num2 = Number(prompt("Nhập số thứ hai: "))
let max = Math.max(num1,num2)
let min = Math.min(num1,num2)
let random =(Math.random()*(max - min)+min).toFixed(0)
document.writeln(random)
