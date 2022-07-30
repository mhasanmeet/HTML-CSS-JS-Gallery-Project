// Nav fixed
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window__scrolled',
    window.scrollY > 0);
})

//Contact btn circular text
const textBtn = document.querySelectorAll('.contact__btn');

textBtn.forEach(textBtn => {
    let text = textBtn.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => 
        `<span style="transform: rotate(${index * 14}deg)">
            ${character}
        </span>`
    ).join("");
})