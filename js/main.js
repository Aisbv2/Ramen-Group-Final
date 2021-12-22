var name;
var email;
var dor;
var phone;
var password;
var names = [];
var names2;
var usertr = document.getElementById("nameTR");	

document.getElementById("rgs-form").addEventListener("submit",	(event) => {
	event.preventDefault();
	Create();
	Read();
	document.getElementById("rgs-form").reset();
});

function Create(){
	
	let storage = JSON.parse(localStorage.getItem("names"));
	name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	dor = document.getElementById("dor").value;
	phone = document.getElementById("phone").value;
	password = document.getElementById("password").value;
	if(name.length < 1) {
		const nameValid = document.getElementById('isNameValid')
		nameValid.innerHTML = "Name is required"
	}else{
		$("#isNameValid").remove();
	}
	if(phone.length < 1){
		const phoneValid = document.getElementById('isPhoneValid')
		phoneValid.innerHTML= "Phone number is required"
	}else{
		$("#isPhoneValid").remove();
	}if(password.length < 8){
          const passwordFull = document.getElementById('isPasswordFull')
		  passwordFull.innerHTML= "Not less than 8"
	}
	else{
	        if(storage==null) {
			newData = {}
			newData['email'] = email
			newData['name'] = name
			newData['dor'] = dor
			newData['phone'] = phone
			newData['password'] = password;
			names.push(newData);
			localStorage.setItem("names",JSON.stringify(names));
			localStorage.setItem("userStatus", JSON.stringify(true));
			alert('Data created Successfully')
			window.location.href = "index.html"

		}else{
			newData = {}
			newData['email'] = email
			newData['name'] = name
			newData['dor'] = dor
			newData['phone'] = phone
			newData['password'] = password;
			names=JSON.parse(localStorage.getItem("names"));
			localStorage.setItem("userStatus", JSON.stringify(true));
			names.push(newData);
			alert('Data created Successfully')
			localStorage.setItem("names",JSON.stringify(names));
			window.location.href= "index.html"
		}
	}
	      var regEx = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var validEmail = regEx.test(email);
          if (!validEmail) {
            const emailCorrect = document.getElementById('isEmailCorrect')
            emailCorrect.innerHTML = "Enter valid email"
          }
		  else{
			$("#isEmailCorrect").remove();
		  }
}

function Read(){
	usertr.innerHTML = '';
	names2 = JSON.parse(localStorage.getItem("names"));
	if (names2==null) {
		usertr.innerHTML += `
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Email</th>
									<th>RegisterDate</th>
									<th>Phone</th>
									<th>Password</th>
									<th>Operation</th>
								</tr>
								<tr>
									<th colspan="">
										<span  style="text-align:center">No Data Found </span>
									</th>
								</tr>
							`
	}else{
		usertr.innerHTML += `
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Email</th>
									<th>RegisterDate</th>
									<th>Phone</th>
									<th>Password</th>
									<th>Operation</th>
								</tr>
							`

		for (var i=0; i < names2.length; i++) {
			usertr.innerHTML += `
			<tr>
				<td>${i+1}</td>
				<td>${names2[i].name}</td>
				<td>${names2[i].email}</td>
				<td>${names2[i].dor}</td>
				<td>${names2[i].phone}</td>
				<td>${names2[i].password}</td>
				<td>
					<button Onclick="View(${i})">View</button>
					<button Onclick="Update(${i})">Edit</button>
					<button Onclick="Delete(${i})">Delete</button>
				</td>
			</tr></table>`;
		}
	}
}

function Update(updateId){
	usertr.innerHTML = '';
	names4 = JSON.parse(localStorage.getItem("names"));
	usertr.innerHTML = '';
	usertr.innerHTML += `<tr><th>#</th><th>Name</th><th>Email</th><th>RegisterDate</th><th>Phone</th><th>Operation</th></tr>`
	for (var i=0; i<names4.length; i++) {
		if (i==updateId) {
			usertr.innerHTML+=`
				<td>${i+1}</td>
				<td><input type="text" name="updateName" id="updateName" value="${names4[i].name}"></td>
				<td><input type="text" name="updateEmail" id="updateEmail" value="${names4[i].email}"></td>
				<td><input type="date" name="updateDob" id="updateDob" value="${names4[i].dor}"></td>
				<td><input type="text" name="updatePhone" id="updatePhone" value="${names4[i].phone}"></td>
				<td><input type="text" name="updatePassword" id="updatePassword" value="${names4[i].password}"></td>

				<td>
					<button Onclick="Update2(${i})">Edit</button>
					<button Onclick="Read(${i})">Cancel</button>
				</td>
			`
		}else{
			`
			<tr>
				<td>${i+1}</td>
				<td>${names2[i]}</td>
				<td>
					<button Onclick="Update(${i})">Edit</button>
					<button Onclick="Delete(${i})">Cancel</button>
				</td>
			</tr>
			`
		}
	}
}
function View(viewId){
	usertr.innerHTML = '';
	names4 = JSON.parse(localStorage.getItem("names"));
	usertr.innerHTML = '';
	usertr.innerHTML += `<tr><th>#</th><th>Name</th><th>Email</th><th>RegisterDate</th><th>Phone</th><th>Password</th><th>Operation</th></tr>`
	for (var i=0; i<names4.length; i++) {
		if (i==viewId) {
			usertr.innerHTML+=`
				<td>${i+1}</td>
				<td>${names4[i].name}</td>
				<td>${names4[i].email}</td>
				<td>${names4[i].dor}</td>
				<td>${names4[i].phone}</td>
				<td>${names4[i].password}</td>					
				<td><button onClick="Read()">Go back</button></td>
			`
		}else{
			`
			<tr>
				<td>${i+1}</td>
				<td>${names2[i].name}</td>
				<td>${names4[i].email}</td>
				<td>${names4[i].dor}</td>
				<td>${names4[i].phone}</td>
				<td>${names4[i].password}</td>	
				<td><button onClick="Read()">Go back</button></td>
			</tr>
			`
		}
	}
}

function Update2(i){
	let names5 = JSON.parse(localStorage.getItem("names"));
	names5[i].name  = document.getElementById("updateName").value;
	names5[i].email  = document.getElementById("updateEmail").value;
	names5[i].dor  = document.getElementById("updateDob").value;
	names5[i].phone  = document.getElementById("updatePhone").value;
	names5[i].password  = document.getElementById("updatePassword").value;

	if (names5[i].name) {
		localStorage.setItem("names", JSON.stringify(names5));
		Read();
	}else if(names5[i].email){
		localStorage.setItem("names", JSON.stringify(names5));
		Read();
	}
}

function Delete(i2){
	alert(i2);
	let names3 = JSON.parse(localStorage.getItem("names"));
	names3.splice(i2,1);
	localStorage.setItem("names", JSON.stringify(names3));
	Read();
}

function show_hide_password(target){
    var input = document.getElementById('password');
    if (input.getAttribute('type') == 'password') {
      target.classList.add('view');
      input.setAttribute('type', 'text');
    } else {
      target.classList.remove('view');
      input.setAttribute('type', 'password');
    }
       return false;
    }

