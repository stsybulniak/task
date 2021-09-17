import { FC } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import SlidePage from './pages/SlidePage';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SlidePage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
