const balloons = document.querySelectorAll(".balloons img");

var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });

let clickCount = 0;

balloons.forEach((balloon) => {
    balloon.addEventListener("click", () => {
        balloon.style.visibility = "hidden";

        confetti({
            particleCount: 60,
            spread: 45,
            scalar: 1.5,
            shapes: [triangle],
            origin: {
                x: balloon.getBoundingClientRect().left / window.innerWidth,
                y: balloon.getBoundingClientRect().top / window.innerHeight,
            },
            colors: ["#ffaa00", "#ff00aa", "#aa00ff", "#aaff00", "#00aaff"],
            gravity: 0.8,
        });

        clickCount++;

        if (clickCount === balloons.length) {
            setTimeout(() => {
                resetBalloons();
            }, 1000);
        }
    });
});

function resetBalloons() {
    balloons.forEach((balloon) => {

        balloon.style.visibility = "visible";
        balloon.style.pointerEvents = "auto";

        balloon.style.animation = "none";
        balloon.offsetHeight;
        balloon.style.animation = "";
    });

    clickCount = 0;
}