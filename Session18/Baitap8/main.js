let a = Number(prompt("Mời bạn nhập cạnh 1: "))
let b = Number(prompt("Mời bạn nhập cạnh 2: "))
let c = Number(prompt("Mời bạn nhập Cạnh 3: "))
if ((a + b > c) && (a + c > b) && (b + c) > a)
{
    if ( a===b && a===c)
    {
        document.writeln("Tam giác đều")
    }else if( a===b || a===c || b===c)
    {
        document.writeln("Tam giác cân")
    }else if( (a*a + b*b === c*c) || (a*a + c*c === b*b) || (b*b + c*c === a*a))
    {
        document.writeln("Tam giác vuông")
    }else
    {
        document.writeln("Tam giác thường")
    }
}else
{
    document.writeln("Không tạo thành tam giác")
}
