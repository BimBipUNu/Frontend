let a = Number(prompt("Mời bạn nhập số a"))
let b = Number(prompt("Mời bạn nhập số b"))
let operation = prompt("Mời bạn nhập phép tính ( +, -, *, /")
if(operation === "+")
{
    document.writeln(a + " + " + b + " = " + (a+b))
}else if(operation === "-")
{
    document.writeln(a + " - " + b + " = " + (a-b))
}else if(operation ==="*")
{
    document.writeln(a + " * " + b + " = " + (a*b))
}else
{
    document.writeln(a + " / " + b + " = " + (a/b))
}
