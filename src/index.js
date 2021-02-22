import './sass/main.scss';

import checkIfDeleteButton from './js/deleteimg';
import loadImage from './js/img_loader';
import { scrollToTopBtn, scrollToTop, handleScroll } from './js/topbutton';
import { catButton, catGenerator } from './js/meow';

// Load images
document.addEventListener('DOMContentLoaded', loadImage);

// Handlers for the scroll to top button
document.addEventListener('scroll', handleScroll);
scrollToTopBtn.addEventListener('click', scrollToTop);

// Call API
catButton.addEventListener('click', catGenerator);

// Delete image from API
document.addEventListener('click', checkIfDeleteButton);
