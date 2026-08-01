// --- Custom Mouse Cursor Setup ---
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// --- Gems Animation Engine ---
const gems = document.querySelectorAll(".gem");
const hero = document.getElementById("hero");
let hasFallen = false;

// A. Hover Interactivity (Active only before scrolling down)
gems.forEach(gem => {
    gem.addEventListener("mouseenter", () => {
        if (hasFallen) return; // Disables hover scattering once gems have dropped

        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        const rotation = (Math.random() - 0.5) * 20;

        gem.animate([
            { transform: gem.style.transform || "translate(0,0) rotate(0deg)" },
            { transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)` }
        ], {
            duration: 700,
            easing: "cubic-bezier(.22,1,.36,1)",
            fill: "forwards"
        });
    });

    gem.addEventListener("mouseleave", () => {
        if (hasFallen) return;

        gem.animate([
            { transform: getComputedStyle(gem).transform },
            { transform: "translate(0,0) rotate(0deg)" }
        ], {
            duration: 700,
            easing: "cubic-bezier(.22,1,.36,1)",
            fill: "forwards"
        });
    });
});

// B. Gravity Drop Triggers on Page Scroll
// --- Gravity Drop & Reset Triggers ---

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

let lastFallTime = 0; 
const LOCK_DURATION = 5000; // Time in milliseconds (5000ms = 5 seconds. Change to 60000 for 1 minute)

window.addEventListener("scroll", () => {
    // 1. SCROLL DOWN: Trigger Gravity Drop (More than 40px down)
    if (window.scrollY > 40 && !hasFallen) {
        hasFallen = true;
        lastFallTime = Date.now(); // Record the exact timestamp when they dropped

        const floorY = hero.offsetHeight;

        gems.forEach((gem) => {
            const rect = gem.getBoundingClientRect();
            const heroRect = hero.getBoundingClientRect();
            
            const currentTopPos = rect.top - heroRect.top;
            const distanceToFloor = floorY - currentTopPos - gem.offsetHeight;

            const sideScatterX = (Math.random() - 0.5) * 120; 
            const landRotation = (Math.random() - 0.5) * 60;

            gem.animate([
                { transform: getComputedStyle(gem).transform },
                { transform: `translate(${sideScatterX}px, ${distanceToFloor}px) rotate(${landRotation}deg)` }
            ], {
                duration: 1100,
                easing: "cubic-bezier(.25, 1, .5, 1)",
                fill: "forwards"
            });
        });
    }
    
    // 2. SCROLL UP TO TOP: Return Gems only if the lock duration has expired
    else if (window.scrollY <= 10 && hasFallen) {
        const timeElapsed = Date.now() - lastFallTime;

        // Only reset if they have been on the bottom longer than our LOCK_DURATION
        if (timeElapsed >= LOCK_DURATION) {
            hasFallen = false; 

            gems.forEach((gem) => {
                gem.animate([
                    { transform: getComputedStyle(gem).transform },
                    { transform: "translate(0px, 0px) rotate(0deg)" } 
                ], {
                    duration: 900,
                    easing: "cubic-bezier(.22, 1, .36, 1)",
                    fill: "forwards"
                });
            });
        }
    }
});
