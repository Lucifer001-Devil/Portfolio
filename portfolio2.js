let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `${char}`
).join("");

document.addEventListener("DOMContentLoaded", function() {
    const projectLink = document.querySelector('.project-link');

    projectLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Add your animation class here
        document.body.classList.add('fade-out');

        // Wait for the animation to finish before redirecting
        setTimeout(() => {
            window.location.href = projectLink.getAttribute('href');
        }, 500); // Adjust the timeout duration to match your CSS animation duration
    });
});
