import Route from './Route';

import HomeSVG from './Images/Home';
import Home from './Pages/Home';
import HomeConstants from './Pages/Home/home.constants';
import Product from './Pages/Product';
import products from './Pages/Product/products.constants';
import Email from './Images/Email';
import Contact from './Pages/Contact';

const routes: Route[] = [];
routes.push(
  new Route(<HomeSVG />, '/', 'Home', <Home {...new HomeConstants()} />),
);

products.forEach((product, index) => {
  {
    {
      routes.push(
        new Route(
          product.svg,
          product.path,
          product.routeTitle,
          <Product key={index + 'rrr'} {...product} />,
        ),
      );
    }
  }
});

routes.push(new Route(<Email />, '/contact', 'Contact', <Contact />));

export default routes;
