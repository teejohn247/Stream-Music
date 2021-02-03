import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getPlaylist } from '../actions/playlist';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';




const MusicPlayer = ({ getPlaylist, playlist }) => { 

    useEffect(() => {
        getPlaylist();
    }, [playlist.defaultPlayIndex]);

    const getAudioInstance = instance => {
        this.player = instance;
    }


    var options = {
        playing: false,
         audioLists: playlist.audioLists,
          autoPlay: false,
          mode: "full",
          clearPriorAudioLists: true,
          defaultPosition: {
            bottom: 0,
        },
    }

    console.log(options)

    return(
        playlist.loading == false && <ReactJkMusicPlayer {...options} getAudioInstance={getAudioInstance} />
    )
}

MusicPlayer.PropTypes = {
    getPlaylist: PropTypes.func.isRequired,
    playlist: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    playlist: state.playlist,
})
export default connect(mapStateToProps, { getPlaylist })(MusicPlayer);