import Home from './Home';
import Quotes from './Quotes';
import Calculator from './calculator';

const routes = [
  {
    id: 1,
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    path: '/Quotes',
    element: <Quotes />,
  },
  {
    id: 3,
    path: '/calculator',
    element: <Calculator />,
  },
];

export default routes;
