// window.addEventListener('keydown', function(e){
//     const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
//     const key = document. querySelector('.key[data-key="${e.keyCode}"]');


// key.classList.add('playing');
//     if(!audio) return;
//     audio.currentTime= 0;
//     audio.play();


// })


function playSound(e) {
    const keyCode = e.keyCode || e.target.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio || !key) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    // ✅ Remove 'playing' class after 700ms
    setTimeout(function() {
        key.classList.remove('playing');
    }, 700);
}

// Keyboard support
window.addEventListener('keydown', playSound);

// Mouse click support
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', playSound);
});

