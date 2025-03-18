let number = Number(prompt("Nhập n: "))
if(!isNaN(number))
{
    number = number.toString()
    let strReversed = number.split("").reverse().join("")
    if(strReversed === number)
    {
        document.writeln( number + " là số đối xứng")
    }else
    {
        document.writeln( number + " không là số đối xứng")
    }
}else
{
    document.writeln("Dữ liệu nhập vào không hợp lệ")
}
