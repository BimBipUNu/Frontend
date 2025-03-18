let number = Number(prompt("Nhập vào một số: "))
if(number %3 == 0 && number %5 == 0)
{
    document.writeln(number + " Chia hểt cho cả 3 và 5")
}else if ( number %3 == 0)
{
    document.writeln(number + " Chia hểt cho 3")
}else if ( number %5 == 0)
{
    document.writeln(number + " Chia hểt cho 5")
}else
{
    document.writeln("Dữ liệu không hợp lệ")
}
