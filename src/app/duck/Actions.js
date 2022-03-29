import types from "./Types";

const init = payload => ( { type: types.INIT, payload } );

const logout = () => ( { type: types.LOGOUT } );

export default {
    init,
    logout,
};
