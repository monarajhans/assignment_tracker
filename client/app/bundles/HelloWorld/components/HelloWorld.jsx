import PropTypes from 'prop-types';
import React from 'react';
import AssignmentsSidebarContainer from
  './assignments_sidebar/assignments_sidebar_container'

export default class HelloWorld extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    this.state = { name: this.props.name };
    this.state = { allAssignments: this.props.all_assignments }
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <AssignmentsSidebarContainer assignments={this.state.allAssignments} />
          {/* <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          /> */}
      </div>
    );
  }
}
