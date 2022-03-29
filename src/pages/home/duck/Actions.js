import types from "./Types";

const searchISRC = payload => ( { type: types.SEARCH_ISRC, payload } );

export default {
    searchISRC,
};
