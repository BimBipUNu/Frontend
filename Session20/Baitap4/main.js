let str = prompt("Nhập một chuỗi: ")
let length = str.length
let search = prompt("Nhập ký tự cần tìm: ")
let find =0
for ( let i =0; i< length; i++)
{
    if( search === str[i])
    {
        find = true
    }
}
if( find)
{
    document.writeln(search + " tồn tại trong "+ str)
}else
{
    document.writeln(search + " không tồn tại trong "+ str)
}
