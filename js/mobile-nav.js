document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu when hamburger icon is clicked
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnMenuBtn && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});
