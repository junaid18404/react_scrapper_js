import React from 'react';
import './App.css';
import Scrapper from "./components/scrapper";

export default class App extends React.Component {
    state = {
        show: false
    };

    render() {
        return (
            <div className="App container">
                <header>
                    <h1>TODO App</h1>
                </header>
                <div>
                    <button className='btn btn-info btn-lg hide' onClick={this.getStarted}>Let get started</button>
                    {this.state.show ? <Scrapper/> : null};
                </div>
            </div>
        );
    }

    getStarted = () => {
        this.setState({show: true});
        console.log(this.state.show);
    };
}
