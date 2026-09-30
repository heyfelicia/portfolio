const projects = {

    aster: {
        title: "Aster",
        category: "BRAND IDENTITY",
        description: "A visual identity exploring playful typography, color, and illustration.",
        role: "Graphic Designer",
        tools: "Illustrator, Photoshop",
        year: "2026",
        deliverables: "Brand Identity, Illustration, Digital Assets",
        projectCategory: "Branding",

        hero: "images/Aster.png",

        gallery: [],

        challenge: "Create a distinct identity that feels expressive while remaining cohesive.",

        process: [
            {
                title: "01 — THE IDEA",
                text: "The initial concept explored expressive shapes, typography, and color.",
                images: []
            },
            {
                title: "02 — EARLY EXPLORATION",
                text: "Early experiments helped establish the visual system.",
                images: []
            },
            {
                title: "03 — WHY THIS DIRECTION?",
                text: "The final direction balances personality with a clean visual structure.",
                images: []
            }
        ]
    },


    butterfly: {
        title: "Butterfly",
        category: "MOTION + BRANDING",
        description: "A visual exploration centered around butterflies, movement, and transformation.",
        role: "Designer + Motion Designer",
        tools: "Illustrator, After Effects",
        year: "2026",
        deliverables: "Identity, Motion Graphics, Illustration",
        projectCategory: "Motion Design",

        hero: "images/Butterfly.png",

        gallery: [],

        challenge: "Translate the visual identity into a motion system that feels organic.",

        process: [
            {
                title: "01 — THE IDEA",
                text: "The concept began with butterflies revealing the identity through movement.",
                images: []
            },
            {
                title: "02 — EARLY EXPLORATION",
                text: "Different wing movements and compositions were explored.",
                images: []
            },
            {
                title: "03 — WHY THIS DIRECTION?",
                text: "The final animation uses movement to gradually reveal the wordmark.",
                images: []
            }
        ]
    },


    reverie: {
        title: "Reverie",
        category: "UI/UX + ILLUSTRATION",
        description: "A fashion dress-up experience combining character illustration, customization, and interactive play.",
        role: "UI/UX Designer + Illustrator",
        tools: "Figma, Illustrator, HTML, CSS, JavaScript",
        year: "2026",
        deliverables: "UI/UX, Character Design, Prototype",
        projectCategory: "Product Design",

        hero: "images/Dress.png",

        gallery: [],

        challenge: "Create a dress-up experience that gives users creative freedom without overwhelming the interface.",

        process: [
            {
                title: "01 — THE IDEA",
                text: "The concept began as a digital fashion playground.",
                images: []
            },
            {
                title: "02 — EARLY EXPLORATION",
                text: "Interface layouts and customization controls were explored.",
                images: []
            },
            {
                title: "03 — WHY THIS DIRECTION?",
                text: "The final direction emphasizes the character while keeping controls easy to navigate.",
                images: []
            }
        ]
    },


    notebook: {
        title: "Web Lab",
        category: "WEB DEVELOPMENT + EDUCATION",
        description: "A playful browser-based coding environment designed to make beginner HTML and CSS workshops more approachable.",
        role: "Designer + Developer",
        tools: "HTML, CSS, JavaScript",
        year: "2026",
        deliverables: "UI Design, Front-End Development, Workshop Tool",
        projectCategory: "Web Development",

        hero: "images/Notebook.gif",

        gallery: [],

        challenge: "Make learning code feel approachable without requiring students to download development software.",

        process: [
            {
                title: "01 — THE IDEA",
                text: "The interface was inspired by notebooks, stickers, and playful learning tools.",
                images: []
            },
            {
                title: "02 — EARLY EXPLORATION",
                text: "Several layouts were tested to balance the code editor with the live preview.",
                images: []
            },
            {
                title: "03 — WHY THIS DIRECTION?",
                text: "The final interface combines coding tools with a friendly notebook-inspired visual system.",
                images: []
            }
        ]
    },


    amorous: {
        title: "Amorous",
        category: "ILLUSTRATION + STORYTELLING",
        description: "A visual storytelling project centered around a modern interpretation of Cupid mythology.",
        role: "Illustrator + Storyteller",
        tools: "Illustrator, Photoshop",
        year: "2026",
        deliverables: "Illustration, Character Design, Story Development",
        projectCategory: "Illustration",

        hero: "images/Amorous.png",

        gallery: [],

        challenge: "Develop a recognizable visual world around a contemporary interpretation of Cupid.",

        process: [
            {
                title: "01 — THE IDEA",
                text: "The project began by reimagining Cupid mythology for a contemporary young audience.",
                images: []
            },
            {
                title: "02 — EARLY EXPLORATION",
                text: "Character silhouettes, environments, and visual motifs were explored.",
                images: []
            },
            {
                title: "03 — WHY THIS DIRECTION?",
                text: "The final direction combines romantic imagery with playful modern character design.",
                images: []
            }
        ]
    },


    menace: {
        title: "Menace",
        category: "CHARACTER DESIGN + STORYTELLING",
        description: "An alien cat with ambitions far larger than his tiny body.",
        role: "Illustrator + Storyteller",
        tools: "Illustrator, After Effects",
        year: "2026",
        deliverables: "Character Design, Illustration, Motion",
        projectCategory: "Illustration",

        hero: "images/CatProject.png",

        gallery: [],

        challenge: "Create a character who feels simultaneously threatening, ridiculous, and cute.",

        process: [
            {
                title: "01 — THE IDEA",
                text: "The concept contrasts Menace's plans for domination with his harmless appearance.",
                images: []
            },
            {
                title: "02 — EARLY EXPLORATION",
                text: "Expressions, poses, and proportions were explored to establish his personality.",
                images: []
            },
            {
                title: "03 — WHY THIS DIRECTION?",
                text: "The final character balances villainous confidence with visual comedy.",
                images: []
            }
        ]
    }

};



document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".carousel-arrow.prev");
    const nextBtn = document.querySelector(".carousel-arrow.next");
    const heroSection = document.querySelector("#hero");

    let currentIndex = 0;


    function goToSlide(index) {

        if (!slides.length) return;

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }

        currentIndex = index;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });

    }


    prevBtn?.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
    });


    nextBtn?.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
    });


    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            if (index < slides.length) {
                goToSlide(index);
            }

        });

    });


    let touchStartX = 0;


    heroSection?.addEventListener(
        "touchstart",
        e => {
            touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true }
    );


    heroSection?.addEventListener(
        "touchend",
        e => {

            const touchEndX =
                e.changedTouches[0].screenX;

            if (touchEndX < touchStartX - 40) {
                goToSlide(currentIndex + 1);
            }

            if (touchEndX > touchStartX + 40) {
                goToSlide(currentIndex - 1);
            }

        },
        { passive: true }
    );



    const modal =
        document.querySelector("#project-modal");

    const projectCards =
        document.querySelectorAll(".project");

    const closeButton =
        modal?.querySelector(".modal-close");


    function openProject(projectID) {

        const project =
            projects[projectID];

        if (!project || !modal) return;


        const title =
            modal.querySelector(".project-title");


        if (title) {

            const textNode =
                Array.from(title.childNodes)
                    .find(
                        node =>
                            node.nodeType === Node.TEXT_NODE
                    );

            if (textNode) {
                textNode.textContent =
                    project.title + " ";
            }

        }


        setText(
            ".project-category",
            project.category
        );

        setText(
            ".project-desc",
            project.description
        );

        setText(
            '[data-meta="role"]',
            project.role
        );

        setText(
            '[data-meta="tools"]',
            project.tools
        );

        setText(
            '[data-meta="year"]',
            project.year
        );

        setText(
            '[data-meta="deliverables"]',
            project.deliverables
        );

        setText(
            '[data-meta="category"]',
            project.projectCategory
        );


        renderHero(project);
        renderGallery(project);
        renderProcess(project);


        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";


        const container =
            modal.querySelector(
                ".modal-container"
            );

        if (container) {
            container.scrollTop = 0;
        }

    }



    function setText(selector, value) {

        const element =
            modal?.querySelector(selector);

        if (element) {
            element.textContent =
                value || "";
        }

    }



    function renderHero(project) {

        const container =
            modal.querySelector(
                ".project-hero-container"
            );

        if (!container) return;


        container.innerHTML = "";


        if (!project.hero) {

            container.style.display =
                "none";

            return;

        }


        container.style.display = "";


        const image =
            document.createElement("img");


        image.src =
            project.hero;

        image.alt =
            `${project.title} project`;

        image.className =
            "project-hero-image";


        container.appendChild(image);

    }



    function renderGallery(project) {

        const gallery =
            modal.querySelector(
                ".project-gallery"
            );

        if (!gallery) return;


        gallery.innerHTML = "";


        if (!project.gallery?.length) {

            gallery.style.display =
                "none";

            return;

        }


        gallery.style.display = "";


        project.gallery.forEach(
            (source, index) => {

                const wrapper =
                    document.createElement(
                        "div"
                    );


                wrapper.className =
                    "project-gallery-item";


                const image =
                    document.createElement(
                        "img"
                    );


                image.src =
                    source;

                image.alt =
                    `${project.title} project image ${index + 1}`;

                image.loading =
                    "lazy";


                wrapper.appendChild(
                    image
                );


                gallery.appendChild(
                    wrapper
                );

            }
        );

    }



    function renderProcess(project) {

        const challenge =
            modal.querySelector(
                ".challenge-card .process-text"
            );


        if (challenge) {
            challenge.textContent =
                project.challenge || "";
        }


        const existingCards =
            modal.querySelectorAll(
                '[data-process="idea"], [data-process="exploration"], [data-process="direction"]'
            );


        project.process.forEach(
            (step, index) => {

                const card =
                    existingCards[index];


                if (!card) return;


                card.style.display =
                    "";


                const title =
                    card.querySelector(
                        ".process-step"
                    );


                const text =
                    card.querySelector(
                        ".process-text"
                    );


                const track =
                    card.querySelector(
                        ".process-scroll-track"
                    );


                if (title) {
                    title.textContent =
                        step.title;
                }


                if (text) {
                    text.textContent =
                        step.text;
                }


                if (track) {

                    track.innerHTML = "";


                    step.images.forEach(
                        (source, imageIndex) => {

                            const wrapper =
                                document.createElement(
                                    "div"
                                );


                            wrapper.className =
                                "process-image-wrap";


                            if (imageIndex === 0) {

                                wrapper.classList.add(
                                    "active"
                                );

                            }


                            const image =
                                document.createElement(
                                    "img"
                                );


                            image.src =
                                source;

                            image.alt =
                                `${project.title} process`;

                            image.className =
                                "process-sketch-img";


                            wrapper.appendChild(
                                image
                            );


                            track.appendChild(
                                wrapper
                            );

                        }
                    );


                    track.style.display =
                        step.images.length
                            ? ""
                            : "none";

                }

            }
        );


        existingCards.forEach(
            (card, index) => {

                if (
                    index >=
                    project.process.length
                ) {

                    card.style.display =
                        "none";

                }

            }
        );


        const moodCard =
            modal.querySelector(
                '[data-process="mood"]'
            );


        if (moodCard) {
            moodCard.style.display =
                "none";
        }

    }



    projectCards.forEach(card => {

        const openCard = () => {

            openProject(
                card.dataset.project
            );

        };


        card.addEventListener(
            "click",
            openCard
        );


        card.addEventListener(
            "keydown",
            e => {

                if (
                    e.key === "Enter" ||
                    e.key === " "
                ) {

                    e.preventDefault();
                    openCard();

                }

            }
        );

    });



    function closeModal() {

        if (!modal) return;


        modal.classList.remove(
            "open"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }


    closeButton?.addEventListener(
        "click",
        closeModal
    );


    modal?.addEventListener(
        "click",
        e => {

            if (e.target === modal) {
                closeModal();
            }

        }
    );


    document.addEventListener(
        "keydown",
        e => {

            if (e.key === "Escape") {
                closeModal();
            }

        }
    );



    const heroNav =
        document.querySelector(
            ".hero-nav"
        );

    const menuToggle =
        document.querySelector(
            ".menu-toggle"
        );

    const menuOverlay =
        document.querySelector(
            ".mobile-menu-overlay"
        );


    menuToggle?.addEventListener(
        "click",
        e => {

            e.stopPropagation();

            heroNav?.classList.toggle(
                "menu-open"
            );

        }
    );


    menuOverlay?.addEventListener(
        "click",
        e => {

            if (
                e.target ===
                menuOverlay
            ) {

                heroNav?.classList.remove(
                    "menu-open"
                );

            }

        }
    );


    document
        .querySelectorAll(
            ".mobile-nav-link"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    heroNav?.classList.remove(
                        "menu-open"
                    );

                }
            );

        });



    const chatbotToggle =
        document.getElementById(
            "chatbot-toggle"
        );

    const chatbotWindow =
        document.getElementById(
            "chatbot-container"
        );

    const chatbotClose =
        document.querySelector(
            ".chatbot-close"
        );

    const chatbotForm =
        document.getElementById(
            "chatbot-form"
        );

    const chatbotInput =
        document.getElementById(
            "chatbot-input"
        );

    const chatMessages =
        document.getElementById(
            "chatbot-messages"
        );

    const chatOptions =
        document.getElementById(
            "chat-options-container"
        );


    let selectedTopic = "";
    let selectedDetails = "";
    let chatStep = "topic";


    chatbotToggle?.addEventListener(
        "click",
        () => {

            chatbotWindow?.classList.toggle(
                "open"
            );

        }
    );


    chatbotClose?.addEventListener(
        "click",
        () => {

            chatbotWindow?.classList.remove(
                "open"
            );

        }
    );


    chatOptions?.addEventListener(
        "click",
        e => {

            const button =
                e.target.closest(
                    ".chat-option-btn"
                );


            if (!button) return;


            selectedTopic =
                button.dataset.topic;


            appendMessage(
                button.textContent.trim(),
                "user-message"
            );


            chatOptions.style.display =
                "none";


            appendMessage(
                `Could you please share a few brief details about what you are looking for?
                <br>
                <button
                    id="reset-topic-btn"
                    style="
                        background:none;
                        border:none;
                        color:var(--accent-pink);
                        font-size:0.75rem;
                        cursor:pointer;
                        padding:0;
                        margin-top:0.4rem;
                        text-decoration:underline;
                    "
                >
                    ← Choose a different topic
                </button>`,
                "bot-message"
            );


            chatStep =
                "details";

        }
    );


    chatMessages?.addEventListener(
        "click",
        e => {

            if (
                e.target.id !==
                "reset-topic-btn"
            ) return;


            selectedTopic = "";
            selectedDetails = "";
            chatStep = "topic";


            chatOptions.style.display =
                "flex";


            appendMessage(
                "No problem at all. Let's select another option:",
                "bot-message"
            );

        }
    );


    chatbotForm?.addEventListener(
        "submit",
        e => {

            e.preventDefault();


            const text =
                chatbotInput.value.trim();


            if (!text) return;


            appendMessage(
                text,
                "user-message"
            );


            chatbotInput.value = "";


            if (
                chatStep ===
                "details"
            ) {

                selectedDetails =
                    text;


                appendMessage(
                    "Got it. Lastly, what is your email address so I can review your inquiry and get back to you?",
                    "bot-message"
                );


                chatStep =
                    "email";

                return;

            }


            if (
                chatStep ===
                "email"
            ) {

                const userEmail =
                    text;


                appendMessage(
                    "Thank you! Opening your email client now...",
                    "bot-message"
                );


                const subject =
                    encodeURIComponent(
                        `Portfolio Inquiry: ${selectedTopic || "General"}`
                    );


                const body =
                    encodeURIComponent(
`Hi Felicia,

I'm reaching out via your portfolio chatbot.

Project Interest: ${selectedTopic || "General Inquiry"}
Details: ${selectedDetails}

My Email: ${userEmail}`
                    );


                setTimeout(
                    () => {

                        window.location.href =
                            `mailto:feliciamp73@yahoo.com?subject=${subject}&body=${body}`;

                    },
                    800
                );


                return;

            }


            selectedTopic =
                "General Inquiry";

            selectedDetails =
                text;


            appendMessage(
                "Thanks! What is your email address so I can review your inquiry and get back to you?",
                "bot-message"
            );


            chatStep =
                "email";

        }
    );


    function appendMessage(
        text,
        className
    ) {

        if (!chatMessages) return;


        const message =
            document.createElement(
                "div"
            );


        message.className =
            `chat-message ${className}`;


        message.innerHTML =
            text;


        chatMessages.appendChild(
            message
        );


        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }

});



function nextModalSlide(track) {

    const slides =
        track.querySelectorAll(
            ".process-image-wrap"
        );


    if (slides.length <= 1) return;


    const current =
        [...slides].findIndex(
            slide =>
                slide.classList.contains(
                    "active"
                )
        );


    slides[current]
        .classList.remove(
            "active"
        );


    slides[
        (current + 1) %
        slides.length
    ].classList.add(
        "active"
    );

}



window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                document.body.classList.add(
                    "loaded"
                );

            },
            1000
        );

    }
);