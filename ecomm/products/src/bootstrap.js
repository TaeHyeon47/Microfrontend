import faker from 'faker';



// el = html element
const mount = (el) => {
let products = '';

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

// document.querySelector('#dev-products').innerHTML = products;
el.innerHTML = products;
// ReactDom.render(<App/>, el);
}

// Context/siuation #1
// We are running this file in development in isolation.
// We are using our local index.html file.
// Which DEFNITELY has an element with an id of 'dev-products'.
// We want to immediately render our app into that element

// process.env.NODE_ENV an environment variable that gets set automatically by Webpack
// webpack.config.js에 보면 mode: development가 있다.
// 해당 설정이 있기에 webpack은 'process.env.NODE_ENV'을 자동적으로 development로 교체한다.
// So if we are running our application in development mode, we're going to go into this if statement.
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // Assuming out container doesnt have an element
    // with id 'dev-products' ...
    if (el) {
    // we are probably running in isolation
        mount(el);
    }
}


// Context/siuation #2
// We are running this file in development or production
// througth the CONTAINER App.
// No GUARANTEE that an element wit han id of 'dev-products' exists
// WE DO NOT WANT try to immediately render the app 

// By export the mount function, our container can import the amount function and make use of it.
export { mount };
