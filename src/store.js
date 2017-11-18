import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxPromise from 'redux-promise';

import rootReducer from './reducers';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(ReduxPromise))(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;





// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));
