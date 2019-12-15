import React, {Component} from 'react';
import ProjectArea from './projectArea';
import Dropdown from 'react-bootstrap/Dropdown';


class ProjectsArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: null,
            date: Date.now(),
        };
        this.project = React.createRef();

        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(e) {
        this.setState({ filter: e.currentTarget.textContent });
    }

    renderProjectFilter() {
        return(
            <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={this.setFilter}>Technical- Work</Dropdown.Item>
                <Dropdown.Item onClick={this.setFilter}>Technical- Hobby</Dropdown.Item>
                <Dropdown.Item onClick={this.setFilter}>Non-Technical- Hobby</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        )
    }

    render() {
        return(
            <div className='body'>
                {this.renderProjectFilter()}
                <p>{this.state.filter}</p>
            </div>
        )
    }
};

export default ProjectsArea