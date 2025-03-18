let value = prompt("Nhập một chữ  cái" )
let condition1 = value >= 'a' && value<='z'
let condition2 = value >= 'A' && value <='z'
if( value.length === 1 && condition1 && condition2)
{
    document.writeln(value + " Là chữ cái")
}else
{
    document.writeln(value + " Không là chữ cái")
}
