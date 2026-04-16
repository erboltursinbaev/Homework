import  { burgerMenu }  from './burger.js';
import { productSlider } from './product-slider.js';
import { sizes } from './sizes.js';
import  modal  from './modal.js';

modal();
 try {
  burgerMenu();
  productSlider();
  sizes();
 } catch (error) {
  console.error(error);
 }

