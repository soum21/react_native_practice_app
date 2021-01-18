import * as types from '../actionTypes';
import initialState from '../states';

export function setHomeData(state = initialState.homeState, action) {
    switch (action.type) {
        case types.SET_HOMEPAGE_DATA:
            return {
                ...state,
                ...action.homeState
            };
            break;
        default:
            return state;
            break;
    }
}