let a = Number(prompt("Nhập a: "))
let b = Number(prompt("Nhập b: "))
let c = Number(prompt("Nhập c: "))
let delta = b*b -(4*a*c)
if(delta < 0)
{
    document.writeln("Phương trình vô nghiệm")
}else if( delta == 0)
{
    document.writeln("Phương trình có nghiệm kép x1 = x2 =" + (-b/(2*a)))
}else
{
    document.writeln("Phương trình có 2 nghiệm phân biệt")
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)
    document.writeln("x1= " + x1 + " và x2= " +x2)
}
