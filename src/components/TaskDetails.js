import React from "react";

class TaskDetails extends React.Component{
  constructor(props){
      super(props);

      this.state = {
        minutes: 25,
        seconds: 0
      }
  }

  countdown(){
      var count=this.state.minutes*60;
  	  var min;
      var sec;
      var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
      var that = this;
      function timer()
      {
        count=count-1;
        min = Math.floor(count / 60);
        sec = count - min * 60;
        that.setState({minutes: min, seconds: sec});
        if (count <= 0)
        {
           clearInterval(counter);
           //counter ended, do something here
           return;
        }
      }
  }

  onStart(){

    this.countdown();
  }

  renderTaskDetails(){
    if(!!this.props.activeTask){
      const {name} = this.props.activeTask;
      return(
        <div>
        <div className="taskdetails-timer">
          <h3>{name}</h3>
          <h3>{this.state.minutes}:{this.state.seconds}</h3>
        </div>
        <div className="taskdetails-body card-text">
          One day, Gregor Samsa, a traveling salesman, wakes up to find himself transformed into a giant insect (the most common translation of the German description ungeheures Ungeziefer, literally "monstrous vermin"). He reflects on how dreary life as a traveling salesman is. As he looks at the wall clock, he notices that he has overslept and missed his train for work. He ponders the consequences of this delay. Gregor becomes annoyed at how his boss never accepts excuses or explanations from any of his employees no matter how hard-working they are, displaying an apparent lack of trusting abilities. Gregors mother knocks on the door, and he answers her. She is concerned for Gregor because he is late for work, which is unorthodox for him. Gregor answers his mother and realizes that his voice has changed, but his answer is short, so his mother does not notice. His sister, Grete, to whom he is very close, then whispers through the door and begs him to open it. He tries to get out of bed but is incapable of moving his body. While trying to move, he finds that his office manager, the chief clerk, has shown up to check on him. He finally rocks his body to the floor and calls out that he will open the door shortly.
        </div>
        <div className="taskdetails-footer d-flex justify-content-between">
          <button type="button" onClick={this.onStart.bind(this)} className="btn btn-success">Start</button>
          <p className="card-text"><strong className="text-muted">Status text</strong></p>
        </div>
        </div>
      );
    }
  }

  render(){
    return (
      <div className="taskdetails-inner-cont card mb-3 no-round">
          { this.renderTaskDetails() }
      </div>
    );
  }
}

export default TaskDetails;
