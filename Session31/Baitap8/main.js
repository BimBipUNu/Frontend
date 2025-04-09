const ul = document.querySelector('ul')
ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        if (e.target.getAttribute('class') === 'checked') {
            e.target.setAttribute('class', 'none');
        } else {
            e.target.setAttribute('class', 'checked');
        }
    }
})

const add = document.querySelector(".addBtn")
add.addEventListener('click', () => {
    const input = document.querySelector('input')
    const ul = document.getElementById('myUL');
    let li = document.createElement('li');
    let span = document.createElement('span');

    li.innerText = input.value;
    li.setAttribute('class', 'none');
    span.innerText = "X"
    span.setAttribute('class', 'close');

    li.appendChild(span);
    ul.appendChild(li)
})