let choose = Number(prompt("Input your choose: \n1.VND --> USD: \n2.USD --> VND: "))
let value
if(choose === 1 || choose ===2)
{
    if(choose === 1)
    {
        value = Number(prompt("VND --> USD: "))
        document.writeln(value + " VND --> USD: " + value/25000 + "USD")
    }else
    {
        value = Number(prompt("USD --> VND: "))
        document.writeln(value + " USD --> VND:  " + value*25000 + "VND")
    }
}else
{
    document.writeln("Lựa chọn không hợp lệ")
}
