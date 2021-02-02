import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getPlaylist } from '../actions/playlist';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';


const TopSongs = ({key, mus, playIndex, getPlaylist, next, playlist }) => {

return (
    <Fragment>
        <div className="ms_weekly_box" onClick={() => next.playByIndex(playIndex)}>
            <div className="weekly_left">
              <span className="w_top_no">
                0{playIndex + 1}
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src={"https://streaming-audio-library.herokuapp.com/api/v1/file/" + mus[0].filename + "/" + mus[0].id} alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">{mus.title}</a></h3>
                  <p>{mus.author}</p>
                </div>
              </div>
            </div>
            <div className="weekly_right">
              <span className="w_song_time">5:10</span>
              <span className="ms_more_icon" data-other={1}>
                <img src="images/svg/more.svg" alt />									
              </span>
            </div>
            <ul className="more_option">
              <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
              <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
              <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
              <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
              <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
            </ul>
        </div>
          <div className="ms_divider" />

            </Fragment>
         
    
)
}
TopSongs.PropTypes = {
    mus: PropTypes.object.isRequired,
    key: PropTypes.number.isRequired,
    playIndex: PropTypes.number.isRequired,

}
const mapStateToProps = (state) => ({
    playlist: state.playlist,
})
export default connect(mapStateToProps)(TopSongs);