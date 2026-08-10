document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".carousel-arrow.prev");
    const nextBtn = document.querySelector(".carousel-arrow.next");
    const heroSection = document.querySelector("#hero");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        currentIndex = index;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => goToSlide(i));
    });

   
    let touchStartX = 0;
    let touchEndX = 0;

    if (heroSection) {
        heroSection.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        heroSection.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const threshold = 40;
        if (touchEndX < touchStartX - threshold) {
            goToSlide(currentIndex + 1); 
        } else if (touchEndX > touchStartX + threshold) {
            goToSlide(currentIndex - 1); 
        }
    }
});




document.addEventListener("DOMContentLoaded", () => {
            // Modal Logic
            const modal = document.getElementById("project-modal");
            const closeBtn = modal.querySelector(".modal-close");
            const projects = document.querySelectorAll(".project");

            projects.forEach(project => {
                project.addEventListener("click", () => {
                    modal.classList.add("open");
                    document.body.style.overflow = "hidden";
                });
            });

            const closeModal = () => {
                modal.classList.remove("open");
                document.body.style.overflow = "";
            };

            closeBtn.addEventListener("click", closeModal);

            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && modal.classList.contains("open")) {
                    closeModal();
                }
            });
        });