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
    const oZone = this.state.weather[0];
    if (oZone){
      return (
        <div>
            <table>
  <tr>
    <th>Date</th>
    <th>Location</th>
    <th>Air Quality</th>
    <th>Ozone Action Day</th>
  </tr>
  <tr>
    <td>{oZone.DateIssue}</td>
    <td>{oZone.ReportingArea}, {oZone.StateCode}</td>
    <td>{oZone.Category.Name}</td>
    <td>{oZone.ActionDay.toString()}</td>
  </tr>
</table>
        </div>
        
  
      );

    }
    else return null;
  }
}

export default Api;