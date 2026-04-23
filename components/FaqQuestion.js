const toggle = el.querySelector('[data-faq-toggle]');
const answer = el.querySelector('[data-faq-answer]');
const icon = el.querySelector('[data-faq-icon]');

if (toggle && answer) {
  const updateHeight = () => {
    if (el.getAttribute('data-expanded') === 'true') {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.paddingBottom = '20px';
      icon.style.transform = 'rotate(45deg)';
    } else {
      answer.style.maxHeight = '0';
      answer.style.paddingBottom = '0';
      icon.style.transform = 'rotate(0deg)';
    }
  };

  toggle.addEventListener('click', () => {
    const isExpanded = el.getAttribute('data-expanded') === 'true';
    el.setAttribute('data-expanded', isExpanded ? 'false' : 'true');
    updateHeight();
  });

  window.addEventListener('resize', updateHeight);
}
