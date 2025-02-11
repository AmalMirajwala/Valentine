const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// When clicking "Yes" button
yesBtn.addEventListener("click", () => {
    response.innerHTML = "You're stuck with me, princess";
    response.style.color = "white";
});

// When hovering over "No" button, it moves away
noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
