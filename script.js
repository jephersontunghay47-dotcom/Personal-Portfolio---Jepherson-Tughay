alert("Welcome to Jepherson's Personal Portfolio!");

function updateClock() {
    const clock = document.getElementById("clock");

    if (clock) {
        clock.textContent = new Date().toLocaleString();
    }
}

updateClock();
setInterval(updateClock, 1000);

const profileImage = document.getElementById("profileImage");

if (profileImage) {
    profileImage.addEventListener("click", function() {
        alert("Image clicked!");
        profileImage.classList.toggle("enlarged");
    });
} else {
    console.log("Profile image not found!");
}

// 4. BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// 5. CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields!";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Thank you! Your message is valid.";
            formMessage.style.color = "green";

            contactForm.reset();
        }
    });
}