/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import './App.scss';
import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';

import Navigation from './Navigation.react';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const {children} = this.props;

        return (
            <div>
                {/* TODO: add meta */}
                <Helmet
                  titleTemplate="%s - Party Tube"
                />
                <h1>Party YouTube</h1>
                <Navigation />
                <hr />
                {children}
            </div>
        );
    }
}

export default App;
