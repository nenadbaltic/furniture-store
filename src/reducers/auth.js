const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        case 'ADMIN_LOGIN':
            return {
                email: action.email
            };
        default:
            return state;
    }
}

export default authReducer;