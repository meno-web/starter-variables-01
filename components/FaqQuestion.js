export default (el) => {
  const toggle = el.querySelector('[data-faq-toggle]');
  const answer = el.querySelector('[data-faq-answer]');
  const icon = el.querySelector('[data-faq-icon]');
  const item = el.querySelector('[data-faq-item]');
  
  if (!toggle || !answer) return;
  
  const updateHeight = () => {
    if (item.getAttribute('data-expanded') === 'true') {
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
    const isExpanded = item.getAttribute('data-expanded') === 'true';
    item.setAttribute('data-expanded', isExpanded ? 'false' : 'true');
    updateHeight();
  });
  
  // Handle window resize to adjust height
  window.addEventListener('resize', () => {
    updateHeight();
  });
};
