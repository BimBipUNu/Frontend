let n = Number(prompt("Nhập số n: "));
if (n <= 0 || isNaN(n))
{
    console.log("Không hợp lệ");
} else
{
    console.log("Dãy Fibonacci:");
    let a = 1, b = 1;
    for (let i = 0; i < n; i++)
    {
        if (i === 0 || i === 1)
        {
            console.log("1 ");
        } else
        {
            let next = a + b;
            console.log(next + " ");
            a = b;
            b = next;
        }
    }
}
