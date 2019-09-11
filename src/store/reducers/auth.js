const INITIAL_STATE = {
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null
}

export default function auth(state = INITIAL_STATE, action) {
    if (action.type === 'UPDATE_AUTH') {
        return {
            ...state,
            auth: action.auth
        }
    }
    return state;
}



     