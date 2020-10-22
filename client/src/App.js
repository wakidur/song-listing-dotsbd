import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Spinner from './components/common/spinner/Spinner';
import { getCurrentUser } from './redux/actions/userAuthAction/userAuthAction';
import { PrivateRoute, UserRoute } from './components/common/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const SinginAndSingUp = lazy(() => import('./pages/SinginAndSingUp'));
const MySongListPage = lazy(() => import('./pages/MySongListPage'));

const App = ({ getCurrentUser, isUserAuthenticated }) => {
  return (
    <React.Fragment>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route path='/' component={SinginAndSingUp} />
          <PrivateRoute exact path='/home' component={HomePage} />
          <PrivateRoute exact path='/mysonglist' component={MySongListPage} />
        </Suspense>
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.auth.isUserAuthenticated,
  user: state.auth.user,
});

const mapDispatchToProps = {
  getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
