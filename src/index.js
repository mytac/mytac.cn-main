import React from 'react';
import { Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import 'semantic-ui-css/semantic.min.css';

import './reset.less';
import './style.less';

import MainPage from './component/MainPage';
import DetailPage from './component/DetailPage';
import AdminPage from './component/AdminPage';

const history = createHistory();

const tempPics = [
  'https://image.freepik.com/free-vector/pink-polygonal-background_23-2147495183.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJlf8ljeIa5fKABQp0_GXxjYAAWzegKsIMwAFCnr514.jpg',
  'http://img06.tooopen.com/images/20170514/tooopen_sy_210122159348.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M03/0D/03/Cg-4V1S_EOWIMyUCAAhG5zFfIHUAATsVQNFKM0ACEb_770.jpg',
];

const RootComponent = () => <MainPage imgArray={tempPics} />;
const AdminComponent = () => <AdminPage history={history} />;
const DetailComponent = ({ match }) => (<DetailPage id={match.params.id} imgUrl={tempPics} />);

const RouterComponent = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={RootComponent} />
      <Route exact path="/admin" component={AdminComponent} />
      <Route path="/detail/:id" component={DetailComponent} />
    </div>
  </Router>
);

render(
  <div>
    <RouterComponent />
  </div>,
  document.getElementById('root'),
);
