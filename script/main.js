document.addEventListener("DOMContentLoaded", () => {
  initSwiperSlider();
});


function initSwiperSlider() {
  new Swiper(".financial-services-swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".financial-services__button-next",
      prevEl: ".financial-services__button-prev",
    },
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('contact-modal');
  const modalTrigger = document.querySelector('.footer__contact-button');
  const modalClose = document.querySelector('.modal__close');
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalContent = document.querySelector('.modal__content');

  // Open modal
  if (modalTrigger) {
    modalTrigger.addEventListener('click', function () {
      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close modal function
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('modal--active');
    document.body.style.overflow = '';
  }

  // Close modal on close button click
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal on overlay click (but not on content click)
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key press
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });
});