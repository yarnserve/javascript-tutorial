window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault()
      this.contact_number.value = (Math.random() * 100000) | 0
      emailjs.sendForm('service_3g7hac5', 'template_cpzziah', this).then(
        function () {
          console.log('SUCCESS!')
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
    })
}
