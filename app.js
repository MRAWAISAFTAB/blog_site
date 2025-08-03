// let userdata = JSON.parse(localStorage.getItem("users")) || [];

// function signup(){
//     let name=document.getElementById("Uname").value;
//     let emai=document.getElementById("Email").value;
//     let pass=document.getElementById("pass").value;



//     let  user={
//         name,
//         emai,
//         pass,
//     }
//     userdata.push(user);


// localStorage.setItem("users",JSON.stringify(userdata))

// console.log(userdata)
// console.log(user)
// }
function signup(event) {
  event.preventDefault();
  let name = document.getElementById("Uname").value;
  let emai = document.getElementById("Email").value;
  let pass = document.getElementById("pass").value;

  if (name === "" || emai === "" || pass === "") {
    alert("Please fill in all fields.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];


  // 🔒 Check if email already exists
  let emailExists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].emai === emai) {
      emailExists = true;
      break;
    }
  }

  if (emailExists) {
    alert("Email already exists! Try a different one.");
    return; // stop the function here
  }

  // ✅ Continue with signup
  let user = {
    name,
    emai,
    pass,
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful!");
  window.location.href = "signin.htm";
}


