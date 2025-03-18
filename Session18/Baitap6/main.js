let year = Number(prompt("Nhập năm: "))
let condition1 = year % 400 === 0
let condition2 = year % 4 === 0 && year % 100 !==0
if (condition1 || condition2)
{
    document.writeln(year + " Là năm nhuận")
}else
{
    document.writeln(year + " Là năm không nhuận")
}
