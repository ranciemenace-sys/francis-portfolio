let allButton = document.querySelector(".all")

let projectCards = document.querySelectorAll(".project-card")

let gitHubRepositories = document.querySelector("#github-repositories")

let gitHubLoading = document.querySelector("#github-loading")

let githubApi = "https://api.github.com/users/ranciemenace-sys/repos"

fetch(githubApi)
    .then(response => {
        if (!response.ok){
            throw new Error("Failed to fetch GitHub repositories")
        }
        
        return response.json();
    })
    .then(data => {
        
        if (data.length === 0) {
            gitHubRepositories.innerHTML = "<p>No repositories found.</p>"
}
        data.forEach(repo => {
            let card = document.createElement("div")
            card.classList.add("project-card")

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <p>Language: ${repo.language || "Not specifeid"}</p>
                <p>⭐ Stars: ${repo.stargazers_count}</p>
                <p>🍴 Forks: ${repo.forks_count}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                
            `
            if (repo.language === "HTML" || repo.language === "CSS" || repo.language === "JavaScript") {
                card.classList.add("web-development")
            }

            if (repo.name.toLowerCase().includes("cyber")) {
                card.classList.add("cyber-security")
            }

            gitHubRepositories.appendChild(card)
            
    })
    
            if (gitHubLoading) {
                gitHubLoading.style.display = "none"
            }

})

.catch(error => {
    console.error(error)

    if (gitHubLoading) {
        gitHubLoading.textContent = "Unable to load GitHub repositories."
    }
});

if(allButton) {
    allButton.addEventListener("click", function(){
        document.querySelectorAll(".project-card").forEach(function(card) {
            card.style.display = "block"
        })
    })

}

let webButton = document.querySelector(".web-development")

if (webButton) {
    webButton.addEventListener("click", function(){
        document.querySelectorAll(".project-card").forEach(function(card){
            if(card.classList.contains("web-development")){
                card.style.display = "block"
            } else{
                card.style.display = "none"
            }
        })
    });
}

    let cyberButton = document.querySelector(".cyber-security")

if (cyberButton) {
    cyberButton.addEventListener("click", function(){
        document.querySelectorAll(".project-card").forEach(function(card){
            if(card.classList.contains("cyber-security")){
                card.style.display = "block"
            } else{
                card.style.display = "none"
            }
        })
    });
}

let contactForm = document.querySelector("#contactForm")

if (contactForm) {
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
});

if (email.trim() === "") {

    document.querySelector("#formMessage").textContent = "Please enter your email."
    
    valid = false

if (!emailPattern.test(email)) {
        document.querySelector("#formMessage").textContent = "Please enter a valid email address."
        valid = false
}

}

if (message.trim() === "") {

    document.querySelector("#formMessage").textContent = "Please enter a message."
    valid = false
    }
        if (valid) {

        document.querySelector("#formMessage").textContent = "Message sent successfully!"


    }
}
