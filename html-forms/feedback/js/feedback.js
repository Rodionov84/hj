const contentform = document.getElementsByClassName('contentform')[0];
const fields = {
  lastname: contentform.querySelector('input[name=lastname]'),
  name: contentform.querySelector('input[name=name]'),
  email: contentform.querySelector('input[name=email]'),
  company: contentform.querySelector('input[name=company]'),
  address: contentform.querySelector('input[name=address]'),
  zip: contentform.querySelector('input[name=zip]'),
  city: contentform.querySelector('input[name=city]'),
  phone: contentform.querySelector('input[name=phone]'),
  role: contentform.querySelector('input[name=role]'),
  subject: contentform.querySelector('input[name=subject]'),
  message: contentform.querySelector('textarea[name=message]')
};
const submit = contentform.querySelector('.button-contact');

const output = document.getElementById('output');
const outputFields = {
  lastname: output.querySelector('#lastname'),
  name: output.querySelector('#name'),
  company: output.querySelector('#company'),
  address: output.querySelector('#address'),
  zip: output.querySelector('#zip'),
  city: output.querySelector('#city'),
  role: output.querySelector('#role'),
  subject: output.querySelector('#subject'),
  message: output.querySelector('#message')
};
const edit = output.querySelector('.button-contact');

for (let field in fields) {
  fields[field].addEventListener('keyup', validateForm);
}

contentform.addEventListener('submit', showOutput);
edit.addEventListener('click', showForm);
fields.zip.addEventListener('keydown', (event) => {
  if( !/^(\d|Backspace|Enter|Delete|ArrowLeft|ArrowRight){1}$/i.test(event.key) ) {
    event.preventDefault();
  }
});

function validateForm() {
  let isValid = true;
  for (let field in fields) {
    if ( fields[field].value.length === 0 ) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
  	submit.removeAttribute('disabled');
  }
  else {
  	submit.setAttribute('disabled', 'disabled');
  }
}

function showOutput(event) {
  event.preventDefault();

  for (let field in outputFields) {
  	outputFields[field].innerHTML = fields[field].value;
  }

  output.classList.remove('hidden');
  contentform.classList.add('hidden');
}

function showForm(event) {
  event.preventDefault();

  contentform.classList.remove('hidden');
  output.classList.add('hidden');
}