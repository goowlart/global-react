import React, { Component } from 'react';
import HeaderRightButton from './HeaderRightButton'
import HeaderCenterContent from './HeaderCenterContent'
import {List} from '../../components/List'


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
            
        };

    }

    render() {
        const {data} = this.state
  
        return (

            <div className="row card-header">
            <HeaderCenterContent data={data}></HeaderCenterContent>
            <HeaderRightButton></HeaderRightButton>
        </div>
        );
    }
}

