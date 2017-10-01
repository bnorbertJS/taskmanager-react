import React from "react";

class SearchBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      inputVal: "",
      validateError: false,
    }
  }

  onClickAddTask(e){
    const {inputVal} = this.state;

    if(inputVal === ""){
      this.setState({validateError: true});
    }else{
      this.setState({validateError: false});
      this.props.onAddTask({name: inputVal, time: 25});
    }

    this.setState({inputVal: ""});
  }

  onChangeInput(e){
    this.setState({inputVal: e.target.value})
  }

  render(){
    return(
      <div className="input-group">
        <input placeholder="Add new task ..."
          value={this.state.inputVal}
          className={`search-bar form-control ${this.state.validateError ? 'required-error' : ''}`}
          onChange={this.onChangeInput.bind(this)}/>
        <span className="input-group-btn">
          <button className="btn btn-primary"
            type="button"
            onClick={this.onClickAddTask.bind(this)}>
            Add!
          </button>
        </span>
      </div>
    );
  }
}

export default SearchBar;
