let input = document.querySelector(".maxNumber");
let button = document.querySelector(".submitBtn");
let errorSpan = document.querySelector(".error");
let result = document.querySelector(".result");
let wait = document.querySelector(".wait");

button.addEventListener("click", function(){
    
    if(input.value==""){
        errorSpan.innerHTML="&#10060;" + "<b>Please Enter Max Number First!!</b>" + "&#10060;";
        errorSpan.style.display="block";
        result.style.display="none";
    }
    else{
        errorSpan.style.display="none";
        wait.style.display="block";
        wait.innerHTML="&#9203;" + "Please Wait...."
        result.style.display="none";

        setTimeout(function(){
            wait.style.display="none";
            let maxNumber = input.value;
            let number = Math.floor(Math.random() * maxNumber);
            result.style.display="block";
            result.innerText=number;
        }, 1000);
    }
});