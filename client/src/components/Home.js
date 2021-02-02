import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getMusic } from '../actions/music';
import { getTopRated } from '../actions/topRated';
import { getPlaylist } from '../actions/playlist';
// import Spinner from './layout/Spinner';
import Loader from './Loader';
import Grid from './Grid';
import TopSongs from './TopSongs';
import Swiper from 'react-id-swiper';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

const Home = ({ getMusic, getTopRated, getPlaylist, playlist, topRated:{music}, music: { musics, loading }}) => {
    useEffect(() => {
       const getUsers = async () => {
       await getTopRated();
       await getMusic();
       await getPlaylist();
  };
  getUsers();
  }, []);
    // useEffect(() => {
    // }, []);
    var options = {
    // playing: false,
     audioLists: playlist.audioLists,
      autoPlay: false,
      mode: "full",
      clearPriorAudioLists: true,
      defaultPosition: {
        bottom: 0,
    },
}
const getAudioInstance = instance => {
return this.player = instance;
}

console.log(options)
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }
return loading == true ? ( <Loader /> )
 : (
<div className="ms_content_wrapper padder_top80">
  <div className="ms_header">
    <div className="ms_top_left">
      <div className="ms_top_search">
        <input type="text" className="form-control" placeholder="Search Music Here.." />
        <span className="search_icon">
          <img src="images/svg/search.svg" alt />
        </span>
      </div>
      <div className="ms_top_trend">
        <span><a href="#" className="ms_color">Trending Songs :</a></span> <span className="top_marquee"><a href="#">Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8 More)</a></span>
      </div>
    </div>
    <div className="ms_top_right">
      <div className="ms_top_lang">
        <span data-toggle="modal" data-target="#lang_modal">languages <img src="images/svg/lang.svg" alt /></span>
      </div>
      <div className="ms_top_btn">
        <a href="javascript:;" className="ms_btn reg_btn" data-toggle="modal" data-target="#myModal"><span>register</span></a>
        <a href="javascript:;" className="ms_btn login_btn" data-toggle="modal" data-target="#myModal1"><span>login</span></a>
      </div>
    </div>
  </div>
  {/*-Banner-*/}
  <div className="ms-banner">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="ms_banner_img">
            <img src="images/banner.png" alt className="img-fluid" />
          </div>
          <div className="ms_banner_text">
            <h1>This Month’s</h1>
            <h1 className="ms_color">Record Breaking Albums !</h1>
            <p>Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley, One More Of A Stranger, Endless<br /> Things, The Heartbeat Stops, Walking Promises, Desired Games and many more...</p>
            <div className="ms_banner_btn">
              <a href="#" className="ms_btn">Listen Now</a>
              <a href="#" className="ms_btn">Add To Queue</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-Recently Played Music-*/}
  <div>
    <Swiper {...params}>
    {musics.map(mus => (
          <Grid key={mus.file_id} next={this.player} playIndex={mus.playIndex} mus={mus.files} />
        ))}
        {/* <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div> */}
    </Swiper>
    </div>

  <div className="ms_rcnt_slider">
    <div className="ms_heading">
      <h1>Recently Played</h1>
      <span className="veiw_all"><a href="#">view more</a></span>
    </div>
    
    <div className="swiper-container">
      <div className="swiper-wrapper">
        
       

        {/* <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/music/r_music2.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Until I Met You</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div> */}
        {/* <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/music/r_music3.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Gimme Some Courage</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/music/r_music4.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dark Alley Acoustic</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/music/r_music5.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Walking Promises</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/music/r_music6.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Desired Games</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/music/r_music1.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dream Your Moments (Duet)</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/music/r_music2.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Until I Met You</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/music/r_music3.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Gimme Some Courage</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div> */}
        {/* <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/music/r_music4.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dark Alley Acoustic</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    {/* Add Arrows */}
    <div className="swiper-button-next slider_nav_next" />
    <div className="swiper-button-prev slider_nav_prev" />
  </div>
  {/*-Weekly Top 15-*/}

  

  <div className="ms_weekly_wrapper">
    <div className="ms_weekly_inner">
      <div className="row">
        <div className="col-lg-12">
          <div className="ms_heading">
           <div className="col-lg-4 col-md-12 padding_right40">
          <div className="ms_weekly_box">
            <h1>weekly top 15</h1>
          </div>
        </div>

            {music.map(mus => (
                    <TopSongs key={mus.playIndex} next={this.player} playIndex={mus.playIndex} mus={mus.files} />
                  ))}

          </div>
           </div>

        </div>
    </div>
  </div>
<ReactJkMusicPlayer {...options} getAudioInstance={getAudioInstance} />


{/* 
  <div className="ms_weekly_wrapper">
    <div className="ms_weekly_inner">
      <div className="row">
        <div className="col-lg-12">
          <div className="ms_heading">
            <h1>weekly top 15</h1>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 padding_right40">
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                01
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song1.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Until I Met You</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                02
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song2.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Walking Promises</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                03
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song3.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Gimme Some Courage</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                04
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song4.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Desired Games</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                05
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song5.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Dark Alley Acoustic</a></h3>
                  <p>Ava Cornish</p>
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
        </div>
        <div className="col-lg-4 col-md-12 padding_right40">
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                06
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song6.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Walking Promises</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                07
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song7.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Endless Things</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box ms_active_play">
            <div className="weekly_left">
              <span className="w_top_no">
                08
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song8.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <div className="ms_bars">
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                    </div>
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Dream Your Moments</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                09
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song9.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Until I Met You</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                10
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song5.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Gimme Some Courage</a></h3>
                  <p>Ava Cornish</p>
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
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                11
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song2.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Dark Alley Acoustic</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                12
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song11.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">The Heartbeat Stops</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                13
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song12.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">One More Stranger</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                14
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song13.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Walking Promises</a></h3>
                  <p>Ava Cornish</p>
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
          <div className="ms_weekly_box">
            <div className="weekly_left">
              <span className="w_top_no">
                15
              </span>
              <div className="w_top_song">
                <div className="w_tp_song_img">
                  <img src="images/weekly/song14.jpg" alt className="img-fluid" />
                  <div className="ms_song_overlay">
                  </div>
                  <div className="ms_play_icon">
                    <img src="images/svg/play.svg" alt />
                  </div>
                </div>
                <div className="w_tp_song_name">
                  <h3><a href="#">Endless Things</a></h3>
                  <p>Ava Cornish</p>
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
        </div>
      </div>
    </div>
  </div> */}
  {/*-Featured Artists Music-*/}
  <div className="ms_featured_slider">
    <div className="ms_heading">
      <h1>Featured Artists</h1>
      <span className="veiw_all"><a href="#">view more</a></span>
    </div>
    <div className="ms_feature_slider swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song1.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Best Of Ava Cornish</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song2.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Until I Met You</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song3.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Gimme Some Courage</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song4.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dark Alley Acoustic</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song5.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Walking Promises</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song6.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Desired Games</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song1.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dream Your Moments (Duet)</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song2.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Until I Met You</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song3.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Gimme Some Courage</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/featured/song4.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dark Alley Acoustic</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Add Arrows */}
    <div className="swiper-button-next1 slider_nav_next" />
    <div className="swiper-button-prev1 slider_nav_prev" />
  </div>
  {/*--Add Section Start--*/}
  <div className="ms_advr_wrapper">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <a href="#"><img src="images/adv.jpg" alt className="img-fluid" /></a>
        </div>
      </div>
    </div>
  </div>
  {/*--New Releases Section Start--*/}
  <div className="ms_releases_wrapper">
    <div className="ms_heading">
      <h1>New Releases</h1>
      <span className="veiw_all"><a href="#">view more</a></span>
    </div>
    <div className="ms_release_slider swiper-container">
      <div className="ms_divider" />
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="ms_release_box">
            <div className="w_top_song">
              <span className="slider_dot" />
              <div className="w_tp_song_img">
                <img src="images/weekly/song1.jpg" alt />
                <div className="ms_song_overlay">
                </div>
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
              <div className="w_tp_song_name">
                <h3><a href="#">Dark Alley Acoustic</a></h3>
                <p>Ava Cornish</p>
              </div>
            </div>
            <div className="weekly_right">
              <span className="w_song_time">5:10</span>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_release_box">
            <div className="w_top_song">
              <span className="slider_dot" />
              <div className="w_tp_song_img">
                <img src="images/weekly/song2.jpg" alt />
                <div className="ms_song_overlay">
                </div>
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
              <div className="w_tp_song_name">
                <h3><a href="#">Dark Alley Acoustic</a></h3>
                <p>Ava Cornish</p>
              </div>
            </div>
            <div className="weekly_right">
              <span className="w_song_time">5:10</span>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_release_box">
            <div className="w_top_song">
              <span className="slider_dot" />
              <div className="w_tp_song_img">
                <img src="images/weekly/song3.jpg" alt />
                <div className="ms_song_overlay">
                </div>
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
              <div className="w_tp_song_name">
                <h3><a href="#">Dark Alley Acoustic</a></h3>
                <p>Ava Cornish</p>
              </div>
            </div>
            <div className="weekly_right">
              <span className="w_song_time">5:10</span>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_release_box">
            <div className="w_top_song">
              <span className="slider_dot" />
              <div className="w_tp_song_img">
                <img src="images/weekly/song4.jpg" alt />
                <div className="ms_song_overlay">
                </div>
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
              <div className="w_tp_song_name">
                <h3><a href="#">Dark Alley Acoustic</a></h3>
                <p>Ava Cornish</p>
              </div>
            </div>
            <div className="weekly_right">
              <span className="w_song_time">5:10</span>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_release_box">
            <div className="w_top_song">
              <span className="slider_dot" />
              <div className="w_tp_song_img">
                <img src="images/weekly/song5.jpg" alt />
                <div className="ms_song_overlay">
                </div>
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
              <div className="w_tp_song_name">
                <h3><a href="#">Dark Alley Acoustic</a></h3>
                <p>Ava Cornish</p>
              </div>
            </div>
            <div className="weekly_right">
              <span className="w_song_time">5:10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Add Arrows */}
    <div className="swiper-button-next2 slider_nav_next" />
    <div className="swiper-button-prev2 slider_nav_prev" />
  </div>
  {/*--Featured Albumn Section Start--*/}
  <div className="ms_fea_album_slider">
    <div className="ms_heading">
      <h1>Featured Albums</h1>
      <span className="veiw_all"><a href="#">view more</a></span>
    </div>
    <div className="ms_album_slider swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album1.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Bloodlust</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album2.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Time flies</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album3.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dark matters</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album4.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Eye to eye</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album5.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Cloud nine</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album6.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Cobweb of lies</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album1.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Bloodlust</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album2.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Time flies</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album3.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dark matters</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/album/album4.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Eye to eye</a></h3>
              <p>Ava Cornish &amp; Brian Hill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Add Arrows */}
    <div className="swiper-button-next3 slider_nav_next" />
    <div className="swiper-button-prev3 slider_nav_prev" />
  </div>
  {/*--Top Genres Section Start--*/}
  <div className="ms_genres_wrapper">
    <div className="row">
      <div className="col-lg-12">
        <div className="ms_heading">
          <h1>Top Genres</h1>
          <span className="veiw_all"><a href="#">view more</a></span>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="ms_genres_box">
          <img src="images/genrs/img1.jpg" alt className="img-fluid" />
          <div className="ms_main_overlay">
            <div className="ms_box_overlay" />
            <div className="ms_play_icon">
              <img src="images/svg/play.svg" alt />
            </div>
            <div className="ovrly_text_div">
              <span className="ovrly_text1"><a href="#">romantic</a></span>
              <span className="ovrly_text2"><a href="#">view song</a></span>
            </div>
          </div>
          <div className="ms_box_overlay_on">
            <div className="ovrly_text_div">
              <span className="ovrly_text1"><a href="#">romantic</a></span>
              <span className="ovrly_text2"><a href="#">view song</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-lg-4">
            <div className="ms_genres_box">
              <img src="images/genrs/img2.jpg" alt className="img-fluid" />
              <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">Classical</a></span>
                </div>
              </div>
              <div className="ms_box_overlay_on">
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">Classical</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="ms_genres_box">
              <img src="images/genrs/img3.jpg" alt className="img-fluid" />
              <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">hip hop</a></span>
                </div>
              </div>
              <div className="ms_box_overlay_on">
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">hip hop</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="ms_genres_box">
              <img src="images/genrs/img5.jpg" alt className="img-fluid" />
              <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">dancing</a></span>
                </div>
              </div>
              <div className="ms_box_overlay_on">
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">dancing</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ms_genres_box">
              <img src="images/genrs/img6.jpg" alt className="img-fluid" />
              <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">EDM</a></span>
                </div>
              </div>
              <div className="ms_box_overlay_on">
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">EDM</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="ms_genres_box">
          <img src="images/genrs/img4.jpg" alt className="img-fluid" />
          <div className="ms_main_overlay">
            <div className="ms_box_overlay" />
            <div className="ms_play_icon">
              <img src="images/svg/play.svg" alt />
            </div>
            <div className="ovrly_text_div">
              <span className="ovrly_text1"><a href="#">rock</a></span>
            </div>
          </div>
          <div className="ms_box_overlay_on">
            <div className="ovrly_text_div">
              <span className="ovrly_text1"><a href="#">rock</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--Add Section Start--*/}
  <div className="ms_advr_wrapper ms_advr2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <a href="#"><img src="images/adv1.jpg" alt className="img-fluid" /></a>
        </div>
      </div>
    </div>
  </div>
  {/*--Live Radio Section Start--*/}
  <div className="ms_radio_wrapper">
    <div className="ms_heading">
      <h1>Live Radio</h1>
      <span className="veiw_all"><a href="#">view more</a></span>
    </div>
    <div className="ms_radio_slider swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img1.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Top Trendings</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img2.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">New Romantic Charts</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img3.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dance Beats - Hip Hops</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img4.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Workout Time</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img5.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Best Classics Of All Time</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img6.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Heart Broken - Soul Music</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img1.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dream Your Moments (Duet)</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img2.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Until I Met You</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img3.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Gimme Some Courage</a></h3>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="ms_rcnt_box">
            <div className="ms_rcnt_box_img">
              <img src="images/radio/img4.jpg" alt />
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
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">Dark Alley Acoustic</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Add Arrows */}
    <div className="swiper-button-next4 slider_nav_next" />
    <div className="swiper-button-prev4 slider_nav_prev" />
  </div>
</div>
)
}

Home.PropTypes = {
    getMusic: PropTypes.func.isRequired,
    music: PropTypes.object.isRequired,
    topRated: PropTypes.object.isRequired,
    getTopRated: PropTypes.func.isRequired,
    playlist: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    music: state.music,
    playlist: state.playlist,
    topRated: state.topRated,

})
export default connect(mapStateToProps, { getMusic, getPlaylist, getTopRated })(Home);