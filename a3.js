document.addEventListener("DOMContentLoaded", function() {
    const enterButton = document.getElementById("enter-button");
    const overlay = document.getElementById("overlay");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const birthdaySong = document.getElementById("birthday-song");

    enterButton.addEventListener("click", function() {
        overlay.style.display = "none";
        header.classList.remove("hidden");
        main.classList.remove("hidden");
        birthdaySong.play();
    });

    // This function will add the fade-out class after 3 seconds
    setTimeout(function() {
        overlay.classList.add("fade-out");
    }, 3000); // Adjust the delay as needed
});
