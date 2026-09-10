// Apply the saved theme before CSS paints, with the reference site's dark default.
(() => {
  let theme = 'dark';
  try { theme = localStorage.getItem('academic-theme') || 'dark'; } catch { /* Storage is optional. */ }
  document.documentElement.classList.toggle('dark-mode', theme !== 'light');
})();
