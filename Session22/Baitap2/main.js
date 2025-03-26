let numbers = [1, 2, 3, 4, 5];
while (true) {
    let num = Number(prompt("Enter number"));
    let flag = false;
    for (let check of numbers) {
        if (num === check) {
            flag = true;
        }
    }
    if (flag) {
        console.log("Bingo");
        break;
    } else {
        console.log("Chuc ban may man lan sau");
    }
}