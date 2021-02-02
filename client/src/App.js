import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// Styles the jPlaylist to look nice
import 'react-jplaylist/src/less/skins/sleek.less';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import 'react-jplaylist/src/less/controls/iconControls.less';
import Footer from './components/Footer';
import store from './store';
import './App.css';
import Loader from './components/Loader';
import FooterPlaylist from './components/footerPlaylist';
import Playlist from './components/Playlist';
import TestPlaylist from './components/TestPlaylist';
import MusicPlayer from './components/MusicPlayer';




const App = () => {
  const state = store.getState();
  console.log('sta',state)

    return (
        <Provider store={store}>
        <Router>
            <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            {/* <Playlist /> */}
            {/* <TestPlaylist /> */}
            {/* <MusicPlayer /> */}
            {/* <FooterPlaylist /> */}
            {/* <Footer /> */}
            </div>
        </Router>
       </Provider>
    );

}

export default App;