document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();

        if (name === '' || email === '' || rating === '' || comments === '') {
            feedbackMessage.textContent = 'Please fill in all fields.';
            feedbackMessage.style.color = 'red';
            return;
        }

        if (!validateEmail(email)) {
            feedbackMessage.textContent = 'Please enter a valid email address.';
            feedbackMessage.style.color = 'red';
            return;
        }

        // Simulate form submission (in a real-world scenario, you would send this data to a server)
        feedbackMessage.textContent = 'Thank you for your feedback!';
        feedbackMessage.style.color = 'green';
        feedbackForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
