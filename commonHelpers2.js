import"./assets/modulepreload-polyfill-3cfb730f.js";const t={email:"",message:""},a={form:document.querySelector(".feedback-form"),input:document.querySelector('input[type="email"]'),message:document.querySelector("textarea")};function o(e){if(e.preventDefault(),t.email===""||t.message==="")return alert("Fill please all fields");console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}function r(e){t[e.target.name]=e.target.value,console.log(t)}a.form.addEventListener("submit",o);a.form.addEventListener("input",r);a.message.addEventListener("input",s);function s(e){t.message=e.target.value,console.log(t),localStorage.setItem("feedback-form-state",e.target.value)}function n(){const e=localStorage.getItem("feedback-form-state");console.log(e),e&&(t.message=e,a.message.value=e)}n();
//# sourceMappingURL=commonHelpers2.js.map
