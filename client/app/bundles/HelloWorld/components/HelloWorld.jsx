import PropTypes from 'prop-types';
import React from 'react';
import AssignmentsSidebarContainer from
  './assignments_sidebar/assignments_sidebar_container'
import AssignmentContentContainer from
  './assignment_content/assignment_content_container'

export default class HelloWorld extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = { name: this.props.name };
    this.state = {
      allAssignments: this.props.all_assignments,
      currentAssignment: {}
      }
    this.updateCurrentAssignment = this.updateCurrentAssignment.bind(this)
  }

  updateCurrentAssignment(assignment) {
    this.setState({
      currentAssignment: Object.assign({}, assignment)
    })
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <AssignmentsSidebarContainer
          assignments={this.state.allAssignments}
          updateCurrentAssignment={this.updateCurrentAssignment}/>
          <AssignmentContentContainer
            assignment={this.state.currentAssignment}/>
      </div>
    );
  }
}
