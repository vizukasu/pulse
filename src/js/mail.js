emailjs.init("2IgmJc3vRYu4aKdek");

let forms = document.querySelectorAll('[data-form]');
let miniModal = document.querySelector('#thanks');
let buttons = document.querySelectorAll('[data-form-button=button]');
let orderModal = document.querySelector('#order');
let overlay = document.querySelector('.overlay');
let modalConsultation = document.querySelector('#consultation');

forms.forEach ((form) => {
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        let serviceID = "service_w8znvdu";
        let templateID = "template_efj6mc9";
        
        buttons.forEach ((button) => {
            button.classList.add('button_disabled')
        } )
        emailjs.sendForm(serviceID, templateID, this)
            .then(res => {
                form.reset()
                // miniModal.classList.add('modal_show')
                overlay.classList.remove('overlay_none')
                $('#consultation, #order').fadeOut('slow');
                $('#thanks').fadeIn('slow');
                // orderModal.classList.remove('modal_show')
                // modalConsultation.classList.remove('modal_show')
                
            }, function(error) {
                console.log('error');
            })
            .finally(()=> {
                buttons.forEach ((button) => {
                    button.classList.remove('button_disabled')
                })
            })
    })
})

