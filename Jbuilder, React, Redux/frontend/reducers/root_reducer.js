import entitiesReducer from './entities_reducer';
import { combineReducer } from 'redux';

const rootReducer = combineReducers({
  entities: entitiesReducer
});
export default rootReducer;
