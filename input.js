const btn= document.getElementById("btn");
btn.addEventListener("submit", (e)=> {
    e.preventDefault();
    validateInputs();
});

const validateInputs = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    if(email.value.match(validRegex)){
        return true;
    } else{
        alert("Enter Valid Email")
    }
}