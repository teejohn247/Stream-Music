import axios from 'axios';
import { GET_ERROR,  PLAY_TRACK, TOP_RATED} from "./types";

export const getTopRated = () => async dispatch => {
    const res = await axios.get('https://streaming-audio-library.herokuapp.com/api/v1/most_stream');
    try{
    dispatch({
        type: TOP_RATED,
        payload: res.data.count
    });
} catch (err) {
    dispatch({
        type: GET_ERROR,
        payload:{ status: err.message}
    })
}
}