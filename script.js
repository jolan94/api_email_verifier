const baseUrl = 'https://www.disify.com/api/email/';

let contDiv = document.getElementById('contbox');
let totDiv = document.getElementById('totalbox');
let resultDiv = document.getElementById('result');
let btnElement = document.getElementById('submit');
btnElement.addEventListener('click', verifyEmail);

function verifyEmail(event) {
  event.preventDefault();
  console.log('Button clicked');
  let enteredEmail = document.getElementById('enteremail').value;
  let fullUrl = baseUrl + enteredEmail;
  console.log(enteredEmail);
  console.log(baseUrl);
  fetch(fullUrl)
    .then((res) => {
      if (res.ok) {
        console.log('Success');
        return res.json();
      } else {
        console.log('Not Successful');
      }
    })
    .then((data) => {
      console.log(data);
      if (data['format'] == false) {
        alert('Email format is incorrect! Please check the format');
      } else {
        if (data['disposable']) {
          resultDiv.innerText = '!Oops...This is a fake Email ID';
        } else {
          resultDiv.innerText = 'Hurray! The E-mail you entered is Legit';
          resultDiv.style.display = 'flex';
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
