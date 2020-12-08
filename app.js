//element selectors
const btn = document.querySelector('button');
const advice = document.querySelector('.advice');
const title = document.querySelector('.title')

//fetching advice API on button click
btn.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
        .then(result => result.json())
        .then(data => {
            advice.innerText = data.slip.advice;
        })
})

//GSAP Animations
const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(title, { y: '-100px', opacity: 0, ease: 'Back.easeOut.config(1.7)' });
tl.from(btn, { y: '-100px', opacity: 0, ease: 'Bounce.easeOut' }, '-=0.5');