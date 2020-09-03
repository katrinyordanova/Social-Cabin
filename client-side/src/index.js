import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/core-components/App/App';
import { createStore } from 'redux';
import loggedReducer from './redux/reducers/isLogged';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(loggedReducer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));