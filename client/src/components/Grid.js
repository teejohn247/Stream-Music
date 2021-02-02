import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import {PLAY_TRACK} from '../actions/types'
import { playTrack } from '../actions/playlist';
import { getPlaylist } from '../actions/playlist';
import { getTopRated } from '../actions/topRated';
import TopSongs from './TopSongs';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';


const Grid = ({mus, playIndex, topMusic, next, getTopRated }) => {

  const getAudioInstance = instance => { 
  this.player = instance;
  }


return ( 
  <Fragment>
    <div className="swiper-slide audio-item pause" title="Click to play" draggable="true" onClick={() => next.playByIndex(playIndex)}>
    <div className="ms_rcnt_box">
      <div className="ms_rcnt_box_img">
        <img src={"https://streaming-audio-library.herokuapp.com/api/v1/file/" + mus[0].filename + "/" + mus[0].id} alt />
        <div className="ms_main_overlay">
          <div className="ms_box_overlay" />
          <div className="ms_more_icon">
            <img src="images/svg/more.svg" alt />
          </div>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
          <div className="ms_play_icon" >
            <img src="images/svg/play.svg" alt />
          </div>
        </div>
      </div>
      <div className="ms_rcnt_box_text" >
        <h3><span>Dream Your Moments (Duet)</span></h3>
        <p>Ava Cornish &amp; Brian Hill</p>
      </div>
    </div>
  </div>


  

  

{/* <ReactJkMusicPlayer {...options} getAudioInstance={getAudioInstance} /> */}
{/* <div className="ms_weekly_wrapper">
    <div className="ms_weekly_inner">
      <div className="row">
        <div className="col-lg-12">
          <div className="ms_heading">
           <div className="col-lg-4 col-md-12 padding_right40">
          <div className="ms_weekly_box">
            <h1>weekly top 15</h1>
          </div>
        </div>

            {topMusic.map(mus => (
                    <TopSongs key={mus.playIndex} playIndex={mus.playIndex} mus={mus.files} />
                  ))}

          </div>
           </div>

        </div>
    </div>
  </div> */}
</Fragment>

) 
}
Grid.PropTypes = {
    playTrack: PropTypes.func.isRequired,
    mus: PropTypes.object.isRequired,
    topMusic: PropTypes.object.isRequired,
    playIndex: PropTypes.number.isRequired,
    getTopRated: PropTypes.func.isRequired,
    getPlaylist: PropTypes.func.isRequired,
    playlist: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    music: state.music,
    playlist: state.playlist,
})
export default connect(mapStateToProps, { playTrack })(Grid);