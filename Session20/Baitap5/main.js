let a = Number(prompt("Nhập số a: "))
let b = Number(prompt("Nhập số b: "))
if( !isNaN(a) && !isNaN(b))
{
    let result = a
    for (let i =0; i<b-1 ;i++)
    {
        result *= a
    }
    document.writeln(result)
}else
{
    document.writeln("Dữ liệu không hợp lệ")
}
