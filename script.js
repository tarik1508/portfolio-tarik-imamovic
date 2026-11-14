const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name === '' || email === '' || message === '') {
    formMsg.textContent = 'Molimo popunite sva polja.';
    formMsg.style.color = '#f87171';
  } else if (!emailOk) {
    formMsg.textContent = 'Unesite ispravan email.';
    formMsg.style.color = '#f87171';
  } else {
    formMsg.textContent = 'Hvala! Poruka je poslana.';
    formMsg.style.color = '#4ade80';
    form.reset();
  }
});