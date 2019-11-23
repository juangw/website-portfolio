import _ from 'lodash';
import React, {Component} from 'react';


class ProjectArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'value'
        };

        this.renderProjects = this.renderProjects.bind(this);
    }

    renderProjects() {
        
    }

    render() {
        return(
            <div>
                renderProjects()
            </div>
        )
    }
};

export default ProjectArea