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
                        <p>
                            <b>My name is William Juang</b>
                        </p>
                        <p>
                            <b>I am an alumni from the University of Michigan School of Information. Currently, I am a Software Engineer at Groundspeed Analytics</b>
                        </p>
                        <p>
                            <b>I love to code and am always looking to improve myself through learning and mentoring</b>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default AboutMeArea