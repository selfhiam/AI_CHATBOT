const popup = document.querySelector(".layer");
const randomNum = Math.floor(Math.random() * 3 + 1);
const char = document.querySelector(".char");
char.innerHTML = `<img src="./logo/${randomNum}.png" alt="character">`
localStorage.setItem('char', randomNum);
const name = localStorage.getItem('name');
let changes = document.querySelectorAll('.name');
changes[0].innerText = name
changes[1].innerText = name

function select() {
    popup.style.display = 'block';
}

const x = document.querySelector(".xi-close-min");

x.addEventListener("click", () => {
    console.log('tkrwp!')
    popup.style.display = 'none';
})


function enter() {
    const parents = document.getElementsByName('parents')
    const selected = Array.from(parents).find(radio => radio.checked);
    console.log(selected.value)
    fetch('http://127.0.0.1:8000/birth.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'parents': selected.value
        })
    })
    .then(() =>{
        window.location.href = "./chatting.html";
    })
}