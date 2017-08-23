import PropTypes from 'prop-types';
import React from 'react';
import AssignmentContentPresenter from './assignment_content_presenter'
import SelectAssignment from './select_assignment/select_assignment'

export default class AssignmentContentContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  fetchTemplate() {
    if(Object.keys(this.props.assignment).length) {
      return <AssignmentContentPresenter
        assignment={this.props.assignment}/>
    } else {
      return <SelectAssignment />
    }
  }

  render() {
    let template = this.fetchTemplate()
    return (
      <div>
        {template}
      </div>
    );
  }
}
