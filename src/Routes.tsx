import Route from './Route';

import HomeSVG from './Images/Home';
import Home from './Pages/Home';
import HomeConstants from './Pages/Home/home.constants';
import LockSVG from './Images/Lock';
import VirusSVG from './Images/Virus';
import SkullSVG from './Images/Skull';
import BookSVG from './Images/Book';
import EmailSVG from './Images/Email';

const routes: Route[] = [];
routes.push(
  new Route(<HomeSVG />, '/', 'Home', <Home {...new HomeConstants()} />),
);
routes.push(new Route(<LockSVG />, '/lock', 'Lock', <div>LOCK</div>));
routes.push(new Route(<VirusSVG />, '/virus', 'Virus', <div>VIRUS</div>));
routes.push(new Route(<SkullSVG />, '/skull', 'Skull', <div>SKULL</div>));
routes.push(new Route(<BookSVG />, '/book', 'Book', <div>BOOK</div>));
routes.push(new Route(<EmailSVG />, '/email', 'Email', <div>EMAIL</div>));
export default routes;
