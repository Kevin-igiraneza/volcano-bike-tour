// Volcano Bike Tour - Interactivity Script

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Hero Section Slideshow
    const heroImageSlides = [
        'images/WhatsApp Image 2026-04-22 at 10.04.01 AM.jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.04.15 AM (1).jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.03.50 AM.jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.04.13 AM.jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.03.51 AM (1).jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.03.52 AM.jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.03.54 AM.jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.03.56 AM.jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.03.59 AM.jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.04.00 AM.jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.04.03 AM.jpeg',
        'images/WhatsApp Image 2026-04-22 at 10.04.06 AM.jpeg'
    ];
    let currentSlide = 0;
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundImage = `url('${heroImageSlides[currentSlide]}')`;
        setInterval(() => {
            currentSlide = (currentSlide + 1) % heroImageSlides.length;
            heroSection.style.backgroundImage = `url('${heroImageSlides[currentSlide]}')`;
        }, 3000); // Change image every 3 seconds
    }

    // 1. Sticky Navbar Effect on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightNavOnScroll();
    });

    // 2. Mobile Menu Toggle
    const navOverlay = document.getElementById('nav-overlay');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    hamburger.addEventListener('click', toggleMenu);

    navOverlay.addEventListener('click', toggleMenu);

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // 3. Smooth Scrolling
    links.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' }); // CSS scroll-padding-top handles offset
                }
            }
        });
    });

    // 4. Highlight Nav Links on Scroll
    function highlightNavOnScroll() {
        let scrollY = window.pageYOffset;
        document.querySelectorAll('section').forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-links a[href*=' + sectionId + ']')?.classList.add('active');
            } else {
                document.querySelector('.nav-links a[href*=' + sectionId + ']')?.classList.remove('active');
            }
        });
    }

    // 5. Advanced Gallery with Preview Grid & Full View Modal
    let allImages = [
        "WhatsApp Image 2026-04-22 at 10.01.50 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.01.57 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.02.05 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.11 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.19 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.25 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.50 AM (1).jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.50 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.51 AM (1).jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.51 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.52 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.54 AM (3).jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.54 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.56 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.57 AM (1).jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.59 AM (1).jpeg",
        "WhatsApp Image 2026-04-22 at 10.03.59 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.00 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.01 AM (1).jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.01 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.02 AM (2).jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.03 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.04 AM (1).jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.05 AM (1).jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.06 AM (2).jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.06 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.10 AM (2).jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.12 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.13 AM (1).jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.13 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.15 AM (1).jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.15 AM (2).jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.15 AM.jpeg",
        "WhatsApp Image 2026-04-22 at 10.04.16 AM.jpeg"
    ];

    let currentImgIndex = 0;
    let currentFilter = 'all';
    
    // Store original allImages copy safely since we overwrite it during filtering
    const originalImagesState = [...allImages];

    // Assign categories securely to images based on index pattern
    const categorizedImages = originalImagesState.map((img, index) => {
        let cat = 'mountain';
        if (index % 3 === 1) cat = 'road';
        if (index % 3 === 2) cat = 'hiking';
        return { src: img, category: cat };
    });

    const galleryGrid = document.getElementById('dynamic-gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderPreviewGallery() {
        galleryGrid.innerHTML = '';
        
        let filteredImages = categorizedImages;
        if (currentFilter !== 'all') {
            filteredImages = categorizedImages.filter(img => img.category === currentFilter);
        }

        // Show max 8 images per filter view for grid neatness
        const imagesToDisplay = filteredImages.slice(0, 8);

        imagesToDisplay.forEach((imgObj, i) => {
            const item = document.createElement('div');
            item.className = 'gallery-item fade-up visible'; // Ensure immediate view on filter
            
            item.innerHTML = `
                <img src="images/${imgObj.src}" alt="${imgObj.category} in Rwanda" loading="lazy">
            `;
            
            item.addEventListener('click', () => {
                // Update the lightbox active array to match exactly what's visible
                allImages = filteredImages.map(f => f.src);
                openLightbox(i);
            });
            galleryGrid.appendChild(item);
        });

        // Add View All Card if necessary (optional bonus touch)
        if (filteredImages.length > 8) {
            const viewAllCard = document.createElement('div');
            viewAllCard.className = 'gallery-item view-all-card fade-up visible';
            viewAllCard.innerHTML = `<span class="view-all-text">VIEW ALL ${filteredImages.length}</span>`;
            viewAllCard.addEventListener('click', () => {
                allImages = filteredImages.map(f => f.src);
                openLightbox(0);
            });
            galleryGrid.appendChild(viewAllCard);
        }
    }

    // Filter Navigation Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            
            // Re-render gallery
            renderPreviewGallery();
        });
    });

    function openLightbox(index) {
        currentImgIndex = index;
        lightbox.style.display = 'flex';
        updateLightbox();
        document.body.style.overflow = 'hidden';
    }

    function updateLightbox() {
        lightboxImg.src = `images/${allImages[currentImgIndex]}`;
        lightboxCaption.innerText = `Adventure Photo ${currentImgIndex + 1} of ${allImages.length}`;
    }

    document.querySelector('.close-lightbox').addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    document.getElementById('lightbox-next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex + 1) % allImages.length;
        updateLightbox();
    });

    document.getElementById('lightbox-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex - 1 + allImages.length) % allImages.length;
        updateLightbox();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Keyboard Navigation for Lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') currentImgIndex = (currentImgIndex + 1) % allImages.length;
            if (e.key === 'ArrowLeft') currentImgIndex = (currentImgIndex - 1 + allImages.length) % allImages.length;
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            updateLightbox();
        }
    });

    renderPreviewGallery();

    // 6. Booking Form Submission & Validation
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic Frontend Validation Check
            const nameInput = bookingForm.querySelector('input[type="text"]').value.trim();
            const emailInput = bookingForm.querySelector('input[type="email"]').value.trim();
            if(!nameInput || !emailInput) {
                alert('Please fill out your name and email completely.');
                return;
            }

            const submitBtn = bookingForm.querySelector('button');
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending...';
            setTimeout(() => {
                alert(`Thank you, ${nameInput}! We will contact you shortly via WhatsApp or Email.`);
                bookingForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = 'Send Booking Inquiry';
            }, 1500);
        });
    }

    // 7. Dark Mode Toggle with LocalStorage
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const bodyEl = document.body;

    // Check saved preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        bodyEl.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkModeToggle.addEventListener('click', () => {
        bodyEl.classList.toggle('dark-mode');
        let theme = 'light';

        if (bodyEl.classList.contains('dark-mode')) {
            theme = 'dark';
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        localStorage.setItem('theme', theme);
    });

    // 8. Initialize Leaflet JS Map (Musanze, Rwanda)
    const mapEl = document.getElementById('map');
    if (mapEl && typeof L !== 'undefined') {
        const musanzeCoords = [-1.4988, 29.6385];
        const map = L.map('map').setView(musanzeCoords, 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker(musanzeCoords).addTo(map)
            .bindPopup('<b>Volcano Bike Tour Base Camp</b><br>Musanze, Rwanda')
            .openPopup();
    }

    // 9. Scroll Animations via IntersectionObserver (Enhanced performant CSS-based)
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

    // Assuming HTML elements have the '.fade-up' class added to them.
    // Also auto-add to cards for cascading animation
    document.querySelectorAll('.tour-card, .feature-card, .testimonial-card').forEach((el, index) => {
        el.classList.add('fade-up');
        el.style.transitionDelay = `${index * 0.1}s`; // Stagger effect
        fadeObserver.observe(el);
    });

    document.querySelectorAll('.fade-up').forEach(el => {
        fadeObserver.observe(el);
    });
});