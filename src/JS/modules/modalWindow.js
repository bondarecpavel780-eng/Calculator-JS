function ModalWindow() {
  //Modal Window
  const modalTrigger = document.querySelector('[data-modal]'),
    modal = document.querySelector('.modal');

  // Open Modal Window
  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }
  
  // Close Modal Window
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalTrigger.addEventListener('click', () => {
    openModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

  return { openModal, closeModal };
}

module.exports = ModalWindow;