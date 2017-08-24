import PropTypes from 'prop-types';
import React from 'react';
import AssignmentDetailsTab from
  './assignment_details_tab/assignment_details_tab'
import SubmissionDetailsTab from
  './submission_details_tab/submission_details_tab'

export default class AssignmentContentPresenter extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {showTab: 'assignment'}
    this.showAssignment = this.showAssignment.bind(this)
    this.showSubmissions = this.showSubmissions.bind(this)
  }

  showAssignment() {
    this.setState({ showTab: 'assignment' })
  }

  showSubmissions() {
    this.setState({ showTab: 'submissions' })
  }

  render() {
    let template = <AssignmentDetailsTab
      assignmentDetails={this.props.assignment} />
    if (this.state.showTab == 'submissions') {
      template = <SubmissionDetailsTab
        submissionDetails={this.props.assignment.submissions} />
    }
    return (
      <div>
        <div className="tabs">
          <button className="tablink"onClick={this.showAssignment}>Assignment</button>
          <button className="tablink"onClick={this.showSubmissions}>Submissions</button>
        </div>
        {template}
      </div>
    );
  }
}
