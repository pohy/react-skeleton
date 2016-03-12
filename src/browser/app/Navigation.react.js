/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                &nbsp;|&nbsp;
                <Link to="/counter">Counter</Link>
                &nbsp;|&nbsp;
                <Link to="/about">About</Link>
            </div>
        );
    }
}
