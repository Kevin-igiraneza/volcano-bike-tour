// Volcano Bike Tour - Interactivity Script

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

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
                    const offsetPosition = targetElement.offsetTop - 80;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
    const allImages = [
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
    const previewCount = 7; // Show 7 images + 1 "View All" card

    const galleryGrid = document.getElementById('dynamic-gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    function renderPreviewGallery() {
        galleryGrid.innerHTML = '';
        const previewImages = allImages.slice(0, previewCount);

        previewImages.forEach((imgName, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `<img src="images/${imgName}" alt="Volcano Bike Tour Rwanda">`;
            item.addEventListener('click', () => openLightbox(index));
            galleryGrid.appendChild(item);
        });

        // Add "View All" Card
        const viewAllCard = document.createElement('div');
        viewAllCard.className = 'gallery-item view-all-card';
        viewAllCard.innerHTML = `
            <i class="fas fa-images"></i>
            <h4>View All</h4>
            <p>${allImages.length} Photos</p>
        `;
        viewAllCard.addEventListener('click', () => openLightbox(0));
        galleryGrid.appendChild(viewAllCard);
    }

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

    // 6. Booking Form Submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button');
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending...';
            setTimeout(() => {
                alert('Thank you! We will contact you shortly via WhatsApp or Email.');
                bookingForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = 'Send Booking Inquiry';
            }, 1500);
        });
    }

    // 7. Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('reveal');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .tour-card, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    const revealStyle = document.createElement('style');
    revealStyle.innerHTML = `.reveal { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(revealStyle);
});