const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


const gems = document.querySelectorAll(".gem");

gems.forEach(gem => {

    gem.addEventListener("mouseenter", () => {

        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        const rotation = (Math.random() - 0.5) * 20;

        gem.animate(
            [
                {
                    transform: gem.style.transform || "translate(0,0) rotate(0deg)"
                },
                {
                    transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`
                }
            ],
            {
                duration: 700,
                easing: "cubic-bezier(.22,1,.36,1)",
                fill: "forwards"
            }
        );

    });

    gem.addEventListener("mouseleave", () => {

        gem.animate(
            [
                {
                    transform: getComputedStyle(gem).transform
                },
                {
                    transform: "translate(0,0) rotate(0deg)"
                }
            ],
            {
                duration: 700,
                easing: "cubic-bezier(.22,1,.36,1)",
                fill: "forwards"
            }
        );

    });

});