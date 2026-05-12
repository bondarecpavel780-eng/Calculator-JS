let modalTimerId = null;

function setModalTimer(id) {
  modalTimerId = id;
}

// Open Modal Window
function openModal(modalSelector = '.modal') {
  const modal = document.querySelector(modalSelector);
  if (!modal || modal.classList.contains('show')) return;

  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';

  if (modalTimerId) {
    clearTimeout(modalTimerId);
    modalTimerId = null;
  }
}

// Close Modal Window
function closeModal(modalSelector = '.modal') {
  const modal = document.querySelector(modalSelector);
  if (!modal) return;
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function modalWindow(triggerSelector, modalSelector, timerId) {
  //Modal Window
  setModalTimer(timerId);
  const modalTrigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  if (!modal || modalTrigger.length === 0) return;

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(modalSelector);
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  return { openModal, closeModal };
}

export default modalWindow;
export {closeModal, openModal};