let year = Number(prompt("Nhập số năm kinh nghiệm: "))
if(year>6)
{
    document.writeln("Quản lý")
}else if(year >= 4)
{
    document.writeln("Chuyên viên")
}else if(year >=1)
{
    document.writeln("Nhân viên có kinh nghiệm")
}else
{
    document.writeln("Mới vào nghề")
}
