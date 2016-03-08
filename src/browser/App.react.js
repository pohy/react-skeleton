/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React, {Component} from 'react';

import Home from './home/Page.react';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Index page</h1>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
