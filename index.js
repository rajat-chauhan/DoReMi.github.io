let mykeys = document.querySelectorAll(".key");

mykeys.forEach(value => {
    value.addEventListener('click', function(){
        playSound(value.textContent.toLowerCase());
    })
});

document.addEventListener('keydown', function(btn){
    playSound(btn.key.toLowerCase());

    let pressed_key = btn.key.toLowerCase();

    mykeys.forEach(value => {
        value.classList.remove("activated");
    })
    
    mykeys.forEach(value => {
        if(pressed_key == value.innerHTML.toLowerCase()){
           value.classList.add("activated"); 
        }
    })
})

function playSound(key) {
    switch (key) {
        case 'c':
            var audio = new Audio('doremi/do.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('doremi/doh.mp3');
            audio.play();
            break;
        case 'e':
            var audio = new Audio('doremi/fa.mp3');
            audio.play();
            break;
        case 'f':
            var audio = new Audio('doremi/la.mp3');
            audio.play();
            break;
        case 'g':
            var audio = new Audio('doremi/mi.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('doremi/re.mp3');
            audio.play();
            break;
        case 'b':
            var audio = new Audio('doremi/sol.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('doremi/ti.mp3');
            audio.play();
            break;
        default:
            alert("Wrong key pressed by user");
    }
}