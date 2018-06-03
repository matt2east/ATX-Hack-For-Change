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
      disabled5: false,
      disabled6: false,
      disabled999: false,
      isHidden: true

    };

    this.handleSkipDriveThru = this.handleSkipDriveThru.bind(this);
    this.handleCombineErrands = this.handleCombineErrands.bind(this);
    this.handleElectricMower = this.handleElectricMower.bind(this);
    this.handleBroom = this.handleBroom.bind(this);
    this.handlePowerStrip = this.handlePowerStrip.bind(this);
    this.handleComputerSleep = this.handleComputerSleep.bind(this);
    this.handleNuke = this.handleNuke.bind(this);
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleSkipDriveThru() {
    this.setState({
      gameScore: this.state.gameScore +1,
      disabled1: !this.state.disabled1
    });
  } 
  handleCombineErrands() {
    this.setState({
      gameScore: this.state.gameScore +1,
      disabled2: !this.state.disabled2
    });
  } 
  handleElectricMower() {
    this.setState({
      gameScore: this.state.gameScore +1,
      disabled3: !this.state.disabled3
    });
  }
  handleBroom() {
    this.setState({
      gameScore: this.state.gameScore +1,
      disabled4: !this.state.disabled4
    });
  }
  handlePowerStrip() {
    this.setState({
      gameScore: this.state.gameScore +1,
      disabled5: !this.state.disabled5
    });
  }
  handleComputerSleep() {
    this.setState({
      gameScore: this.state.gameScore +1,
      disabled6: !this.state.disabled6
    });
  }
  
  handleNuke() {
    this.setState({
      gameScore: this.state.gameScore -999,
      disabled4: !this.state.disabled999
    });
  }
   

  render() {
    return (
      <div>

        <h1>Play the ozone game.</h1>
      <form>
        Skipped the drive-thru and went inside instead.
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled1)}
            onChange={this.handleSkipDriveThru} />
            <br/>
      Combined errands into one trip.
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled2)? "disabled2" : ""}
            onChange={this.handleCombineErrands}
            />
            <br/>
      Used my electric lawnmower.
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled3)? "disabled3" : ""}
            onChange={this.handleElectricMower}
            />
            <br/>
            Used a broom to clean up yard waste instead of a leaf blower.
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled4)? "disabled4" : ""}
            onChange={this.handleBroom}
            />
            <br/>
            Plugged my appliances into a power strip to reduce vampire energy use.
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled5)? "disabled5" : ""}
            onChange={this.handlePowerStrip}
            />
            <br/>
            Set my computer to sleep.
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled6)? "disabled6" : ""}
            onChange={this.handleComputerSleep}
            />
            <br/>
                {/* Launched a nuke.
          <input
            name="gameScore"
            type="checkbox"
            disabled = {(this.state.disabled999)? "disabled999" : ""}
            onChange={this.handleNuke}
            /> */}
      </form>
      {this.state.isHidden && <button onClick={this.toggleHidden.bind(this)} >
          Get your score!
        </button>}
        {!this.state.isHidden && <p>Your score is <b>{this.state.gameScore}</b></p>}
        {!this.state.isHidden && this.state.gameScore < 3 && <p>You suck!</p>}
        {!this.state.isHidden && this.state.gameScore >= 3 &&  this.state.gameScore < 5 && <p>Average score. Meh.</p>}
        {!this.state.isHidden && this.state.gameScore >= 5 && <p>Awesome!!!</p>}

      </div>
    );
  }
}


export default Game;
