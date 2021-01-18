import * as types from '../actionTypes';

export function setHomeData(data){
    return function(dispatch){
        dispatch({
            type:types.SET_HOMEPAGE_DATA,
            homeState:{
                Title:"asdasd"
            }
        })
    }
}