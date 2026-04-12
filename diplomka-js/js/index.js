import  { BurgerMenu }  from './burger.js';
import { productSlider } from './product-slider.js';
import { sizes } from './sizes.js';
import  Modal  from './modal.js';

Modal();
 try {
  BurgerMenu();
  productSlider();
  sizes();
 } catch (error) {
  console.error(error);
 }

