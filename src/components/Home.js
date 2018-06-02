import React from "react";
import Api from "./Api";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      // date: "",
      // area: "",
      // zipcode: "",
      // latitude: 30.267,
      // longitude: -97.734,
      // categoryName: ""
      categoryName: ""
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        "http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=78613&date=2018-06-02&distance=25&API_KEY=A56093ED-9A61-4BAB-B1FE-B47B0190A1FD"
      );
      const { data } = response;
      this.setState({
        categoryName: data.Category.Name
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const categoryName = this.state.categoryName;
    return (
      <div>
        <h1>Home</h1>
        <Api />

      </div>
    );
  }
}

export default Home;
