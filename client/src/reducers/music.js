import { GET_MUSIC, POST_MUSIC,PLAY_TRACK, TOP_RATED, GET_ERROR } from "../actions/types";

const initialState = {
    musics: null,
    loading:true,
    success: false,
    error: {}
}


export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case GET_MUSIC:
        return {
            ...state,
            musics : payload.records.map((file,i) => {
                return {playIndex: i, ...file}
            }),
            // music: payload.records,
            loading: false
        }
        case GET_ERROR:
        return {
            ...state,
            error: payload,
            loading: false
        }
        default:
        return state;
    }
   
}