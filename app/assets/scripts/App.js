import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import VideoPop from './modules/Video';
import RandomQuote from './modules/RandomQuote';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".sample"), "85%");
new RevealOnScroll($(".page-section__list__item--reveal"), "75%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
var videoPop = new VideoPop();
var randomQuote = new RandomQuote();
