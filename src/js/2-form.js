let formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

loadForm();

formEl.addEventListener('input', onSaveFormInput);

formEl.addEventListener('submit', onFormSubmit);

function onSaveFormInput(event) {
  formData = JSON.parse(localStorage.getItem(localStorageKey)) || {};

  formData[event.target.name] = event.target.value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.target.email.value.trim() || !event.target.message.value.trim()) {
    alert('Fill please all fields');
    return;
  }

  event.target.reset();
  console.log(formData);
  localStorage.removeItem(localStorageKey);
}

function loadForm() {
  try {
    let formLoad = JSON.parse(localStorage.getItem(localStorageKey));
    if (!formLoad) {
      return;
    }

    formData = formLoad;
    formEl.email.value = formData.email || '';
    formEl.message.value = formData.message || '';
  } catch (error) {
    console.error('Error.message ', error.message);
  }
}
