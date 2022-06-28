import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import questionsReducers from './questionsReducer';

const rootReducer = combineReducers({
    client: questionsReducers,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))