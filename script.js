let Name = document.querySelector(".name")
let Title = document.querySelector("h1")
let Text = document.querySelector(".text")
let signupbtn = document.querySelector(".signupbtn")
let signinbtn = document.querySelector(".signinbtn")
let underline = document.querySelector(".underline");
let inputfield = document.querySelector(".input-field")

var p = document.createElement("p")
p.innerText = "Forget Password"
p.style.textDecoration = "underline"
p.style.color = "blue"

signinbtn.addEventListener("click",()=>{
    Name.remove()
    signinbtn.style.backgroundColor = "green"
    signupbtn.style.backgroundColor = "#eaeaea"
    underline.style.transform = "translateX(30px)"
    underline.style.transition = "transform 1s"

    Title.innerHTML = "Sign In"
    Text.remove()
    inputfield.append(p)
    p.classList.add("position")
})

signupbtn.addEventListener("click",()=>{

    p.remove()
    inputfield.prepend(Name)
    signupbtn.style.backgroundColor = "green"
    signinbtn.style.backgroundColor = "#eaeaea"
    inputfield.append(Text)
    underline.style.transform = "translateX(0px)"
    underline.style.transition = "transform 1s"
    Title.innerHTML = "Sign Up"

})