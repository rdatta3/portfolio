var form=document.querySelector('.formm')
var sent = document.querySelector('.sent-message')
form.addEventListener('submit',function(e){
    e.preventDefault();
    sent.textContent="Your message has been sent. Thank you!"
    
})