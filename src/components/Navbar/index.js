import React, { Component } from 'react';


export default class NavBar extends Component {

    render() {

        return (
            
            <div class="row card-header">
                <div class="col-12 col-md-10">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item" >
                            <a class="nav-link active" href="#">Programming</a>
                        </li>
                        <li>
                            <a></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" >+</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-md-2">

                    <button>Logout</button>

                </div>


            </div>

        )
    }

}