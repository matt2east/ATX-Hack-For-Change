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
        {!this.state.isHidden && <h2>Your score is <b>{this.state.gameScore}</b></h2>}
        {!this.state.isHidden && this.state.gameScore < 3 && 
        <p><h3>You’re off to a good start! Here are some helpful tips to be more air aware in your daily life!</h3>
Try a sustainable commute mode at least one day a week to get to work.  During rush hour, removing just 4 percent of cars from roadways can relieve congestion by as much as 30 percent. Small changes in transportation behavior can make a big impact!
   If you would like a full list of helpful tips, visit our <a href="http://localhost:3000/#/tips">tips page</a>!
        
   </p>}
        {!this.state.isHidden && this.state.gameScore >= 3 &&  this.state.gameScore < 5 && 
        <p><h3>You’re doing great! Here are some other ways you can challenge yourself to do your share for cleaner air!</h3>
   Regularly travel using a sustainable mode of transportation. In Central Texas, automobiles account for nearly 50% of ozone-forming emissions. Ask your employer about incentives, such as subsidized rideshare options, transit passes, or parking cash-out programs!
         If you would like a full list of helpful tips, visit our <a href="http://localhost:3000/#/tips">tips page</a>!</p>}
        {!this.state.isHidden && this.state.gameScore >= 5 && <p>Awesome!!!</p>}

      </div>
    );
  }
}


export default Game;
