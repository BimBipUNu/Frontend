let n = Number(prompt("Nhập n: "))
if( n>0 && !isNaN(n))
{
    let sum=0;
    for( let i = 0; i<=n; i++)
    {
        sum += i
    }
    document.writeln(sum)
}else
{
    document.writeln("Dữ liệu nhập vào không hợp lệ")
}
