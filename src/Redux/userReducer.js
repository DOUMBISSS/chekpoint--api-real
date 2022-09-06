const initialState = {
    user: {},
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-ALL-USERS": {
            return {
                ...state,
                user : action.payload
            }
        }

        default: {
            return state
        }
    }
  
}