import _ from 'lodash';
import React, {Component} from 'react';


class homeArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'value'
        };
    }

    render() {
        return(
            <div className='body'>
                <p>Home</p>
            </div>
        )
    }
};

export default homeArea