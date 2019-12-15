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
                <div className='background'></div>
                <p>My name is William Juang</p>
                <p>I am a alumni from the University of Michigan School of Information</p>
            </div>
        )
    }
};

export default AboutMeArea