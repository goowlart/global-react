import React, { Component } from 'react';
import HeaderLeftButton from './HeaderLeftButton'
import {ListItem} from '../../components/List'

export default class HeaderCenterContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
            
        };

    }

    render() {
        const {data} = this.state
        return (
            <div className="col-12 col-md-10">
      
            <ul className="nav nav-tabs card-header-tabs">
            <HeaderLeftButton></HeaderLeftButton>    
            <ListItem data={data} classNameItem={'nav-link'}></ListItem>
                <li className="nav-item">
                    <div className="nav-link" >+</div>
                </li>
            </ul>
        </div>
        );
    }
}
