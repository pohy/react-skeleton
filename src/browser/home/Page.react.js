/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Page extends Component {
    render() {
        return (
            <div>
                <Helmet title="Home"/>
                <h4>Yaay, hot reloading works</h4>
            </div>
        );
    }
}
