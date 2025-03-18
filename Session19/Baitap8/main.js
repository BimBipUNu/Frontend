let month = Number(prompt("Nhập tháng: "))
if (month <=3)
{
    document.writeln("Mùa xuân")
}else if (month <=6)
{
    document.writeln("Mùa hè")
}else if (month <=9)
{
    document.writeln("Mùa thu")
}else if ( month <=12)
{
    document.writeln("Mùa đông")
}else
{
    document.writeln("Tháng không hợp lệ")
}
