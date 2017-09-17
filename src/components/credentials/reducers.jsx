export const CredentialReducer = (state={}, action) => {
    switch (action.type) {
        case 'ADMIN_LOGIN_ACTION':
            return  {
                ...state,
                session: action.session
            };
        default:
            return state
    }
};