function showModal() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginform').classList.add('showloginform');
}

function closeModal() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginform').classList.remove('showloginform');
}

var btnlogin = document.querySelector('.login-persons')
btnlogin.addEventListener('click', showModal)


var close = document.querySelector('span')
close.addEventListener('click', closeModal)



function showModal1() {
    document.querySelector('.overlay1').classList.add('showoverlay');
    document.querySelector('.loginform1').classList.add('showloginform');
}

function closeModal1() {
    document.querySelector('.overlay1').classList.remove('showoverlay');
    document.querySelector('.loginform1').classList.remove('showloginform');
}

var btnlogin1 = document.querySelector('.register-mains')
btnlogin1.addEventListener('click', showModal1)


var closed = document.querySelector('.cut')
closed.addEventListener('click', closeModal1)


