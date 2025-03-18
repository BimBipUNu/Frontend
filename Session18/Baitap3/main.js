let nameOfAdmin = prompt("Nhập tên: ")
if (nameOfAdmin === "ADMIN")
{
    let password = prompt("Nhập mật khẩu: ")
    if(password === "TheMaster")
    {
        document.writeln("Welcome")
    }else if (password === null || password == "")
    {
        document.writeln("Cancelled")
    }else
    {
        document.writeln("Wrong password")
    }
}else if (nameOfAdmin === null || nameOfAdmin == "")
{
    document.writeln("Cancelled")
}
else
{
    document.writeln("I Don't know you")
}
