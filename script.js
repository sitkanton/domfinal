document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
    });
});

const labels = document.querySelectorAll('label[data-url]');
labels.forEach(label => {
    label.addEventListener('click', () => {
        const url = label.getAttribute('data-url');
        window.location.href = url;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    });
});