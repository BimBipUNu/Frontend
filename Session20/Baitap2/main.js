let n = Number(prompt("Nhập n: "))
if( n>0 && !isNaN(n))
{
    document.writeln("Số chia hết cho 5 từ 1 tới " + n +" là: " )
    for( let i = 5; i<=n; i+=5)
    {
        document.writeln(i)
    }
}else
{
    document.writeln("Dữ liệu nhập vào không hợp lệ")
}
