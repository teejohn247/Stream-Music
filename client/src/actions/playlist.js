import axios from 'axios';
import { GET_ERROR,  GET_PLAYLIST, PLAY_TRACK, GET_SONGS} from "./types";

export const getPlaylist = () => async dispatch => {
    const res = await axios.get('https://streaming-audio-library.herokuapp.com/api/v1/all_files/1/10');
    try{
        console.log('hello',res.data.records['0'].files['0'].filename)
    dispatch({
        type: GET_PLAYLIST,
        payload: res.data.records
    });
    // dispatch({
    //     type: GET_SONGS,
    //     payload: res.data.records
    // });
} catch (err) {
    dispatch({
        type: GET_ERROR,
        payload:{ status: err }
    })
}
}
export const playTrack = (playIndex) => async dispatch => {
    console.log('kk', 'opey')
    alert(playIndex)
    try{
    dispatch({
        type: PLAY_TRACK,
        payload: playIndex
    });
} catch (err) {
    dispatch({
        type: GET_ERROR,
        payload:{ status: err.message}
    })
}
}
