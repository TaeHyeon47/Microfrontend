import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;

// Context/siuation #1
// We are running this file in development in isolation.
// We are using our local index.html file.
// Which DEFNITELY has an element with an id of 'dev-products'.
// We want to immediately render our app into that element

// Context/siuation #2
// We are running this file in development or production
// througth the CONTAINER App.
// No GUARANTEE that an element wit han id of 'dev-products' exists
// WE DO NOT WANT try to immediately render the app 

