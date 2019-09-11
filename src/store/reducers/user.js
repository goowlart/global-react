const INITIAL_STATE = {
	id: null,
		name: '',
		email: '',
		options: [],
		modules: [],
}

export default function user(state = INITIAL_STATE, action) {
  if(action.type === "UPDATE_USER"){    
     return {
       ...state,
       user: action.user
     }
  }

  return state
}
