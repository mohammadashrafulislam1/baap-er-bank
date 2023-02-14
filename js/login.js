document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    // This below method is not the correct method to used in click site.

    if(email === 'sodrul@gmail.com' && password === 'bodrul'){
       // console.log('valid user')
       window.location.href ='bank.html'
    }
    else{
        // console.log('invalid user')
        alert('Beiman er baccha')
    
    }
})



