import { combineReducers } from 'redux';
import pokeReducer from '../components/cards/reducer';

const rootReducer= combineReducers({
    pokeReducer,
});

export default rootReducer;