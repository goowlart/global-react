import React, { Component } from 'react';

import Button from '../Button'


export default class HeaderRightButton extends Component {

  

    render() {


        return (
         
            <div className="col-6 col-md-2">
               <Button placeholder="Logout"  className="btn btn-secondary btn-sm  float-right"></Button>
            </div>

        );
    }
}
