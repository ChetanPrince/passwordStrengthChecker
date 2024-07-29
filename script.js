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

document.getElementById("password").addEventListener("keydown",()=>{
const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!"£$%&€])[A-Za-z\d!"£$%&€]{8,}$/;
const password = document.getElementById("password").value;
if(regex.test(password)){
    output.innerHTML =`progressBar is setting in progress.`
}
else{
    output.innerHTML=`there is an error producing result`;
}

})