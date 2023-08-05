

function signup(e) {
    var userinfo = JSON.parse(localStorage.getItem("login")) || []
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let cpassword = document.getElementById('cpass').value;
    if (email.length == 0 || cpassword.length == 0 || password.length == 0) {
        alert('All Field are Required')
    } else if (password != cpassword) {
        alert('Password and Confirm Password Should be Match');
    } else if (email.length != 0) {
        user_data = JSON.parse(localStorage.getItem('login')) || []
        var k = 0;
        user_data.forEach(element => {
            if (element.email === email) {
                k = 1;

            }
        });
        if (k == 1) {
            alert('Already Exist')
        } else if ((email.length != 0 || cpassword.length != 0 || password.length != 0) || (password === cpassword)) {

            var user = {
                email: email,
                Password: password,
                CPassword: cpassword
            }
            userinfo.push(user)
            let json = JSON.stringify(userinfo);
            localStorage.setItem("login", json);
            alert("Registered Successfully")
            document.querySelector('.overlay1').classList.remove('showoverlay');
            document.querySelector('.loginform1').classList.remove('showloginform');
            console.log("hi");
            document.querySelector('.overlay').classList.add('showoverlay');
            document.querySelector('.loginform').classList.add('showloginform');
        }
    }

}

function login(e) {
    event.preventDefault();
    let email1 = document.getElementById('username').value;
    let password1 = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('login'))
    var m = 0;
    users.forEach(element => {
        if ((element.email == email1) && (element.Password == password1)) {
            m = 1;
        }
    });
    if (m == 1) {
        window.location = "https://w3villa-diwakarjha.github.io/E-commerce-website/ "
        localStorage.setItem('loginStatus', 'true');
        const loginregister = document.getElementById('loginstatus').style.display = "none";
        document.getElementById('logoutstatus').style.display = "flex";

        console.log(loginregister)
    } else {
        alert('Please Enter Valid Email or Password')
    }
}


function logout() {
    localStorage.setItem('loginStatus', false);
    const logoutbutton = document.getElementById('logoutstatus').style.display = "none";
    document.getElementById('loginstatus').style.display = "flex";

    console.log(logoutbutton)

}

const loginStatus = localStorage.getItem('loginStatus')
if (loginStatus === 'true') {
    document.getElementById('loginstatus').style.display = "none";
    document.getElementById('logoutstatus').style.display = "flex";
}
else {
    document.getElementById('logoutstatus').style.display = "none";
    document.getElementById('loginstatus').style.display = "flex";
}
