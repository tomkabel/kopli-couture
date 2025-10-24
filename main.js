import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  initDayNightToggle();
  initEventFilters();
  initContactForm();
  initGalleryHover();
});

function initDayNightToggle() {
  const toggleBtn = document.getElementById('toggleBtn');
  if (!toggleBtn) return;

  let isNight = false;

  toggleBtn.addEventListener('click', () => {
    isNight = !isNight;
    toggleBtn.classList.toggle('active');

    const hero = document.querySelector('.hero');
    if (hero) {
      if (isNight) {
        hero.style.background = 'linear-gradient(135deg, #1a252f 0%, #2d2d2d 100%)';
      } else {
        hero.style.background = 'linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-rust) 100%)';
      }
    }
  });
}

function initEventFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const eventCards = document.querySelectorAll('.event-card');

  if (filterButtons.length === 0 || eventCards.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      eventCards.forEach(card => {
        const category = card.dataset.category;

        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.display = 'flex';
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
      form.style.display = 'none';

      const successMessage = document.getElementById('formSuccess');
      if (successMessage) {
        successMessage.classList.add('show');
      }

      setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        if (successMessage) {
          successMessage.classList.remove('show');
        }
      }, 3000);
    }
  });
}

function initGalleryHover() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.opacity = '0.8';
    });

    item.addEventListener('mouseleave', () => {
      item.style.opacity = '1';
    });
  });
}
