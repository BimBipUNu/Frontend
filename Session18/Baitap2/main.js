let math = Number(prompt("Nhập điểm toán: "))
let literature = Number(prompt("Nhập điểm văn: "))
let english = Number(prompt("Nhập điểm tiếng anh: "))
let score = (math + literature + english)/3
if(score>=8)
{
    document.writeln("Giỏi")
}else if (score >=6.5)
{
    document.writeln("Khá")
}else if (score >=5.0)
{
    document.writeln("Trung Bình")

}else
{
    document.writeln("Yếu")
}
