// Data for message 
function tabs() {
    const ModalWindow = require('./modalWindow');
    const { openModal, closeModal } = ModalWindow();
    
    const message = {
        loading: {
            img: 'img/loading_cat.jpg',
            text: 'loading...'
        },
        success: {
            img: 'img/cat.jpg',
            text: ''
        },
        fail: {
            img: 'img/sad_cat.jpg',
            text: 'Something went wrong('
        }
    };

    const forms = document.querySelectorAll('form');
    
    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); //prevents browser restart

            //loading message
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.innerHTML = `
    <img src="${message.loading.img}" alt="status">
    <div style="margin-top: 10px;">${message.loading.text}</div> `;
            form.append(statusMessage);

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(object)
            }).then(data => data.text())
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.fail);
                    statusMessage.remove();
                }).finally(() => {
                    form.reset();
                })
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.remove('show');
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
  <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">
              <img src="${message.img}" alt="статус">
              <div style="margin-top: 10px;">${message.text}</div>
            </div>
        </div>
    `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000)
    };
}

module.exports = tabs;