import React from "react";

import Task from "./Task";

class TaskList extends React.Component{
  constructor(props){
    super(props);
  }

  onCLickTask(e){
    this.props.onTaskActive(e.target.text);
  }

  render(){
    //task.name === this.props.activeTask.name
    const tasks = this.props.tasks.map((task,index) => {
      let isActive = false;
      if(this.props.activeTask && task.name === this.props.activeTask.name){
        isActive = true;
      }
      return <Task key={index} task={task} active={isActive}/>
    });

    return (
      <div className="card no-round">
      <div className="card-header">Your tasks: </div>
      <div className="card-body scroll">
        <ul onClick={this.onCLickTask.bind(this)} className="list-group">
          {tasks}
        </ul>
        </div>
        <div className="form-group">
          <input className="form-control search-task-input" placeholder="Search..."/>
        </div>
      </div>
    );
  }
}

export default TaskList;
