const clickableImages = document.querySelectorAll('.clickable-image');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

// Open modal when any of the images is clicked
clickableImages.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



