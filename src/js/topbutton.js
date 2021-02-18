let scrollToTopBtn = document.getElementById('scrollToTopBtn');

var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    // Show button
    scrollToTopBtn.classList.add('showBtn');
  } else {
    // Hide button
    scrollToTopBtn.classList.remove('showBtn');
  }
}
export { scrollToTopBtn, scrollToTop, handleScroll };
