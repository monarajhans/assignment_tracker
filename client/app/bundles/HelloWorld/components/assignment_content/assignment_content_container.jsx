import PropTypes from 'prop-types';
import React from 'react';
import AssignmentContentPresenter from './assignment_content_presenter'

export default class AssignmentContentContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() {
    return (
      <div>
        <AssignmentContentPresenter />
      </div>
    );
  }
}
