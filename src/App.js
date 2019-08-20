import React, {Component} from 'react';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import "./style.css"
import Routes from './routes'

class App extends Component {

    render() {
        return (
            <DndProvider backend={HTML5Backend}>
            <Routes />
            </DndProvider>
        );
    }
}

export default App;
