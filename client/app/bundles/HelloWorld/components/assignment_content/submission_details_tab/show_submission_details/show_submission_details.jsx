import PropTypes from 'prop-types';
import React from 'react';

export default class ShowSubmissionDetails extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {show: 'hideSubmission'}
    this.showMore = this.showMore.bind(this)
    this.hideMore = this.hideMore.bind(this)
  }

  showMore() {
    this.setState({show: 'showSubmission'})
  }

  hideMore() {
    this.setState({show: 'hideSubmission'})
  }

  render() {
    let show = this.state.show === 'hideSubmission' ? 'showMore' : 'hideMore'
    return (
          <div className="submisisonDetailsSection">
            <h3 className="submisisonDetailsName">{this.props.submission['name']}</h3>
            <div className="submisisonDetailsSubmittedOn">
              {this.props.submission['submitted_on']}
            </div>
            <div onClick={this.showMore} className={show}>Show More....</div>
            <div className={this.state.show}>
              <div className="submissionExpanded">
                {this.props.submission['submission']}
                <span onClick={this.hideMore} className="hideSubmissionDetails">
                  x
                </span>
              </div>
            </div>
          </div>
    );
  }
}
