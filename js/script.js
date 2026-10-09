let allButton = document.querySelector(".all")

let projectCards = document.querySelectorAll(".project-card")

let gitHubRepositories = document.querySelector("#github-repositories")

let gitHubLoading = document.querySelector("#github-loading")

let githubApi = "https://api.github.com/users/ranciemenace-sys/repos"


if (gitHubRepositories) {

    fetch(githubApi)
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to fetch GitHub repositories")
            }

            return response.json()
        })

        .then(data => {

            if (data.length === 0) {

                let message = document.createElement("p")
                message.textContent = "No repositories found."
                gitHubRepositories.appendChild(message)

            }

            data.forEach(repo => {

                let card = document.createElement("div")
                card.classList.add("project-card")


                let title = document.createElement("h3")
                title.textContent = repo.name


                let description = document.createElement("p")
                description.textContent =
                    repo.description || "No description available."


                let language = document.createElement("p")
                language.textContent =
                    "Language: " + (repo.language || "Not specified")


                let stars = document.createElement("p")
                stars.textContent =
                    "⭐ Stars: " + repo.stargazers_count


                let forks = document.createElement("p")
                forks.textContent =
                    "🍴 Forks: " + repo.forks_count


                let githubLink = document.createElement("a")
                githubLink.textContent = "View on GitHub"
                githubLink.href = repo.html_url
                githubLink.target = "_blank"
                githubLink.rel = "noopener noreferrer"


                card.appendChild(title)
                card.appendChild(description)
                card.appendChild(language)
                card.appendChild(stars)
                card.appendChild(forks)
                card.appendChild(githubLink)


                if (
                    repo.language === "HTML" ||
                    repo.language === "CSS" ||
                    repo.language === "JavaScript"
                ) {
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
                gitHubLoading.textContent =
                    "Unable to load GitHub repositories."
            }

        })
}


if (allButton) {

    allButton.addEventListener("click", function () {

        document.querySelectorAll(".project-card").forEach(function (card) {

            card.style.display = "block"

        })

    })

}


let webButton = document.querySelector(".web-development")

if (webButton) {

    webButton.addEventListener("click", function () {

        document.querySelectorAll(".project-card").forEach(function (card) {

            if (card.classList.contains("web-development")) {
                card.style.display = "block"
            } else {
                card.style.display = "none"
            }

        })

    })

}


let cyberButton = document.querySelector(".cyber-security")

if (cyberButton) {

    cyberButton.addEventListener("click", function () {

        document.querySelectorAll(".project-card").forEach(function (card) {

            if (card.classList.contains("cyber-security")) {
                card.style.display = "block"
            } else {
                card.style.display = "none"
            }

        })

    })

}

let contactForm = document.querySelector("#contactForm")

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault()


        let name = document.querySelector("#name").value
        
        let email = document.querySelector("#email").value
        
        let message = document.querySelector("#message").value

        let formMessage = document.querySelector("#formMessage")

        let valid = true

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


        if (name.trim() === "") {

            formMessage.textContent = "Please enter your name."
            valid = false

        } else if (email.trim() === "") {

            formMessage.textContent = "Please enter your email."
            valid = false

        } else if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address."

            valid = false

        } else if (message.trim() === "") {

            formMessage.textContent =
                "Please enter a message."

            valid = false

        }
        if (valid) {

            formMessage.textContent =
                "Message sent successfully!"

        }

    })
}