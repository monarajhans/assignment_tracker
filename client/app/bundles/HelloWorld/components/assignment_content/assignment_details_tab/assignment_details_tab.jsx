import PropTypes from 'prop-types';
import React from 'react';

export default class AssignmentDetailsTab extends React.Component {
  render() {
    return (
      <div>
        This is assignment details tab
        <p>{this.props.assignmentDetails.title}</p>
        <p>{this.props.assignmentDetails.due_on}</p>
        <p>{this.props.assignmentDetails.description}</p>
      </div>
    );
  }
}
