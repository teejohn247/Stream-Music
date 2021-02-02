import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import AudioPlayer from 'react-playlist-player';
import { getPlaylist } from '../actions/playlist';
import Loader from './Loader';



const TestPlaylist = ({ getPlaylist, playlist }) => {
    useEffect(() => {
        getPlaylist();
    }, []);

    console.log('ss', playlist)

    
    var currentPlayList = {
        playlistCoverUrl: playlist.playlistCoverUrl,
        playlistName: playlist.playlistName,
        bandName: playlist.bandName,
        songs: playlist.songs,
        type: playlist.type
    }
  

    // console.log('jiji', currentPlayList)


    return  (
      <div className={'Demo'}>
        {/* <button className={'Demo__load-btn'} onClick={loadPlayList()}>
          load playlist
        </button> */}
        <AudioPlayer currentPlayList={currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
      </div>
    )
  // }
}
 
//   state = {
//     currentPlayList: {}
//   }
 
//   loadPlayList = () =>
//     this.setState({
//       currentPlayList: {
//         playlistCoverUrl: 'path/to/coverUrl',
//         playlistName: 'playlist name',
//         bandName: 'band name',
//         songs: [
//           {
//             position: '1',
//             songName: 'foo',
//             songUrl: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3'
//           },
//           {
//             position: '2',
//             songName: 'bar',
//             songUrl: 'path/to/songUrl'
//           },
//           {
//             position: '3',
//             songName: 'baz',
//             songUrl: 'path/to/songUrl'
//           }
//         ],
//         type: 'album'
//       }
//     })
 
  // render() {
//     return (
//       <div className={'Demo'}>
//         <button className={'Demo__load-btn'} onClick={this.loadPlayList}>
//           load playlist
//         </button>
//         <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
//       </div>
//     )
//   // }
// }
 
TestPlaylist.PropTypes = {
    getPlaylist: PropTypes.func.isRequired,
    playlist: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    playlist: state.playlist,
})
export default connect(mapStateToProps, { getPlaylist })(TestPlaylist);

