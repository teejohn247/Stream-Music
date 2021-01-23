import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Home from './components/Home';
import Footer from './components/Footer';
import store from './store';
import './App.css';


const App = () => {

    return (
        <Provider store={store}>
        <Router>
            <div>
            <Loader />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Footer />
            </div>
        </Router>
       </Provider>
    );

}

export default App;