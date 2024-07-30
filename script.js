document.querySelector(".eye").addEventListener("click", function(){
    const input = document.getElementById("password");
    const icon = this;
if(input.type === "password"){
    input.type = "text"; 
    icon.textContent = "visibility_off";
        } else {
        input.type = "password";
        icon.textContent = "visibility";
}
});


document.getElementById("password").addEventListener("input",()=>{
    const regex8 = /^.{8,}$/;
    const regex1Cap8 = /^(?=.*[A-Z]).{8,}$/;
    const regex1Cap81no = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const regexComplete = /^(?=.*[A-Z])(?=.*\d)(?=.*[!"£$%&€])[A-Za-z\d!"£$%&€]{8,}$/;
    const password = document.getElementById("password").value;
    const output = document.getElementById("output");
    
    output.className = "";

if(regexComplete.test(password)){
   output.textContent=`Password is strong`;
    output.classList.add("total");
}
else if(regex1Cap81no.test(password)){
    
    output.classList.add("seventyfive");
    output.textContent=`Password needs to have a special character`;
}
else if(regex1Cap8.test(password)){
    output.textContent =`Password still needs improvement.`
    output.classList.add("fifty");
}
else if(regex8.test(password)){
    output.textContent =  `Password is too weak!`;
    output.classList.add("quarter");
}else{
    output.textContent=`Password has to be minimum 8 characters 1 capital letter 1 numnber and a special character`;

}


});