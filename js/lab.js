const galleryImages = document.querySelectorAll('.project-gallery img');

const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

galleryImages.forEach((img) => {

  img.addEventListener('click', () => {

    modalImage.src = img.src;

    imageModal.classList.add('active');

  });

});

closeModal?.addEventListener('click', () => {
  imageModal.classList.remove('active');
});

imageModal?.addEventListener('click', (e) => {

  if (e.target === imageModal) {
    imageModal.classList.remove('active');
  }

});