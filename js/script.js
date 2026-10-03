let allButton = document.querySelector(".all")

let projectCards = document.querySelectorAll(".project-card")

allButton.addEventListener("click", function(){
    projectCards.forEach(function(card){
        card.style.display ="block"
    })

});

let webButton = document.querySelector(".web-development")

webButton.addEventListener("click", function(){
   projectCards.forEach(function(card){
    card.classList.contains("web-development")
    if(card.classList.contains("web-development")){
        card.style.display = "block"
    } else{
        card.style.display = "none"
    }
   })
});

let cyberButton = document.querySelector(".cyber-security")

cyberButton.addEventListener("click", function(){
    projectCards.forEach(function(card){
        card.classList.contains("cyber-security")
        if(card.classList.contains("cyber-security")){
            card.style.display = "block"
        } else{
            card.style.display = "none"
        }
    })
});

let contactForm = document.querySelector("#contactForm")

contactForm.addEventListener("submit", function(event) {

    event.preventDefault()

    let name = document.querySelector("#name").value

    let email = document.querySelector("#email").value

    let message = document.querySelector("#message").value

    let valid = true

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (name.trim() === "") {

    document.querySelector("#formMessage").textContent = "Please enter your name."
    valid = false

};

if (email.trim() === "") {

    document.querySelector("#formMessage").textContent = "Please enter your email."
    
    valid = false

if (!emailPattern.test(email)) {
        document.querySelector("#formMessage").textContent = "Please enter a valid email address."
        valid = false
}

};

if (message.trim() === "") {

    document.querySelector("#formMessage").textContent = "Please enter a message."
    valid = false
}
    if (valid) {

    document.querySelector("#formMessage").textContent = "Message sent successfully!"


}
});
