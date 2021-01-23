import { GET_MUSIC, POST_MUSIC, GET_ERROR } from "../actions/types";

const initialState = {
    music: null,
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
            music: payload.allMusic,
            loading: false
        }
        case POST_MUSIC:
        return {
            ...state,
            music: [payload.task, ...state.music],
            success: true,
            loading: false
        }
        case EDIT_TASK:
        return {
            ...state,
            music: payload.allMusic,
            loading: false
        }
        case DELETE_TASK:
            console.log(payload.id)
            return {
                ...state,
                music: state.musics.filter(task => task._id !== payload),
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