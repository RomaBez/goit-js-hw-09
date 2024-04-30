const formData = {
  email: "",
  message: ""
};

const formRefs = document.querySelector(".feedback-form");

const savedLocalFormKeys = localStorage.getItem('feedback-form-state');
  if (savedLocalFormKeys) {
    formRefs.elements.email.value = savedLocalFormKeys.email;
    formRefs.elements.message.value = savedLocalFormKeys.message;
}

formRefs.addEventListener("submit", onSubmitForm)

  function onSubmitForm (event) {
  event.preventDefault();
// const email = savedLocalFormKeys ? savedLocalFormKeys.email : formData.email;
// const message = savedLocalFormKeys ? savedLocalFormKeys.message : formData.message;
const { email, message } = savedLocalFormKeys || formData;
    if ( email === "" || message === "") {
      alert("Fill please all fields");
      return; 
    }
    localStorage.removeItem('feedback-form-state');
    formRefs.elements.email.value = "";
    formRefs.elements.message.value = "";
    event.currentTarget.reset();
    console.log(formData);
 };

formRefs.addEventListener("input", onInputForm);

function onInputForm() {
    formData.email = formRefs.elements.email.value.trim();
    formData.message = formRefs.elements.message.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};