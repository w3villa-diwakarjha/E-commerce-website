// ########################## Login ################################
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

// ######################## Register #############################
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


var closedd = document.querySelector('.cutt')
closedd.addEventListener('click', closeModal1)

function signup(e){
    var userinfo= JSON.parse(localStorage.getItem("username")) || []
    event.preventDefault();
    let email=document.getElementById('email').value;
    let password=document.getElementById('pass').value;
    let cpassword=document.getElementById('cpass').value;
    if(email.length==0||cpassword.length==0||password.length==0){
        alert('All Field are Required')
    }else if(password!=cpassword){
        alert('Password and Confirm Password Should be Match');
    }else if(email.length!=0){
        user_data=JSON.parse(localStorage.getItem('username')) || []
        var k=0;
        user_data.forEach(element => {
            if(element.email === email){
                k=1;

            }
        });
        if(k==1){
            alert('Already Exist')
        }else if((email.length!=0||cpassword.length!=0||password.length!=0)||(password===cpassword)){

            var user={
                email: email,
                Password:password,
                CPassword:cpassword
            }
            userinfo.push(user)
            let json=JSON.stringify(userinfo);
            localStorage.setItem("username",json)
        }
    }
    
}

function login(e){
    event.preventDefault();
    let email1=document.getElementById('username').value;
    let password1=document.getElementById('password').value;
    let users= JSON.parse(localStorage.getItem('username'))
    var m=0;
    users.forEach(element=>{
        if((element.email==email1)&&(element.Password==password1)){
            m=1;
        }
    });
    if(m==1){
        window.location = "https://w3villa-diwakarjha.github.io/E-commerce-website/ "
    }else{
        alert('Please Enter Valid Email or Password')
    }
}





