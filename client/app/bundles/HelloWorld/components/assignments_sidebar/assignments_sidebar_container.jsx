import PropTypes from 'prop-types';
import React from 'react';
import AssignmentsSidebarPresenter from './assignments_sidebar_presenter'
import AssignmentContentContainer from '../assignment_content/assignment_content_container'

export default class AssignmentsSidebarContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = { showAssignment: false }
    this.openAssignment = this.openAssignment.bind(this)
  }

  openAssignment(assignment) {
    debugger
  }

  render() {
    const assignmentsList = this.props.assignments
    let showAssignmentTemplate = ''
    if (this.state.showAssignment) {
      showAssignmentTemplate = <AssignmentContentContainer />
    }
    return (
      <div>
        <h1>Assignments</h1>
        {Object.keys(assignmentsList).map(function(key, count){
            return <AssignmentsSidebarPresenter
              key={count}
              object={assignmentsList[key]} />
        })}

        {/* {Object.entries(this.props.assignments).forEach(
          ([key, value]) => <AssignmentsSidebarPresenter key={key}/>
        )} */}
        {showAssignmentTemplate}
      </div>
    );
  }
}
