while (true) {
    let choose=Number(prompt("=====MENU=====\n1. Chuc nang 1\n2. Chuc nang 2\n3. Chuc nang 3\n4. Chuc nang 4\n5.Thoat\n==============\nChon chuc nang: "));
    if (choose===5)
    {
        break;
    }
    let num = Number(prompt("Nhập một số: "));
    switch (choose) {
            case 1:
                if (num < 2)
                {
                    alert(num + " không phải là số nguyên tố.");
                } else
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
                        alert(num + " là số nguyên tố.");
                    } else
                    {
                        alert(num + " không phải là số nguyên tố.");
                    }
                }
                break;
            case 2:
                let sum = 0;
                for (let i = 1; i < num; i++){
                    if (num % i === 0) {
                        sum += i;
                    }
                }
                if (sum === num) {
                    alert(num + " la so hoan hao");
                }else {
                    alert(num + " khong phai so hoan hao");
                }
                break;
            case 3:
                Number.isInteger(Math.sqrt(num)) ? alert(num + " la so chinh phuong") : alert(num + " khong phai so chinh phuong");
                break;
            case 4:
                let a = 1;
                let b = 1;
                let c = 1;
                console.log("Dãy Fibonacci:");
                for (let i = 0; i < num; i++)
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
                break;
            case 5:
                alert("Thoat");
                break;
            default:
                alert("Chuc nang khong ton tai");
    }
}