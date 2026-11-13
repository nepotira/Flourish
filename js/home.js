import { renderNavbar, renderFooter } from './navbar.js';
import { renderBookGrid, initRevealAnimations } from './book-card.js';
import { initTheme } from './theme.js';
import { authReady, getMostLikedBooks } from './storage.js';

initTheme();
await authReady;
renderNavbar('index.html');
renderFooter();

const featured = await getMostLikedBooks(6);
const featuredTrack = document.getElementById('featuredBooks');
await renderBookGrid(featuredTrack, featured, 'Ainda não há livros cadastrados para destaque.');

const prevBtn = document.getElementById('featuredPrev');
const nextBtn = document.getElementById('featuredNext');
if (featured.length > 3) {
  const scrollByCard = (dir) => {
    const card = featuredTrack.querySelector(':scope > *');
    const amount = card ? card.getBoundingClientRect().width + 24 : featuredTrack.clientWidth / 3;
    featuredTrack.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };
  prevBtn?.addEventListener('click', () => scrollByCard(-1));
  nextBtn?.addEventListener('click', () => scrollByCard(1));
} else {
  prevBtn?.remove();
  nextBtn?.remove();
}

initRevealAnimations();
