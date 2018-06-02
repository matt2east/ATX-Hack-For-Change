import React from "react";
import axios from 'axios';


class Api extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/home`)
      .then(res => {
        const weather = res.data;
        this.setState({ weather });
        // console.log(weather)
        console.log("the state is" , this.state)
        console.log("weather is " , this.state.weather[0].Category.Name)
      })
  }



  render() {
    return (
      <div><h1>API component</h1>
      {/* <div>{this.state.weather[0].Category.Name}</div> */}
      <ul>{this.state.weather.map(element => {
        return (
          <li key={element[0]}>{element.Category.Name}</li>
        )
      })}</ul>
      </div>

    );
  }
}

export default Api;