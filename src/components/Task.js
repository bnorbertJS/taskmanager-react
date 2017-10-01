import React from "react";

class Task extends React.Component{
  constructor(props){
      super(props);

  }

  render(){
    return (
      <a className={`list-group-item list-group-item-action ${this.props.active ? 'active' : ''}`}>
        {this.props.task.name}
      </a>
    );
  }
}

export default Task;
