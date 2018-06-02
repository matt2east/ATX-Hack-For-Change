import React, { Component } from "react";

// import logo from './logo.svg';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameScore: 0,
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      isHidden: true

    };

    this.handleWalkToWork = this.handleWalkToWork.bind(this);
    this.handleIdleCar = this.handleIdleCar.bind(this);
    this.handleSolarPanels = this.handleSolarPanels.bind(this);
    this.handleNuke = this.handleNuke.bind(this);
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleWalkToWork() {
    this.setState({
      gameScore: this.state.gameScore +1,
      disabled1: !this.state.disabled1
    });
  } 
  handleIdleCar() {
    this.setState({
      gameScore: this.state.gameScore -1,
      disabled2: !this.state.disabled2
    });
  } 
  handleSolarPanels() {
    this.setState({
      gameScore: this.state.gameScore +10,
      disabled3: !this.state.disabled3
    });
  }
  handleNuke() {
    this.setState({
      gameScore: this.state.gameScore -999,
      disabled4: !this.state.disabled4
    });
  }
   

  render() {
    return (
      <div>

        <h1>Play the ozone game.</h1>
      <form>
   
      Did you walk to work today?
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled1)}
            onChange={this.handleWalkToWork} />
            <br/>
      Did you avoid idling your car today?
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled2)? "disabled2" : ""}
            onChange={this.handleIdleCar}
            />
            <br/>
      Did you install solar panels?
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled3)? "disabled3" : ""}
            onChange={this.handleSolarPanels}
            />
            <br/>
                Did you launch a nuke?
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled4)? "disabled4" : ""}
            onChange={this.handleNuke}
            />
      </form>
      {this.state.isHidden && <button onClick={this.toggleHidden.bind(this)} >
          Get your score!
        </button>}
        {!this.state.isHidden && <p>Your score is <b>{this.state.gameScore}</b></p>}
      </div>
    );
  }
}


export default Game;
