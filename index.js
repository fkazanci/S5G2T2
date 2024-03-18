// Kodlar Buraya
function karanlikTemayiAcKapa() {
  const body = document.querySelector('body');
  const button = document.getElementById('acKapa');
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    button.textContent = 'Karanlık temayı aç';
  } else {
    body.classList.add('dark');
    button.textContent = 'Karanlık temayı kapat';
  }
}
const button = document.createElement('button');
button.setAttribute('id', 'acKapa');
button.textContent = 'Karanlık temayı aç';
button.addEventListener('click', karanlikTemayiAcKapa);
document.querySelector('.description').append(button);
