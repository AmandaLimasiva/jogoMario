
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const nuvem = document.querySelector('.nuvem')

const jump = () =>{
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    //console.log(pipePosition)

        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './imgs/mario-jump-images/game-over.png'
            mario.style.width = '70px'

            nuvem.style.animation = 'none';

            clearInterval(loop);
        }
}, 10);

document.addEventListener('keydown', jump)