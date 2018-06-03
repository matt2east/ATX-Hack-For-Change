import React from "react";
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryName: ''
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/api');
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
        <p>{categoryName}</p>
      </div>
    );
  }
}

export default Home;
