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
    formMsg.textContent = translations[currentLang].msg_empty;
    formMsg.style.color = '#f87171';
  } else if (!emailOk) {
    formMsg.textContent = translations[currentLang].msg_email;
    formMsg.style.color = '#f87171';
  } else {
    formMsg.textContent = translations[currentLang].msg_ok;
    formMsg.style.color = '#4ade80';
    form.reset();
  }
});

const translations = {
  bs: {
    nav_about: 'O meni', nav_skills: 'Vještine', nav_projects: 'Projekti', nav_contact: 'Kontakt',
    hero_tag: 'DOBRODOŠLI NA MOJ PORTFOLIO', hero_role: 'Učenik IT smjera',
    hero_desc: 'Kreiram moderne digitalne projekte i učim svaki dan.', hero_btn: 'Kontaktiraj me',
    about_title: 'O meni',
    about_text: 'Zovem se Tarik Imamović i učenik sam IT smjera. Zanima me programiranje, web dizajn i nove tehnologije. Cilj mi je da kroz projekte naučim što više i izgradim karijeru u softverskom inženjerstvu.',
    skills_title: 'Vještine', projects_title: 'Odabrani projekti',
    p1_title: 'Web portfolio', p1_desc: 'Lična prezentacija i projekti.',
    p2_title: 'Aplikacija za učenje', p2_desc: 'Jednostavan alat za organizaciju.',
    p3_title: 'UI dizajn', p3_desc: 'Moderan interfejs sa fokusom na korisnika.',
    contact_title: 'Kontakt', ph_name: 'Ime', ph_email: 'Email', ph_message: 'Poruka', btn_send: 'Pošalji',
    msg_empty: 'Molimo popunite sva polja.', msg_email: 'Unesite ispravan email.', msg_ok: 'Hvala! Poruka je poslana.'
  },
  en: {
    nav_about: 'About', nav_skills: 'Skills', nav_projects: 'Projects', nav_contact: 'Contact',
    hero_tag: 'WELCOME TO MY PORTFOLIO', hero_role: 'IT student',
    hero_desc: 'I create modern digital projects and learn every day.', hero_btn: 'Contact me',
    about_title: 'About me',
    about_text: 'My name is Tarik Imamović and I am an IT student. I am interested in programming, web design and new technologies. My goal is to learn as much as possible through projects and build a career in software engineering.',
    skills_title: 'Skills', projects_title: 'Featured projects',
    p1_title: 'Web portfolio', p1_desc: 'Personal presentation and projects.',
    p2_title: 'Learning app', p2_desc: 'A simple tool for organization.',
    p3_title: 'UI design', p3_desc: 'Modern interface focused on the user.',
    contact_title: 'Contact', ph_name: 'Name', ph_email: 'Email', ph_message: 'Message', btn_send: 'Send',
    msg_empty: 'Please fill in all fields.', msg_email: 'Please enter a valid email.', msg_ok: 'Thank you! Message sent.'
  }
};

const langBtn = document.getElementById('langBtn');
let currentLang = localStorage.getItem('lang') || 'bs';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = translations[lang][el.dataset.i18nPlaceholder];
  });
  langBtn.textContent = lang === 'bs' ? 'EN' : 'BS';
  localStorage.setItem('lang', lang);
}

langBtn.addEventListener('click', () => {
  setLanguage(currentLang === 'bs' ? 'en' : 'bs');
});

setLanguage(currentLang);