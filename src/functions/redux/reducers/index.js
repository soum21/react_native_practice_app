import {setHomeData} from './homeReducer';
import {combineReducers} from 'redux';
import initialState from '../states';

const appReducer = combineReducers({
    homeState:setHomeData
});


const rootReducer = (state, action) => {
    // if (action.type === types.RESET_ROOT_STATE) {
    //     const keptStates = {
    //      states to preserve
    //     };
    //     state = {
    //         ...initialState,
    //         ...keptStates
    //     }
    // }
    return appReducer(state, action)
};

export default rootReducer;