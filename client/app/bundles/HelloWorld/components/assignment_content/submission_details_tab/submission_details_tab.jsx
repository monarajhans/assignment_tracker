import PropTypes from 'prop-types';
import React from 'react';

export default class SubmissionDetailsTab extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {show: 'hideSubmission'}
    this.showMore=this.showMore.bind(this)
  }

  showMore() {
    if(this.state.show === 'hideSubmission') {
      this.setState({show: 'showSubmission'})
    } else {
      this.setState({show: 'hideSubmission'})
    }
  }

  render() {
    const submissions = this.props.submissionDetails
    let showMore = this.showMore
    let submissionClass=this.state.show
    return (
      <div>
        {submissions.map(function(key, value){
          return (<div key={value}>
            <div>{key['name']}</div>
            <div>{key['submitted_on']}</div>
            <span onClick={showMore}>Show More....</span>
            <div className={submissionClass}>{key['submission']}</div>
          </div>)
        })}
      </div>
    );
  }
}
