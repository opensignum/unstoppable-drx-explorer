import {
    call,
    put,
    takeEvery,
} from "redux-saga/effects";
import types from "./Types";

function* init() {
    // const env = process.env.REACT_APP_ENV_NAME;
    // const health = process.env[ `REACT_APP_HEALTH_URL_${ env }` ];

    try {
        /* yield all( [
            call( axios.get, `${ health }` ),
        ] ); */
        yield put( { type: types.VALIDATE_CONNECTION_SUCCESS } );
    } catch ( error ) {
        yield put( { type: types.VALIDATE_CONNECTION_ERROR, error } );
    }
}

export default function* main() {
    yield takeEvery( types.INIT, init );
}
