// ===== WELCOME NAME FUNCTIONALITY =====
function setUserName() {
    const userNameInput = document.getElementById('userName');
    const welcomeGreeting = document.getElementById('welcomeGreeting');
    const nameInputWrapper = document.getElementById('nameInputWrapper');
    
    if (userNameInput && welcomeGreeting && nameInputWrapper) {
        const name = userNameInput.value.trim();
        
        if (name !== '') {
            // Save name to localStorage
            localStorage.setItem('userName', name);
            
            // Update greeting
            welcomeGreeting.textContent = `Hi, ${name}!`;
            
            // Hide input wrapper
            nameInputWrapper.classList.add('hidden');
        }
    }
}

// Load saved name on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('userName');
    const welcomeGreeting = document.getElementById('welcomeGreeting');
    const nameInputWrapper = document.getElementById('nameInputWrapper');
    
    if (savedName && welcomeGreeting && nameInputWrapper) {
        welcomeGreeting.textContent = `Hi, ${savedName}!`;
        nameInputWrapper.classList.add('hidden');
    }
    
    // Allow Enter key to set name
    const userNameInput = document.getElementById('userName');
    if (userNameInput) {
        userNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                setUserName();
            }
        });
    }
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ===== SMOOTH SCROLLING & ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const messageError = document.getElementById('messageError');

// Success message element
const successMessage = document.getElementById('successMessage');

// Only run form validation if form exists
if (!contactForm) {
    console.log('Contact form not found on this page');
}

// Validation patterns
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
const namePattern = /^[a-zA-Z\s]{2,50}$/;

// Validation functions
function validateName() {
    const nameValue = nameInput.value.trim();
    
    if (nameValue === '') {
        showError(nameInput, nameError, 'Name is required');
        return false;
    } else if (nameValue.length < 2) {
        showError(nameInput, nameError, 'Name must be at least 2 characters');
        return false;
    } else if (nameValue.length > 50) {
        showError(nameInput, nameError, 'Name must not exceed 50 characters');
        return false;
    } else if (!namePattern.test(nameValue)) {
        showError(nameInput, nameError, 'Name can only contain letters and spaces');
        return false;
    } else {
        showSuccess(nameInput, nameError);
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    
    if (emailValue === '') {
        showError(emailInput, emailError, 'Email is required');
        return false;
    } else if (!emailPattern.test(emailValue)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        return false;
    } else {
        showSuccess(emailInput, emailError);
        return true;
    }
}

function validatePhone() {
    const phoneValue = phoneInput.value.trim();
    
    if (phoneValue === '') {
        showError(phoneInput, phoneError, 'Phone number is required');
        return false;
    } else if (!phonePattern.test(phoneValue)) {
        showError(phoneInput, phoneError, 'Please enter a valid phone number');
        return false;
    } else if (phoneValue.replace(/\D/g, '').length < 10) {
        showError(phoneInput, phoneError, 'Phone number must be at least 10 digits');
        return false;
    } else {
        showSuccess(phoneInput, phoneError);
        return true;
    }
}

function validateMessage() {
    const messageValue = messageInput.value.trim();
    
    if (messageValue === '') {
        showError(messageInput, messageError, 'Message is required');
        return false;
    } else if (messageValue.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        return false;
    } else if (messageValue.length > 500) {
        showError(messageInput, messageError, 'Message must not exceed 500 characters');
        return false;
    } else {
        showSuccess(messageInput, messageError);
        return true;
    }
}

// Helper functions to show error and success states
function showError(input, errorElement, message) {
    input.classList.add('error');
    input.classList.remove('success');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function showSuccess(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Real-time validation on input
if (contactForm && nameInput && emailInput && phoneInput && messageInput) {
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    messageInput.addEventListener('blur', validateMessage);

    // Real-time validation on input change (for better UX)
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error')) {
            validateName();
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('error')) {
            validateEmail();
        }
    });

    phoneInput.addEventListener('input', () => {
        if (phoneInput.classList.contains('error')) {
            validatePhone();
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.classList.contains('error')) {
            validateMessage();
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Hide success message if it was previously shown
    successMessage.classList.remove('show');
    
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();
    
    // Check if all validations passed
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        // Show loading state
        const submitButton = contactForm.querySelector('.btn-submit');
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Get form data
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                message: messageInput.value.trim()
            };
            
            // Log form data to console (for demonstration)
            console.log('Form submitted successfully!');
            console.log('Form Data:', formData);
            
            // Display submitted data on HTML
            const submittedDataDiv = document.getElementById('submittedData');
            const displayName = document.getElementById('displayName');
            const displayEmail = document.getElementById('displayEmail');
            const displayPhone = document.getElementById('displayPhone');
            const displayMessage = document.getElementById('displayMessage');
            
            if (submittedDataDiv && displayName && displayEmail && displayPhone && displayMessage) {
                displayName.textContent = formData.name;
                displayEmail.textContent = formData.email;
                displayPhone.textContent = formData.phone;
                displayMessage.textContent = formData.message;
                
                // Show submitted data section
                submittedDataDiv.style.display = 'block';
            }
            
            // Remove loading state
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
            
            // Show success message
            successMessage.classList.add('show');
            
            // Reset form
            contactForm.reset();
            
            // Remove success classes from inputs
            [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
                input.classList.remove('success');
            });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
            
            // Scroll to submitted data
            if (submittedDataDiv) {
                submittedDataDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 2000); // Simulate 2 second delay for form submission
    } else {
        // Scroll to first error
        const firstError = contactForm.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
    }
    });

    // ===== CHARACTER COUNTER FOR MESSAGE =====
    const maxMessageLength = 500;
    messageInput.addEventListener('input', function() {
        const currentLength = this.value.length;
        const remaining = maxMessageLength - currentLength;
        
        // You can add a character counter display here if desired
        if (remaining < 0) {
            this.value = this.value.substring(0, maxMessageLength);
        }
    });
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and stat items
const animatedElements = document.querySelectorAll('.service-card, .stat-item, .info-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== PREVENT FORM RESUBMISSION ON PAGE REFRESH =====
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===== ACCESSIBILITY: KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
        navMenu.classList.remove('active');
    }
});

// ===== IMAGE CAROUSEL FOR HERO SECTION =====
const carouselImages = [
    'assets/orang ganteng.jpg',
    'assets/orang ganteng 2.jpg',
    'assets/orang ganteng 3.jpg'
];

let currentImageIndex = 0;
const carouselImage = document.getElementById('carouselImage');

function changeCarouselImage() {
    if (carouselImage) {
        // Fade out
        carouselImage.style.opacity = '0';
        
        setTimeout(() => {
            // Change image
            currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
            carouselImage.src = carouselImages[currentImageIndex];
            
            // Fade in
            carouselImage.style.opacity = '1';
        }, 500); // Wait for fade out to complete
    }
}

// Change image every 3 seconds
if (carouselImage) {
    setInterval(changeCarouselImage, 3000);
}

console.log('TechVision Solutions - Website Loaded Successfully! 🚀');
