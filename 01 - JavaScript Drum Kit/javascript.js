//Add an event listened for within the window.
//The window hosts the DOM. The 'document' is the DOM which is contained within the window.
function playSound (e) {
    //Focus on the exact audio element by selecting the audio element that contains the data-key matching the key pressed.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;

    //Reset the time played each time the key is pressed.
    //This means that sounds from the same key may be played over each other.
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing"); 
};

function removeTransition(e) {
    console.log(e);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);