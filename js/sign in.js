
function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

$(document).ready(function() {
    $("#log-form").submit(function(e) {
    e.preventDefault();
    var count = 0;
    var email = $('.uname').val();
    var password = $('.psw').val();
    
    $(".error1").remove();
    $(".error2").remove();
    $(".error3").remove();
    if (email.length< 1) {
      $('.uname').after('<span class="error1">This field is required</span>');
      count++;
    }
     else {
      var regEx = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('.uname').after('<span class="error3">Enter valid email</span>');
        count++;
      }
    }
    if (password.length< 8) {
      $('.psw').after('<span class="error2">Password should contain not less than 8 characters</span>');
      count++
    }
    if(email=="admin@mail.com" && password=="admin123"){
      alert("Welcome to admin panel!");
      document.location.href = "admin.html";
    }
  });
});

function saveData()
{
let email,psw;
email=document.getElementById("email").value;

psw=document.getElementById("password-input").value;

let names=new Array();
names=JSON.parse(localStorage.getItem("names"))?JSON.parse(localStorage.getItem("names")):[]
if(names.some((v)=>{return v.email==email && v.password==psw}))
{
  alert("Welcome to our platform!");
  localStorage.setItem("userStatus", JSON.stringify(true));
				window.location.href = 'index.html';
				verifyAuthentification();
  window.location.href="index.html"
}
else
{
  alert('Data is invalid');
}
}

function userAuthentification() {
	if (!JSON.parse(localStorage.getItem("userStatus"))) {
		window.location.href = 'sign in.html';
		verifyAuthentification();
	}
	if (JSON.parse(localStorage.getItem("userStatus"))) {
		localStorage.setItem("userStatus", JSON.stringify(false));
		verifyAuthentification();
	}
}

function verifyAuthentification(){
	if (!JSON.parse(localStorage.getItem("userStatus"))) {
		document.getElementById("authButton").value = 'Sign in';
	}
	if (JSON.parse(localStorage.getItem("userStatus"))) {
	document.getElementById("authButton").value = 'Log out';
	}
}



