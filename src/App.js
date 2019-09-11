import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import "./style.css"
import Routes from './routes'



class App extends Component {

    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <Provider store={store} >
                    <Routes />
                </Provider>
            </DndProvider>
        );
    }
}

export default App;
