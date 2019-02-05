import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers} from 'redux';
import {Provider} from 'react-redux';


import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const rootReducer = combineReducers({
    ctr : counterReducer,
    result : resultReducer
})



// import reducer from './store/reducer';

// creezi store inainte sa se initializeze aplicatia gen
// const store = createStore(reducer);

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
