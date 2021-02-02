import { combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import { reducer as jPlaylists } from 'react-jplaylist';
import music from './music';
import playlist from './playlist';
import topRated from './topRated';






export default combineReducers({
    music,
    playlist,
    topRated
})