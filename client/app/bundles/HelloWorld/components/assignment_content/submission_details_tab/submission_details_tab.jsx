import PropTypes from 'prop-types';
import React from 'react';
import ShowSubmissionDetails from
  './show_submission_details/show_submission_details'

export default class SubmissionDetailsTab extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {show: 'hideSubmission'}
    this.showAssignmentDetails = this.showAssignmentDetails.bind(this)
    this.hideAssignmentDetails = this.hideAssignmentDetails.bind(this)
  }

  showAssignmentDetails() {
    this.setState({ show: 'showSubmission' })
  }

  hideAssignmentDetails() {
    this.setState({ show: 'hideSubmission' })
  }

  render() {
    const submissions = this.props.submissionDetails
    return (
      <div className="submisisonDetails">
        {submissions.map(function(key, count) {
          return <ShowSubmissionDetails key={count} submission={key} />
        })}
      </div>
    );
  }
}
