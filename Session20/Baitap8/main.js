let n = Number(prompt("Nhập số n:"))
let check = 0;
let num = 2;
while (check < n)
{
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
        if (num % i === 0)
        {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
    {
        console.log(num + " ");
        check++;
        num++;
    } else
    {
        num++;
    }
}
