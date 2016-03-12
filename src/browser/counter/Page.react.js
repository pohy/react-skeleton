/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/9/2016.
 */
import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';

import Counter from './Counter.react';

export default class Page extends Component {
    render() {
        return (
            <div>
                <Helmet title="Click counter"/>
                <h4>Click counter</h4>
                <Counter/>
            </div>
        );
    }
}
