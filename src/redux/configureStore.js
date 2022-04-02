import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Alums} from './alums';
import {Posts} from './posts';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            alums:Alums,
            posts:Posts
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}