import PropTypes from 'prop-types';
import React from 'react';
import AssignmentsSidebarPresenter from './assignments_sidebar_presenter'
import AssignmentContentContainer from '../assignment_content/assignment_content_container'

export default class AssignmentsSidebarContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = { showAssignment: false }
    this.openAssignment = this.openAssignment.bind(this)
    this.updateCurrentAssignment = this.updateCurrentAssignment.bind(this)
  }

  openAssignment(assignment) {
    debugger
  }

  updateCurrentAssignment(assignment) {
    this.props.updateCurrentAssignment(assignment)
  }

  render() {
    const assignmentsList = this.props.assignments
    let showAssignmentTemplate = ''
    if (this.state.showAssignment) {
      showAssignmentTemplate = <AssignmentContentContainer />
    }
    let updateAssignment = this.updateCurrentAssignment
    return (
      <div>
        <h1>Assignments</h1>
        {Object.keys(assignmentsList).map(function(key, count){
            return <AssignmentsSidebarPresenter
              key={count}
              object={assignmentsList[key]}
              updateCurrentAssignment={updateAssignment} />
        })}

        {/* {Object.entries(this.props.assignments).forEach(
          ([key, value]) => <AssignmentsSidebarPresenter key={key}/>
        )} */}
        {showAssignmentTemplate}
      </div>
    );
  }
}
