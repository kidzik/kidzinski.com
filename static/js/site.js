// Links remain visible and functional when JavaScript is unavailable.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  document.documentElement.dataset.enhanced = 'true';
  menuToggle.hidden = false;
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  };
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open', !isOpen);
  });
  navLinks.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}

const search = document.querySelector('#publication-search');
if (search) {
  const rows = [...document.querySelectorAll('[data-publication]')];
  const normalized = text => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');
  const entries = rows.map(row => ({ row, text: normalized(row.textContent) }));
  const count = document.querySelector('#publication-count');
  const empty = document.querySelector('.no-results');
  search.closest('.publication-search').hidden = false;
  const filter = () => {
    const query = normalized(search.value.trim());
    let visible = 0;
    entries.forEach(({ row, text }) => {
      row.hidden = !text.includes(query);
      if (!row.hidden) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'publication' : 'publications'}`;
    empty.hidden = visible !== 0;
  };
  search.addEventListener('input', filter);
  filter();
}
