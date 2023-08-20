const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const submit = document.getElementById("submit");
let loginForm = document.getElementById("loginForm");
const zipCode = document.getElementById("zipCode");

const palidromeImg = document.getElementById("palidrome");









loginForm.addEventListener("submit", function checkInfo(){
    const fullName = firstName.value + " " + lastName.value;
    const ZipCode = zipCode.value;
    if(fullName.length > 20){
        if(ZipCode.length == 5){
            alert("Secret Message....")
            alert("THE THINGS YOU TAKE FOR GRANTED SOMEONE ELSE IS PRAYING FOR")
            alert("STAY POSITIVE")
            palidromeImg.scr = "Thrid Pics/message picture.png";
        }else{
            alert("Invalid Zip Code")
        }
    }else {
        alert("you do not have 20 characters in your name")
    }
    
});