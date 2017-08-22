import PropTypes from 'prop-types';
import React from 'react';

export default class AssignmentsSidebarPresenter extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.openAssignment = this.openAssignment.bind(this)
  }

  openAssignment(assignment) {
    debugger
  }

  render() {
    return (
      <div onClick={this.openAssignment}>
        <p>Title: {this.props.object.title}</p>
        <p>Due on: {this.props.object.due_on}</p>
      </div>
    );
  }
}
