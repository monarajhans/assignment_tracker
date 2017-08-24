import PropTypes from 'prop-types';
import React from 'react';

export default class AssignmentsSidebarPresenter extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.openAssignment = this.openAssignment.bind(this)
    this.state = { active: 'notActive' }
  }

  openAssignment() {
    this.props.updateCurrentAssignment(this.props.object)
  }

  render() {
    return (
      <div className="assignmentsPresenter" onClick={this.openAssignment}>
        <p className="assignmentDetails assignmentTitle">
          Title: {this.props.object.title}
        </p>
        <p className="assignmentDetails">Due on: {this.props.object.due_on}</p>
      </div>
    );
  }
}
