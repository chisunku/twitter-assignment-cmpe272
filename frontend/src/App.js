import React, {Component} from 'react';
import './App.css';



import {BrowserRouter} from 'react-router-dom';
import StartPage from "./component/StartPage";



class App extends Component {
    render() {
        return (
            <div className="App" >

                <BrowserRouter>
                    <StartPage/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;