

export function getAllUsers(users) {
    return {
        type: 'GET-ALL-USERS',
        payload: users
    }
}