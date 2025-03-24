let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));
let c = Number(prompt("Enter c: "));

let delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0) {
    alert("Phuong trinh vo nghiem");
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert("Phương trình có nghiệm kép x1 = x2 = " + x);
} else {
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    alert("Phương trình có hai nghiệm phân biệt: " + "\n" + "x1 = " + x1 + "; x2 = " + x2);
}