//step1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
  const emailField=document.getElementById('user-email');
  const email=emailField.value;
  const passwordField=document.getElementById('user-password');
  const password=passwordField.value;
//   console.log(email, password)
    if(email==='nazrul.cmt12@gmail.com' && password==='admin123'){
        window.location.href='bank.html';
    }
    else{
        alert('Invalid Username or Password');
    }
})