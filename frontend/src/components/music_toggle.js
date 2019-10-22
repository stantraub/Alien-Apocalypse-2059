export const musicSwitch = document.getElementById('mute-switch').addEventListener('click', () => {
    let id = document.getElementById('mute-switch');
    let music = document.getElementById('music')
    // debugger
    if (id.classList.value === 'selected') {
        // debugger
        music.play();
        // debugger
        id.classList.remove('selected');
        id.classList.add('unselected');
        id.innerHTML = 'Mute'
    } else if (id.classList.value === 'unselected') {
        // debugger
        music.pause()
        id.classList.remove('unselected');
        id.classList.add('selected');
        id.innerHTML = 'Play Music'
    }
})