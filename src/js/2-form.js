const formData = {
    email: "",
    message: ""
};

const formRefs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea'),
};


function onFormSubmit (event) {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
    }
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};


function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
};


formRefs.form.addEventListener('submit', onFormSubmit);
formRefs.form.addEventListener('input', onFormInput);
formRefs.message.addEventListener('input', onTextareaInput);

function onTextareaInput(event) {
    formData.message = event.target.value;
    console.log(formData);
  localStorage.setItem('feedback-form-state', event.target.value);
};

function populateTextareaField() {
  const messageText = localStorage.getItem('feedback-form-state');
  console.log(messageText);
    if (messageText) {
        formData.message = messageText;
        formRefs.message.value = messageText;
    }
}

populateTextareaField();