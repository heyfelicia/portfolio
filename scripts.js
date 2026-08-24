// Carousel Logic

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


// Modal

document.addEventListener("DOMContentLoaded", () => {
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


// Mobile Menu Logic

const heroNav = document.querySelector('.hero-nav');
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.mobile-menu-overlay');

if (menuToggle && heroNav) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        heroNav.classList.toggle('menu-open');
    });

    // Clicking the backdrop overlay closes the menu
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            heroNav.classList.remove('menu-open');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            heroNav.classList.remove('menu-open');
        });
    });
}


// ChatBot 

document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-container');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatMessages = document.getElementById('chatbot-messages');
    const chatOptionsContainer = document.getElementById('chat-options-container');

    let selectedTopic = '';
    let selectedDetails = '';
    let userEmail = '';
    let chatStep = 'topic'; // 'topic', 'details', 'email'

    // Safety check so we don't error out if elements are missing
    if (!chatbotToggle || !chatbotWindow) return;

    // Toggle open/close reliably
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('open');
        
        // If opening for the first time, drop a polite and welcoming greeting
        if (chatbotWindow.classList.contains('open') && chatMessages && chatMessages.children.length === 0) {
            appendMessage(`Hello! Thank you for stopping by. Please select an option below or type a message to get started.`, 'bot-message');
        }
    });

    if (chatbotClose) {
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('open');
        });
    }

    // Handle topic option clicks
    if (chatOptionsContainer) {
        chatOptionsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.chat-option-btn');
            if (btn) {
                selectedTopic = btn.getAttribute('data-topic');
                appendMessage(btn.textContent.replace('✦', '').trim(), 'user-message');
                chatOptionsContainer.style.display = 'none';

                // Professional prompt with a clean reset option
                appendMessage(`Could you please share a few brief details about what you are looking for? <br><button id="reset-topic-btn" style="background:none; border:none; color:var(--accent-pink); font-size:0.75rem; cursor:pointer; padding:0; margin-top:0.4rem; text-decoration:underline;">← Choose a different topic</button>`, 'bot-message');
                chatStep = 'details';
            }
        });
    }

    // Handle dynamic reset button click
    if (chatMessages) {
        chatMessages.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'reset-topic-btn') {
                selectedTopic = '';
                selectedDetails = '';
                chatStep = 'topic';
                if (chatOptionsContainer) chatOptionsContainer.style.display = 'flex';
                appendMessage(`No problem at all. Let's select another option:`, 'bot-message');
            }
        });
    }

    // Handle text input submission
    if (chatbotForm) {
        chatbotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatbotInput.value.trim();
            if (!text) return;

            appendMessage(text, 'user-message');
            chatbotInput.value = '';

            if (chatStep === 'details') {
                selectedDetails = text;
                appendMessage(`Got it. Lastly, what is your email address so I can review your inquiry and get back to you?`, 'bot-message');
                chatStep = 'email';
            } else if (chatStep === 'email') {
                userEmail = text;
                appendMessage(`Thank you! Opening your email client now to send your message directly to Felicia...`, 'bot-message');
                
                // Redirect to email via mailto link
                setTimeout(() => {
                    const subject = encodeURIComponent(`Portfolio Inquiry: ${selectedTopic || 'General'}`);
                    const body = encodeURIComponent(`Hi Felicia,\n\nI'm reaching out via your portfolio chatbot.\n\nProject Interest: ${selectedTopic}\nDetails: ${selectedDetails}\n\nMy Email: ${userEmail}`);
                    window.location.href = `mailto:feliciamp73@yahoo.com?subject=${subject}&body=${body}`;
                }, 1200);
            } else {
                // Default flow fallback
                setTimeout(() => {
                    appendMessage(`Thank you for reaching out. You can also contact me directly at feliciamp73@yahoo.com.`, 'bot-message');
                }, 600);
            }
        });
    }

    function appendMessage(text, className) {
        if (!chatMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${className}`;
        msgDiv.innerHTML = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});




const imgElement = document.getElementById('felicia-img');
const starElement = document.getElementById('magic-star');

imgElement.addEventListener('click', () => {

    imgElement.src = 'images/Felicia-Smile.png';


    starElement.classList.remove('shoot-star'); 
    void starElement.offsetWidth; 
    starElement.classList.add('shoot-star');

    setTimeout(() => {
        imgElement.src = 'images/Felicia.png';
    }, 2000);
});







function nextModalSlide(track) {
    const slides = track.querySelectorAll('.process-image-wrap');
    let activeIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            activeIndex = index;
        }
    });

    slides[activeIndex].classList.remove('active');
    const nextIndex = (activeIndex + 1) % slides.length;
    slides[nextIndex].classList.add('active');
}