let numbers = [2,3,4,1,5,6,2,7,8,3,4,7,8,2,9,0,2,1];
let input = Number(prompt("Enter a number: "));
let count = 0;
for (let i of numbers) {
    if (i === input) {
        count++;
    }
}
console.log(count);