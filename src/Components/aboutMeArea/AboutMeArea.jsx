import React, {Component} from 'react';


class AboutMeArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'value'
        };
    }

    render() {
        return(
            <div className='body'>
                <div className='background'>
                    <div className='aboutme'>
                        <p>My name is William Juang</p>
                        <p>I am an alumni from the University of Michigan School of Information. Currently, I am working as a software engineer at Groundspeed Analytics</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default AboutMeArea