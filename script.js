// Simple JavaScript for the link-in-bio style website

document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('.profile-section, .action-buttons, .video-section, .text-links, .social-section');
    
    elements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.1}s`;
    });

    // Add click tracking for analytics (optional)
    const trackClick = (elementName) => {
        console.log(`Clicked: ${elementName}`);
        // Add your analytics tracking here
        // Example: gtag('event', 'click', { 'event_category': 'link', 'event_label': elementName });
    };

    // Track clicks on action buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const buttonText = this.querySelector('span').textContent;
            trackClick(`Action Button: ${buttonText}`);
        });
    });

    // Track clicks on text links
    document.querySelectorAll('.text-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.querySelector('span').textContent;
            trackClick(`Text Link: ${linkText}`);
        });
    });

    // Track clicks on social links
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.classList[1]; // linkedin, twitter, etc.
            trackClick(`Social Link: ${platform}`);
        });
    });

    // Add smooth hover effects
    const addHoverEffect = (element) => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    };

    // Apply hover effects to interactive elements
    document.querySelectorAll('.action-btn, .text-link, .social-link').forEach(addHoverEffect);

    // Handle profile image loading
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // If image fails to load, show a placeholder
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'profile-placeholder';
            placeholder.innerHTML = '<i class="fas fa-user"></i>';
            placeholder.style.cssText = `
                width: 120px;
                height: 120px;
                border-radius: 50%;
                background-color: #f0f0f0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48px;
                color: #ccc;
                margin: 0 auto 20px;
            `;
            this.parentNode.appendChild(placeholder);
        });
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Add focus indicators for keyboard navigation
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        // Remove focus indicators when using mouse
        document.body.classList.remove('keyboard-navigation');
    });

    // Add ripple effect to buttons
    const addRippleEffect = (element) => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    };

    // Apply ripple effect to action buttons
    document.querySelectorAll('.action-btn').forEach(addRippleEffect);

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .keyboard-navigation .action-btn:focus,
        .keyboard-navigation .text-link:focus,
        .keyboard-navigation .social-link:focus {
            outline: 2px solid #007bff;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);

    // Simple form validation for any future contact forms
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Add loading states for external links
    const addLoadingState = (element) => {
        element.addEventListener('click', function(e) {
            if (this.href && this.href.startsWith('http')) {
                this.style.opacity = '0.7';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.style.pointerEvents = 'auto';
                }, 1000);
            }
        });
    };

    // Apply loading states to external links
    document.querySelectorAll('a[href^="http"]').forEach(addLoadingState);

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.profile-section, .action-buttons, .video-section, .text-links, .social-section').forEach(el => {
        observer.observe(el);
    });

    // Add copy-to-clipboard functionality for any text content
    const addCopyFunctionality = (element) => {
        element.addEventListener('dblclick', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show a temporary notification
                const notification = document.createElement('div');
                notification.textContent = 'Copied to clipboard!';
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #28a745;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    z-index: 1000;
                    font-size: 14px;
                `;
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 2000);
            });
        });
    };

    // Apply copy functionality to profile name and description
    document.querySelectorAll('.profile-name, .profile-description').forEach(addCopyFunctionality);

    console.log('Personal website loaded successfully! 🎉');
});