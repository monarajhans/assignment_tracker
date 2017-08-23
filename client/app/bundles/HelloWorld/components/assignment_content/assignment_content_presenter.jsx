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
    let template = <AssignmentDetailsTab />
    if (this.state.showTab == 'submissions') {
      template = <SubmissionDetailsTab />
    }
    return (
      <div>
        <button onClick={this.showAssignment}>Assignment</button>
        <button onClick={this.showSubmissions}>Submissions</button>
        This is assignment content presenter
        {template}
      </div>
    );
  }
}
