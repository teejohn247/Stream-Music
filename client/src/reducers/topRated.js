import { GET_MUSIC, POST_MUSIC,PLAY_TRACK, TOP_RATED, GET_ERROR } from "../actions/types";

const initialState = {
    music: null,
    loading:true,
    success: false,
    error: {}
}


export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case TOP_RATED:
        return {
            ...state,
            music : payload.map((file,i) => {
                return {playIndex: i, ...file}
            }),
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