// Season filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.season-filter');
    const episodeCards = document.querySelectorAll('.episode-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedSeason = this.getAttribute('data-season');
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-custom-blue', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
            });
            
            this.classList.add('active', 'bg-custom-blue', 'text-white');
            this.classList.remove('bg-gray-100', 'text-gray-700');
            
            // Filter episodes
            episodeCards.forEach(card => {
                const cardSeason = card.getAttribute('data-season');
                
                if (selectedSeason === 'all' || cardSeason === selectedSeason) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('a');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        // Scrolled - add blur background and change text colors
        navbar.classList.add('bg-white/80', 'backdrop-blur-md');
        navbar.classList.remove('bg-transparent');
        
        // Change text colors to dark
        navLinks.forEach(link => {
            link.classList.remove('text-white', 'hover:text-amber-200');
            link.classList.add('text-gray-700', 'hover:text-amber-600');
            
            // Update underline colors
            const underline = link.querySelector('div');
            if (underline) {
                underline.classList.remove('bg-amber-200');
                underline.classList.add('bg-amber-600');
            }
        });
    } else {
        // At top - transparent background and white text
        navbar.classList.remove('bg-white/80', 'backdrop-blur-md');
        navbar.classList.add('bg-transparent');
        
        // Change text colors to white
        navLinks.forEach(link => {
            link.classList.remove('text-gray-700', 'hover:text-amber-600');
            link.classList.add('text-white', 'hover:text-amber-200');
            
            // Update underline colors
            const underline = link.querySelector('div');
            if (underline) {
                underline.classList.remove('bg-amber-600');
                underline.classList.add('bg-amber-200');
            }
        });
    }
});
