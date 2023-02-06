const loginForm = document.querySelector('.login-form');
const btnSubmitForm = document.querySelector('button');

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
  const {
    elements: { email, password }
  } = e.currentTarget;
    if (password.value === '' || email.value === '') {
      return  alert('Всі поля повині бути заповнені');
    }
    const forma = {
        email: email.value,
        password: password.value,
    }
    console.log(forma);
    loginForm.reset();
});