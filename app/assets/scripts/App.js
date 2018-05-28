import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".sample"), "85%");
new RevealOnScroll($(".page-section__list__item--reveal"), "75%");
var stickyHeader = new StickyHeader();
