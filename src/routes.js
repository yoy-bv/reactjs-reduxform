import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ListUser from './listUserTest.js'
import TestFormRedux from './testFormRedux.js'
import Login from './formLogin.js'
import {Provider} from 'react-redux';
//Redux FORM
import {ccred} from './reduxcer'
import createSagaMiddleware from 'redux-saga'
import rootSagas from './rootSagas'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
});
// const store = (window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore)(reducer);
//Redux FORM

const saga = createSagaMiddleware();
const store = createStore(
    reducer,
    ccred,
    applyMiddleware(saga)
)

saga.run(rootSagas);

// then run the saga
console.log(store);
const routes = (
    <Provider store={store}>
      <Router>
          <div>
              <Route exact path="/login" component={Login}/>
              <Route path="/listuser" component={ListUser}/>
              <Route path="/testformredux" component={TestFormRedux}/>
          </div>
      </Router>
    </Provider>
)
export default routes

