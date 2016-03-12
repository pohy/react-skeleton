/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Navigation from './Navigation.react';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Image board</h1>
                <Navigation/>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
