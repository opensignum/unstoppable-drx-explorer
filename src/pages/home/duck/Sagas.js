import {
    call,
    put,
    takeEvery,
} from "redux-saga/effects";
import axios from "axios";

import types from "./Types";

function* searchISRC( { payload } ) {
    try {
        const { isrc } = payload;
        // Connects with a locally running DRX network,
        // in the future this connects to the production environment.
        const { data } = yield call( axios.get, `/recordings/search?isrc=${ isrc }` );

        yield put( { type: types.SEARCH_ISRC_SUCCESS, payload: data } );
    } catch ( error ) {
        yield put( {
            type: types.SEARCH_ISRC_ERROR, payload: error,
        } );
    }
}

export default function* main() {
    yield takeEvery( types.SEARCH_ISRC, searchISRC );
}
