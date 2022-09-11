import {mount} from 'products/ProductsIndex';
import 'cart/CartShow'

// 아래처럼 하는 것보다 위의 방식이 조금 더 이름적으으로 명확하다.
// import 'proucts/src/index'
// import 'cart/src/index'

console.log('Container!');

mount(document.querySelector('#my-products')); 