var switchButton = document.querySelector('#switch-button'),
switchTracker = document.querySelector('#switch-tracker'),
body = document.querySelector('body'),
img = document.querySelector('#profile img')

switchButton.addEventListener('click', () => {
    changeSwitch()
})
switchTracker.addEventListener('click', () => {
    changeSwitch()
})

function changeSwitch(){
    if(body.classList.toggle("lightmode") === true){
        switchButton.style.left = '16px'
        img.setAttribute('src', './assets/avatar-light.png')
    }else{
        switchButton.style.left = '-16px'
        img.setAttribute('src', './assets/avatar.png')
    }
}