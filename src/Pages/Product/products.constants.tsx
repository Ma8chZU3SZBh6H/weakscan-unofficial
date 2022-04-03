import { Product } from './product.types';
import Lock from '../../Images/Lock';
import Virus from '../../Images/Virus';
import Skull from '../../Images/Skull';

const products: Product[] = [];
products.push(
  new Product(
    'Computer Hardening',
    'This service allows you to feel safer by making your computer much more\n' +
      '        difficult, if not impossible, to break into. We will help make your\n' +
      '        computer stronger using various methods. Note: We do not currently offer\n' +
      '        physical visitation, we do this through TeamViewer sessions.',
    '30$',
    <Lock />,
    '/lock',
    'Hardening',
  ),
);

products.push(
  new Product(
    'Malware Removal / Analysis',
    'We will remove or/and analyze malware for you. We aren’t taking company orders for this product right now, check again later for more updates. This is for home PC’s only. This also includes tips, and countermeasures for the future.',
    '80$',
    <Virus />,
    '/virus',
    'Malware',
  ),
);

products.push(
  new Product(
    'PenTest',
    'We offer fully in-depth Penetration Testing for you. We will do a variety of tests, methods, and we will give a full report of things to improve on. ',
    '15$',
    <Skull />,
    '/pen',
    'PenTest',
  ),
);

export default products;
