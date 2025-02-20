const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// إضافة تأثيرات للصور عند التحميل
window.onload = () => {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
            item.style.transition = 'opacity 0.5s, transform 0.5s';
        }, index * 100);
    });
};
