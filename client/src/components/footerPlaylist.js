import React from 'react';
import JPlayer, {
  Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
} from 'react-jplayer';
import JPlaylist, {
  initializeOptions, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle,
} from 'react-jplaylist';


const jPlayerOptions = {
  id: 'FooterPlaylist',
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [
    {
      id: 0,
      title: 'Tempered Song',
      artist: 'Miaow',
      sources: {
        mp3: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
        oga: 'http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg',
      },
    },
    {
      id: 1,
      title: 'Cro Magnon Man',
      artist: 'The Stark Palace',
      sources: {
        mp3: 'http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3',
        oga: 'http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg',
      },
    },
  ],
};



initializeOptions(jPlayerOptions, jPlaylistOptions);

{/* <div class="ms_player_wrapper">
<div class="ms_player_close"><i class="fa fa-angle-up" aria-hidden="true"></i></div>
<div class="player_mid">
    <div class="audio-player">
        <div id="jquery_jplayer_1" class="jp-jplayer"></div>
        <div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">
            <div class="player_left">
                <div class="ms_play_song">
                    <div class="play_song_name"><a href="javascript:void(0);" id="playlist-text">
                            <div class="jp-now-playing flex-item">
                                <div class="jp-track-name"></div>
                                <div class="jp-artist-name"></div>
                            </div>
                        </a></div>
                </div>
                <div class="play_song_options">
                    <ul>
                        <li><a href="#"><span class="song_optn_icon"><i
                                        class="ms_icon icon_download"></i></span>download now</a>
                        </li>
                        <li><a href="#"><span class="song_optn_icon"><i
                                        class="ms_icon icon_fav"></i></span>Add To Favourites</a>
                        </li>
                        <li><a href="#"><span class="song_optn_icon"><i
                                        class="ms_icon icon_playlist"></i></span>Add To Playlist</a>
                        </li>
                        <li><a href="#"><span class="song_optn_icon"><i
                                        class="ms_icon icon_share"></i></span>Share</a></li>
                    </ul>
                </div><span class="play-left-arrow"><i class="fa fa-angle-right"
                        aria-hidden="true"></i></span>
            </div>
            <div class="jp_queue_wrapper"><span class="que_text" id="myPlaylistQueue"><i
                        class="fa fa-angle-up" aria-hidden="true"></i> queue</span>
                <div id="playlist-wrap" class="jp-playlist" style="display: none;">
                    <div class="jp_queue_cls"><i class="fa fa-times" aria-hidden="true"></i></div>
                    <h2>queue</h2>
                    <div class="jp_queue_list_inner mCustomScrollbar _mCS_2 mCS-autoHide mCS_no_scrollbar"
                        style="height: 345px; position: relative; overflow: visible;">
                        <div id="mCSB_2"
                            class="mCustomScrollBox mCS-minimal mCSB_vertical mCSB_outside"
                            tabindex="0" style="max-height: 345px;">
                            <div id="mCSB_2_container"
                                class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                style="position:relative; top:0; left:0;" dir="ltr">
                                <ul>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>
                        </div>
                        <div id="mCSB_2_scrollbar_vertical"
                            class="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal mCSB_scrollTools_vertical"
                            style="display: none;">
                            <div class="mCSB_draggerContainer">
                                <div id="mCSB_2_dragger_vertical" class="mCSB_dragger"
                                    style="position: absolute; min-height: 50px; top: 0px;">
                                    <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                </div>
                                <div class="mCSB_draggerRail"></div>
                            </div>
                        </div>
                    </div>
                    <div class="jp_queue_btn"><a href="javascript:;" class="ms_clear"
                            data-toggle="modal" data-target="#clear_modal">clear</a><a
                            href="clear_modal.html" class="ms_save" data-toggle="modal"
                            data-target="#save_modal">save</a></div>
                </div>
            </div>
            <div class="jp-type-playlist">
                <div class="jp-gui jp-interface flex-wrap">
                    <div class="jp-controls flex-item"><button class="jp-previous" tabindex="0"><i
                                class="ms_play_control"></i></button><button class="jp-play"
                            tabindex="0"><i class="ms_play_control"></i></button><button
                            class="jp-next" tabindex="0"><i class="ms_play_control"></i></button>
                    </div>
                    <div class="jp-progress-container flex-item">
                        <div class="jp-time-holder"><span class="jp-current-time" role="timer"
                                aria-label="time">&nbsp;</span><span class="jp-duration"
                                role="timer" aria-label="duration">&nbsp;</span></div>
                        <div class="jp-progress">
                            <div class="jp-seek-bar">
                                <div class="jp-play-bar">
                                    <div class="bullet"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="jp-volume-controls flex-item">
                        <div class="widget knob-container">
                            <div class="knob-wrapper-outer">
                                <div class="knob-wrapper">
                                    <div class="knob-mask">
                                        <div class="knob d3" style="transform: rotateZ(270deg);">
                                            <span></span></div>
                                        <div class="handle" style="transform: rotateZ(270deg);">
                                        </div>
                                        <div class="round"><img src="images/svg/volume.svg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="jp-toggles flex-item"><button class="jp-shuffle" tabindex="0"
                            title="Shuffle"><i class="ms_play_control"></i></button><button
                            class="jp-repeat" tabindex="0" title="Repeat"><i
                                class="ms_play_control"></i></button></div>
                    <div class="jp_quality_optn custom_select"><select style="display: none;">
                            <option>quality</option>
                            <option value="1">HD</option>
                            <option value="2">High</option>
                            <option value="3">medium</option>
                            <option value="4">low</option>
                        </select>
                        <div class="nice-select" tabindex="0"><span class="current">quality</span>
                            <ul class="list">
                                <li data-value="quality" class="option selected">quality</li>
                                <li data-value="1" class="option">HD</li>
                                <li data-value="2" class="option">High</li>
                                <li data-value="3" class="option">medium</li>
                                <li data-value="4" class="option">low</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */}

const FooterPlaylist = () => (
  <JPlaylist id={jPlayerOptions.id}>
    <JPlayer className="jp-sleek">
      <Audio />
      <Gui>
        <div className="jp-controls jp-icon-controls">
          <Previous><i className="fa fa-step-backward" /></Previous>
          <Play><i className="fa">{/* Icon set in css */}</i></Play>
          <Next><i className="fa fa-step-forward" /></Next>
          <Repeat>
            <i className="fa">{/* Icon set in css */}</i>
            <i className="fa fa-repeat" />
          </Repeat>
          <Shuffle><i className="fa fa-random" /></Shuffle>
          <div className="jp-progress">
            <SeekBar>
              <BufferBar />
              <PlayBar />
              <CurrentTime />
              <Duration />
            </SeekBar>
          </div>
          <div className="jp-volume-container">
            <Mute>
              <i className="fa">{/* Icon set in css */}</i>
            </Mute>
            <div className="jp-volume-slider">
              <div className="jp-volume-bar-container">
                <VolumeBar />
              </div>
            </div>
          </div>
          <div className="jp-playlist-container">
            <Playlist>
              <Remove />
              <MediaLink>
                <PlaylistTitle />
              </MediaLink>
            </Playlist>
            <TogglePlaylist><i className="fa fa-ellipsis-h" /></TogglePlaylist>
          </div>
          <FullScreen><i className="fa fa-expand" /></FullScreen>
          <Download><i className="fa fa-download" /></Download>
          <div className="jp-title-container">
            <Poster />
            <Title />
          </div>
        </div>
        <BrowserUnsupported />
      </Gui>
    </JPlayer>
  </JPlaylist>
);

export default FooterPlaylist;
