const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    // Move the main cursor
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // Create a trail dot
    const trail = document.createElement("div");
    trail.className = "trail";

    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";

    document.body.appendChild(trail);

    // Remove after animation
    setTimeout(() => {
        trail.remove();
    }, 200);

});