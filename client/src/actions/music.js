import axios from 'axios';
import { GET_ERROR, GET_MUSIC, PLAY_TRACK, TOP_RATED} from "./types";

export const getMusic = () => async dispatch => {
    const res = await axios.get('https://streaming-audio-library.herokuapp.com/api/v1/all_files/1/10');
    try{
    dispatch({
        type: GET_MUSIC,
        payload: res.data
    });
} catch (err) {
    dispatch({
        type: GET_ERROR,
        payload:{ status: err.message}
    })
}
}

export const getTopRated = () => async dispatch => {
    const res = await axios.get('https://streaming-audio-library.herokuapp.com/api/v1/api/v1/most_stream');
    try{
    dispatch({
        type: TOP_RATED,
        payload: res.data
    });
} catch (err) {
    dispatch({
        type: GET_ERROR,
        payload:{ status: err.message}
    })
}
}


