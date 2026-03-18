const filterButtons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    cards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = selected === 'all' || selected === category;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});
