import React from "react";

import Header from "./Header";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";

import Footer from "./Footer";

export default class App extends React.Component{
    constructor(){
      super();

      this.state = {
        activeTask: null,
        tasks: [{
          name: "dummyTask1",
          time: 25
        },{
          name: "dummyTask2",
          time: 25
        }]
      }
    }

    onTaskActive(e) {
      this.setState({ activeTask: {name: e, time: 25} });
    }

    addTask(e){
      this.setState({
        tasks: [e, ...this.state.tasks]
      })
    }

    render(){
        return(
              <div>
                <div className="app-cont">
                  <Header onAddTask={this.addTask.bind(this)}/>
                  <TaskList onTaskActive={this.onTaskActive.bind(this)} activeTask={this.state.activeTask}
                    tasks={this.state.tasks}/>
                  <TaskDetails activeTask={this.state.activeTask}/>
                  <div className="cf"></div>
                  <Footer />
                </div>
              </div>
            );
    }
}
