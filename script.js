var text1 = document.querySelector(".text1");
var text2 = document.querySelector(".text2");
var next1 = document.querySelector(".next1");

next1.onclick = function() {
    text1.classList.add("translate-x-full"); // Move text1 off-screen to the right
    text2.classList.remove("translate-x-full"); // Bring text2 on-screen from the right
    text1.classList.remove("translate-x-0"); // Reset text1 for future navigation
    text2.classList.add("translate-x-0"); // Make text2 fully visible
}
