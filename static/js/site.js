// Theme controls are enhanced only after JavaScript is available.
const themeButton = document.querySelector('#theme-toggle-button');
function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark-mode', isDark);
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeButton.querySelector('i').className = `fas ${isDark ? 'fa-sun' : 'fa-moon'}`;
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#121212' : '#ffffff';
}
if (themeButton) {
  applyTheme(document.documentElement.classList.contains('dark-mode'));
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark-mode');
    applyTheme(isDark);
    try { localStorage.setItem('academic-theme', isDark ? 'dark' : 'light'); } catch { /* Storage is optional. */ }
  });
}

// Native buttons replace the reference's javascript: links, preserving its disclosure behavior.
for (const button of document.querySelectorAll('[data-disclosure]')) {
  const panel = document.getElementById(button.dataset.disclosure);
  button.hidden = false;
  button.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    button.setAttribute('aria-expanded', String(!panel.hidden));
    document.body.classList.toggle('abstract-open', Boolean(document.querySelector('.paper-abstract:not([hidden])')));
  });
}
for (const separator of document.querySelectorAll('.js-separator')) separator.hidden = false;

// Animated sorting follows Jeff Donahue's scramble.js concept (2011).
// Keep character/index pairs together so repeated letters always resolve correctly.
const emailLink = document.querySelector('#email');
const revealButton = document.querySelector('#unscramble-email');
if (emailLink && revealButton) {
  const email = emailLink.textContent;
  const characters = Array.from(email, (character, index) => ({character, index}));
  for (let index = characters.length - 1; index > 0; index--) {
    const swap = Math.floor(Math.random() * (index + 1));
    [characters[index], characters[swap]] = [characters[swap], characters[index]];
  }
  emailLink.textContent = characters.map(item => item.character).join('');
  emailLink.setAttribute('aria-label', 'Email Abhijit Das');
  revealButton.hidden = false;
  revealButton.addEventListener('click', () => {
    revealButton.hidden = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      emailLink.textContent = email;
      return;
    }
    const timer = window.setInterval(() => {
      let changed = false;
      for (let index = 0; index < characters.length - 1; index++) {
        if (characters[index].index > characters[index + 1].index) {
          [characters[index], characters[index + 1]] = [characters[index + 1], characters[index]];
          changed = true;
        }
      }
      emailLink.textContent = characters.map(item => item.character).join('');
      if (!changed) window.clearInterval(timer);
    }, 40);
  }, {once:true});
}
