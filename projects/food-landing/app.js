// High-Performance Food Mockup Data (Source: Unsplash Source API & Verified IDs)
const foodItems = [
    { 
        name: 'Truffle Tagliatelle', 
        price: '$28.00', 
        desc: 'Handmade pasta with black truffle cream and parmesan.',
        img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80' 
    },
    { 
        name: 'Seared Scallops', 
        price: '$32.00', 
        desc: 'Jumbo scallops with cauliflower puree and herb oil.',
        img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80' 
    },
    { 
        name: 'Dry-Aged Ribeye', 
        price: '$45.00', 
        desc: '30-day aged steak with roasted garlic and bone marrow.',
        img: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&w=800&q=80' 
    },
    { 
        name: 'Wild Salmon Tartare', 
        price: '$22.00', 
        desc: 'Fresh salmon with avocado, lime, and cucumber.',
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80' 
    },
    { 
        name: 'Roasted Root Salad', 
        price: '$18.00', 
        desc: 'Seasonal vegetables with goat cheese and balsamic.',
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80' 
    },
    { 
        name: 'Duck Confit', 
        price: '$36.00', 
        desc: 'Slow-cooked duck leg with lentil ragout and orange glaze.',
        img: 'https://images.unsplash.com/photo-1514516348918-77d6bb7f80cd?auto=format&fit=crop&w=800&q=80' 
    },
    { 
        name: 'Lobster Bisque', 
        price: '$16.00', 
        desc: 'Creamy lobster soup with brandy and fresh herbs.',
        img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80' 
    },
    { 
        name: 'Mushroom Risotto', 
        price: '$24.00', 
        desc: 'Arborio rice with wild mushrooms and truffle oil.',
        img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80' 
    },
    { 
        name: 'Sea Bass En Papillote', 
        price: '$34.00', 
        desc: 'Baked sea bass with lemon, herbs, and asparagus.',
        img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80' 
    },
    { 
        name: 'Dark Chocolate Soufflé', 
        price: '$14.00', 
        desc: 'Warm soufflé with vanilla bean gelato.',
        img: 'https://images.unsplash.com/photo-1579372781878-662429402636?auto=format&fit=crop&w=800&q=80' 
    }
];

// Reliable Global Fallback (Unsplash Generic Food Category)
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80';

// DOM Elements
const swiperWrapper = document.getElementById('hero-swiper-wrapper');
const featuredMenu = document.getElementById('featured-menu');

// Functions
function renderHeroSlides() {
    swiperWrapper.innerHTML = foodItems.map((item, index) => `
        <div class="swiper-slide" style="background: #eee;">
            <img src="${item.img}" 
                 alt="${item.name}" 
                 onerror="this.onerror=null; this.src='${FALLBACK_IMG}';"
                 ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
        </div>
    `).join('');
}

function renderMenuGrid() {
    // Show first 6 items in the grid
    featuredMenu.innerHTML = foodItems.slice(0, 6).map(item => `
        <div class="menu-item">
            <div class="menu-item-img" style="background: #eee;">
                <img src="${item.img}" 
                     alt="${item.name}" 
                     onerror="this.onerror=null; this.src='${FALLBACK_IMG}';"
                     loading="lazy">
            </div>
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p class="menu-item-desc">${item.desc}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price}</span>
                    <button class="btn btn-primary" style="padding: 8px 16px; font-size: 13px;">
                        <i data-lucide="shopping-bag" style="width: 14px; height: 14px;"></i> Order
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Back to Top Button Logic
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    // Render Content
    renderHeroSlides();
    renderMenuGrid();
    
    // Initialize Lucide Icons (Ensure all elements are scanned)
    lucide.createIcons();
    
    // Initialize Swiper
    const heroSwiper = new Swiper('.hero-swiper', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Modern Performance & Reliability
        observer: true,
        observeParents: true,
    });
});
