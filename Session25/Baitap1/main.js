let array = [1,2,5,0,7,8,5,9];
minElement(array);

function minElement(array) {
    let min = array[0];
    array.forEach((element) => {element < min ? min = element : min})
    console.log(min)
}