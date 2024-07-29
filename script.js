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
