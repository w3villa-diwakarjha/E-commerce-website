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


// let k=document.getElementById('username')
// console.log(k)

// let p=document.getElementById('password')
// console.log(p)

// let l=document.getElementById('email')
// console.log(l)

// let d=document.getElementById('pass')
// console.log(d)

// let c=document.getElementById('cpass')
// console.log(c)

function signup(e){
    var userinfo= JSON.parse(localStorage.getItem("username")) || []
    console.log(userinfo)
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
        console.log(user_data)
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
            console.log("user added")
        }
    }
    
}

function login(e){
    event.preventDefault();
    let email1=document.getElementById('username').value;
    console.log(email1)
    let password1=document.getElementById('password').value;
    console.log(password1)
    let users= JSON.parse(localStorage.getItem('username'))
    console.log(users)
    var m=0;
    users.forEach(element=>{
        console.log(element.email)
        console.log(element.Password)
        if((element.email==email1)&&(element.Password==password1)){
            m=1;
        }
    });
    if(m==1){
        alert('login')
        window.location = "https://w3villa-diwakarjha.github.io/E-commerce-website/ "
    }else{
        alert('Please Enter Valid Email or Password')
    }

}