let count=0;
const btnCount = document.getElementById("countClick");
btnCount.addEventListener("click", function(){
    count++;
    const tagP = document.getElementsByTagName("p")[0];
    tagP.innerHTML = `Số lần bấm: <span>${count}</span>`;
})