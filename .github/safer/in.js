document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('login-button');
  
  loginButton.addEventListener('click', function() {
    window.location.href = 'login.html'; // Redirect to the login page
  });
});
