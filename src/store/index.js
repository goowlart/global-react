import { createStore } from 'redux';

import reducers from './reducers'

//const STORAGE_KEY = 'SI5edkMUyv4GuggvREDIpvX5YuG8R0GM'

const INITIAL_STATE = {
    auth: {
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null
    },
    user: {
        id: null,
        name: '',
        email: '',
        options: [],
        modules: [],
    }
}

function reducer(state = INITIAL_STATE, action) {
    if (action.type === 'UPDATE_AUTH') {
        return {
            ...state,
            auth: action.auth
        }
    }
    return state
}


const store = createStore(reducers);
console.log(store.getState())

export default store;
