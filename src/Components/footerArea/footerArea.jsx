import React, {Component} from 'react';
import { faLinkedin, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterArea extends Component {
    render() {
        return (
            <div className='footer'>
                <a href='https://www.linkedin.com/in/william-juang-b0181bb0/'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href='https://www.facebook.com/william.juang'>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href='mailto:juangw@umich.edu'>
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
            </div>
        )
    }
}

export default FooterArea