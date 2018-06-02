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
      })
  }



  render() {
    return (
      <div>API component</div>

    );
  }
}

export default Api;