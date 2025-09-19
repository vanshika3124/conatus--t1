document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainHeader = document.getElementById('main-header');
    const cartCountEl = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const notificationPopup = document.getElementById('notification-popup');
    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');
    const formMessage = document.getElementById('form-message');

    let cartCount = 0;

     
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

     
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

     
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountEl.textContent = cartCount;
            showNotification();
        });
    });

    function showNotification() {
        notificationPopup.classList.add('show');
        setTimeout(() => {
            notificationPopup.classList.remove('show');
        }, 3000);
    }
    
     
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (emailInput.value && emailInput.checkValidity()) {
            formMessage.textContent = `Thanks for subscribing, ${emailInput.value}!`;
            formMessage.style.color = '#16A34A';  
            emailInput.value = '';
            setTimeout(() => formMessage.textContent = '', 4000);
        } else {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = '#EF4444';  
        }
    });

    // Intersection Observer for fade-in animations
    const animatedElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});