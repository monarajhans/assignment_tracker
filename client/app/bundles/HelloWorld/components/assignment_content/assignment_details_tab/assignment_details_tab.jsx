import PropTypes from 'prop-types';
import React from 'react';

export default class AssignmentDetailsTab extends React.Component {
  render() {
    return (
      <div className="assignmentDetailsTab">
        <h2 className="assignmentDetailsTitle">{this.props.assignmentDetails.title}</h2>
        <p className="assignmentDetailsDueOn">{this.props.assignmentDetails.due_on}</p>
        <p className="assignmentDetailsDescription">{this.props.assignmentDetails.description}</p>
      </div>
    );
  }
}
