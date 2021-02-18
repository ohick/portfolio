import './sass/main.scss';

import loadImage from './js/img_loader';
import { scrollToTopBtn, scrollToTop, handleScroll } from './js/topbutton';

document.addEventListener('DOMContentLoaded', loadImage);
document.addEventListener('scroll', handleScroll);
scrollToTopBtn.addEventListener('click', scrollToTop);
