const initialState = {
    users: [],
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-ALL-USERS": {
            return {
                ...state,
                users : action.payload
            }
        }

        default: {
            return state
        }
    }
  
}