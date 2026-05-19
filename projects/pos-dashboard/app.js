// Initialize Swiper
const promoSwiper = new Swiper('.promo-swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Initialize Lucide Icons
lucide.createIcons();

// Mock Data
const recentTransactions = [
    { id: '#ORD-7241', customer: 'John Doe', date: '2026-05-18', amount: '$45.00', status: 'Paid' },
    { id: '#ORD-7240', customer: 'Sarah Smith', date: '2026-05-18', amount: '$12.30', status: 'Pending' },
    { id: '#ORD-7239', customer: 'Michael Brown', date: '2026-05-17', amount: '$89.99', status: 'Paid' },
    { id: '#ORD-7238', customer: 'Emma Wilson', date: '2026-05-17', amount: '$25.50', status: 'Cancelled' },
    { id: '#ORD-7237', customer: 'David Jones', date: '2026-05-16', amount: '$64.20', status: 'Paid' },
];

const topProducts = [
    { name: 'Cold Brew Coffee', sales: 482, price: '$4.50', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=150&q=80' },
    { name: 'Avocado Toast', sales: 354, price: '$12.00', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=150&q=80' },
    { name: 'Blueberry Muffin', sales: 298, price: '$3.50', img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=150&q=80' },
    { name: 'Iced Matcha Latte', sales: 245, price: '$5.50', img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=150&q=80' },
    { name: 'Acai Bowl', sales: 210, price: '$14.00', img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=150&q=80' },
    { name: 'Salmon Bagel', sales: 185, price: '$11.50', img: 'https://images.unsplash.com/photo-1580128637494-0d9c1543666d?auto=format&fit=crop&w=150&q=80' },
    { name: 'Carrot Cake', sales: 156, price: '$6.00', img: 'https://images.unsplash.com/photo-1607331109641-611986641e57?auto=format&fit=crop&w=150&q=80' },
    { name: 'Greek Salad', sales: 142, price: '$10.00', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=150&q=80' },
    { name: 'Cappuccino', sales: 520, price: '$4.00', img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=150&q=80' },
    { name: 'Quinoa Bowl', sales: 98, price: '$13.00', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80' },
];

// DOM Elements
const transactionTableBody = document.getElementById('transaction-table-body');
const topProductsContainer = document.getElementById('top-products');
const newSaleBtn = document.getElementById('new-sale-btn');
const notificationRoot = document.getElementById('notification-root');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const categoryCards = document.querySelectorAll('.category-card');

// Functions
function handleCategoryClick(e) {
    const card = e.currentTarget;
    categoryCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    
    // Optional: Scroll card into view if partially hidden
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    
    showNotification(`Filtered by: ${card.querySelector('span').innerText}`);
}
function renderTransactions() {
    transactionTableBody.innerHTML = recentTransactions.map(tx => `
        <tr>
            <td data-label="Order ID"><strong>${tx.id}</strong></td>
            <td data-label="Customer">${tx.customer}</td>
            <td data-label="Date">${tx.date}</td>
            <td data-label="Amount">${tx.amount}</td>
            <td data-label="Status"><span class="status-badge status-${tx.status.toLowerCase()}">${tx.status}</span></td>
            <td data-label="Action"><button class="btn btn-text"><i data-lucide="more-horizontal"></i></button></td>
        </tr>
    `).join('');
    lucide.createIcons();
}

function renderTopProducts() {
    topProductsContainer.innerHTML = topProducts.map(product => `
        <div class="product-item">
            <div class="product-img-wrapper">
                <img src="${product.img}" alt="${product.name}" class="product-img">
            </div>
            <div class="product-details">
                <p class="product-name">${product.name}</p>
                <p class="product-sales">${product.sales} sales • ${product.price}</p>
            </div>
            <div class="product-trend trend-up">
                <i data-lucide="trending-up"></i>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i data-lucide="check-circle" style="color: var(--success)"></i>
        <span>${message}</span>
    `;
    notificationRoot.appendChild(notification);
    lucide.createIcons();

    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Event Listeners
newSaleBtn.addEventListener('click', () => {
    showNotification('New sale initialized successfully!');
});

categoryCards.forEach(card => {
    card.addEventListener('click', handleCategoryClick);
});

menuToggle.addEventListener('click', () => {

    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !menuToggle.contains(e.target) && 
        sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderTransactions();
    renderTopProducts();
    
    // Animate chart bars on load
    const bars = document.querySelectorAll('.chart-bar');
    bars.forEach((bar, index) => {
        const finalHeight = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = finalHeight;
        }, index * 100);
    });
});
