let a = Number(prompt("Nhập a: "))
let b = Number(prompt("Nhập b: "))
let c = Number(prompt("Nhập c: "))
let delta = b*b -(4*a*c)
let x1 = (-b + Math.sqrt(delta))/(2*a)
let x2 = (-b - Math.sqrt(delta))/(2*a)
document.writeln("x1= " + x1 + " và x2= " +x2)
