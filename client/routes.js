/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}


// const isLoggedIn = (nextState, replace, callback) => {
//   // var userAuthToken = localStorage.getItem('userAuthToken');
//   // console.log("userAuthToken== ", userAuthToken);

//   console.log(" in islooged in")
//    if (true) {
     
//      replace({pathname:'/home'});
//    }else {
//      replace({pathname:'/'});
//     callback();
//    }
// }

// react-router setup with code-splittin/g
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/

//
//onEnter={isLoggedIn}  

export default (
  <Route path="/"   component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/Login/login').default);
        });
      }}
    />
    <Route
      path="/signup"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/SignUp/signup').default);
        });
      }}
    />

    <Route
      path="/Home" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/Home/Home').default);
        });
      }}
    />

  </Route>
);