/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React from 'react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';

class Page extends Component {
    render() {
        return (
            <div>
                <Helmet title="About" />
                Just another react skeleton
            </div>
        );
    }
}

export default Page;
