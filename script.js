// Episode Card Component
function createEpisodeCard(episode) {
    const imageClass = episode.imagePosition === 'top' ? 'episode-image-top' : '';
    const seasonDisplay = episode.seasonLabel || `Season ${episode.season}`;
    
    return `
        <div class="episode-card" data-season="${episode.season}">
            <div class="episode-image">
                <img src="${episode.image}" alt="${episode.name}" class="${imageClass}">
            </div>
            <div class="episode-content">
                <h3 class="episode-name">${episode.name}</h3>
                <p class="episode-title">${episode.title}</p>
                <p class="episode-description">${episode.description}</p>
                <div class="episode-footer">
                    ${episode.seasonLabel ? `<span class="episode-season">${seasonDisplay}</span>` : ''}
                    <div class="episode-buttons">
                        ${episode.hasAudio ? '<button class="btn-small btn-small-primary">Listen now</button>' : ''}
                        ${episode.hasTranscript ? '<button class="btn-transcript">Transcript</button>' : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate episodes grid
function generateEpisodesGrid() {
    const episodesGrid = document.querySelector('.episodes-grid');
    if (!episodesGrid) return;
    
    // Sort episodes by season (descending) and then by order within season
    const sortedEpisodes = episodesData.sort((a, b) => {
        if (a.season !== b.season) {
            return b.season - a.season; // Newer seasons first
        }
        return 0; // Keep original order within season
    });
    
    // Generate HTML for all episodes
    const episodesHTML = sortedEpisodes.map(episode => createEpisodeCard(episode)).join('');
    episodesGrid.innerHTML = episodesHTML;
}

// Season filter functionality
document.addEventListener('DOMContentLoaded', function() {
    // Generate episodes first
    generateEpisodesGrid();
    
    const filterButtons = document.querySelectorAll('.season-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedSeason = this.getAttribute('data-season');
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'btn-small-primary');
                btn.classList.add('season-filter-inactive');
            });
            
            this.classList.add('active', 'btn-small-primary');
            this.classList.remove('season-filter-inactive');
            
            // Filter episodes
            const episodeCards = document.querySelectorAll('.episode-card');
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
