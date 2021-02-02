import { GET_PLAYLIST, POST_MUSIC, PLAY_TRACK, GET_ERROR } from "../actions/types";

const initialState = {
  playlistCoverUrl: null,
  playlistName: null,
  bandName: null,
  songs:[],
  audioLists:[],
  type: 'album',
  error:{},
  defaultPlayIndex: 0,
  loading:true,
}


export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case GET_PLAYLIST:
        return {

            ...state,
            playlistCoverUrl: "https://streaming-audio-library.herokuapp.com/api/v1/file/" + payload['0'].files['0'].filename + "/" + payload['0'].files['0'].id ,
            playlistName:payload['1'].title,
            bandName: payload['1'].author,
            songs :  payload.map((file,i) => {
                return { position: i + 1, songName: file.title, songUrl: "https://streaming-audio-library.herokuapp.com/api/v1/file/" + file.files[1].filename + "/" + file.file_id}
            }),
            audioLists :  payload.map((file,i) => {
                return {singer: payload['1'].author, name:payload['1'].title, cover:"https://streaming-audio-library.herokuapp.com/api/v1/file/" + payload['0'].files['0'].filename + "/" + payload['0'].files['0'].id,
                 musicSrc: "https://streaming-audio-library.herokuapp.com/api/v1/file/" + file.files[1].filename + "/" + file.file_id}
            }),
            loading:false
        }
        case PLAY_TRACK:
        return {
            ...state,
            defaultPlayIndex: payload,
            loading:true
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


//   playlistCoverUrl: 'path/to/coverUrl',
//   playlistName: 'playlist name',
//   bandName: 'band name',
//   songs: [
//     {
//       position: '1',
//       songName: 'foo',
//       songUrl: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3'
//     },