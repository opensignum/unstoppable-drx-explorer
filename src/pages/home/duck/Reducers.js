import { combineReducers } from "redux";

import types from "./Types";

const defaultState = {
    recordings: [],
};

const recordings = ( state = defaultState.recordings, { type, payload } ) => {
    if ( type === types.SEARCH_ISRC_SUCCESS ) {
        return payload;
    }

    return state;
};

export default combineReducers( {
    recordings,
} );
