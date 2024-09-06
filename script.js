document.addEventListener('DOMContentLoaded', () => {
    // Toggle Nav Bar
    document.getElementById('menu-toggle').addEventListener('click', function () {
        document.getElementById('nav-menu').classList.toggle('active');
    });

    // Slider Functionality
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(sliderContainer => {
        const slider = sliderContainer.querySelector('.slider');
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = sliderContainer.querySelector('.prev');
        const nextBtn = sliderContainer.querySelector('.next');
        let currentIndex = 0;

        function showSlide(index) {
            if (index >= slides.length) currentIndex = 0;
            else if (index < 0) currentIndex = slides.length - 1;
            else currentIndex = index;

            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

        // Auto-slide every 5 seconds
        setInterval(() => showSlide(currentIndex + 1), 10000);

        // Initialize the first slide
        showSlide(currentIndex);
    });

    // Contact Us Form Validation
    const form = document.getElementById('contact-form');
    if (form) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        form.addEventListener('submit', (event) => {
            let valid = true;

            // Clear previous error messages
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

            // Name validation
            if (nameInput.value.trim() === '') {
                document.getElementById('name-error').style.display = 'block';
                valid = false;
            }

            // Email validation
            if (!emailInput.value.includes('@')) {
                document.getElementById('email-error').style.display = 'block';
                valid = false;
            }

            // Message validation
            if (messageInput.value.length < 10) {
                document.getElementById('message-error').style.display = 'block';
                valid = false;
            }

            if (!valid) event.preventDefault(); // Prevent form submission
        });
    }

    // Scroll Animations
    const elementsToAnimate = document.querySelectorAll('.fade-in, .bounce-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(el => observer.observe(el));

    // Cart Modal Handling
    function openCartModal() {
        document.getElementById('cart-modal').style.display = 'block';
    }

    function closeCartModal() {
        document.getElementById('cart-modal').style.display = 'none';
    }

    function emptyCart() {
        document.getElementById('cart-items').innerHTML = '<p>Your cart is empty.</p>';
    }

    function showSuccessModal(messageText) {
        const successModal = document.getElementById('success-modal');
        const successMessage = document.getElementById('success-message');
        const closeModalButton = document.getElementById('close-success-modal');
    
        successMessage.textContent = messageText;
        successModal.style.display = 'block';
    
        // Add event listener to the close button
        closeModalButton.addEventListener('click', closeSuccessModal);
    }
    
    // Function to close the success modal
function closeSuccessModal() {
    const successModal = document.getElementById('success-modal');
    successModal.style.display = 'none';
}

// Event listener for DOMContentLoaded to set up the close button
document.addEventListener('DOMContentLoaded', () => {
    const closeModalButton = document.getElementById('close-success-modal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeSuccessModal);
    }

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            const title = productCard.querySelector('h3').textContent;
            addToCart(title);
            showSuccessModal(`Added "${title}" to cart successfully!`);
        });
    });
});

// Function to show the success modal with a custom message
// Function to close the success modal
document.addEventListener('DOMContentLoaded', () => {
    // Function to close the success modal
    function closeSuccessModal() {
        const successModal = document.getElementById('success-modal');
        successModal.style.display = 'none';
    }

    // Set up the event listener for the modal close button
    const closeModalButton = document.getElementById('close-success-modal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeSuccessModal);
    }

    // Function to show the success modal with a custom message
    function showSuccessModal(messageText) {
        const successModal = document.getElementById('success-modal');
        const successMessage = document.getElementById('success-message');

        successMessage.textContent = messageText;
        successModal.style.display = 'block';
    }

    // Add event listeners to the "Visit" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            const title = productCard.querySelector('h3').textContent;
            showSuccessModal(`Visited "${title}" successfully!`);
        });
    });
});



    function addToCart(title) {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `<h3>${title}</h3>`;
        cartItemsContainer.appendChild(cartItem);

        const emptyMessage = cartItemsContainer.querySelector('p');
        if (emptyMessage) emptyMessage.remove();
    }

    // Checkout and empty cart buttons
    document.getElementById('checkout-button')?.addEventListener('click', function () {
        alert('Proceeding to checkout!');
        emptyCart();
        closeCartModal();
    });

    document.getElementById('empty-cart-button')?.addEventListener('click', emptyCart);

    // Background Video Play
    const bgVideo = document.getElementById('bgVideo');
    if (bgVideo) {
        bgVideo.play().catch(error => console.log('Video play error: ', error));
    }
});
