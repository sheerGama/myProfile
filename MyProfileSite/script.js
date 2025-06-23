window.addEventListener("load", function() {
    document.body.style.opacity = 1;
    fadeTextEffect();
});

function fadeTextEffect() {
    const textArray = [
        "Building cool things with Code 🚀",
        "Full Stack Developer 💻",
        "Always Learning. Always Building. 🔥"
    ];

    let index = 0;
    const element = document.getElementById("typewriter");
    const fadeDuration = 1000;
    const delayBetween = 2000;

    function showNext() {
        element.style.opacity = 0;
        element.style.transform = "scale(0.9)";

        setTimeout(() => {
            element.textContent = textArray[index];
            element.style.opacity = 1;
            element.style.transform = "scale(1.05)";

            setTimeout(() => {
                element.style.transform = "scale(1)";
            }, 300);

            index = (index + 1) % textArray.length;
            setTimeout(showNext, delayBetween);
        }, fadeDuration);
    }

    element.style.opacity = 0;
    showNext();
}