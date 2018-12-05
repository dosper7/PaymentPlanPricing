import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import reducer from './store/reducers/reducer'

//const store = createStore(reducer);

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

