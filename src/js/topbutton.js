let scrollToTopBtn = document.getElementById('scrollToTopBtn');

var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.6) {
    scrollToTopBtn.classList.add('showBtn');
  } else {
    scrollToTopBtn.classList.remove('showBtn');
  }
}
export { scrollToTopBtn, scrollToTop, handleScroll };
