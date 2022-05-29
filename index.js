let mykeys = document.querySelectorAll(".key");

mykeys.forEach(value => {
    value.addEventListener('click', function(){
        playSound(value.textContent);
    })
});


function playSound(key) {
    switch (key) {
        case 'C':
            var audio = new Audio('doremi/kgf2.mp3');
            audio.play();
            break;
        case 'D':
            var audio = new Audio('doremi/doh.mp3');
            audio.play();
            break;
        case 'E':
            var audio = new Audio('doremi/fa.mp3');
            audio.play();
            break;
        case 'F':
            var audio = new Audio('doremi/la.mp3');
            audio.play();
            break;
        case 'G':
            var audio = new Audio('doremi/mi.mp3');
            audio.play();
            break;
        case 'A':
            var audio = new Audio('doremi/re.mp3');
            audio.play();
            break;
        case 'B':
            var audio = new Audio('doremi/sol.mp3');
            audio.play();
            break;
        case 'K':
            var audio = new Audio('doremi/ti.mp3');
            audio.play();
            break;
        default:
            alert("Wrong key pressed by user");
    }
}