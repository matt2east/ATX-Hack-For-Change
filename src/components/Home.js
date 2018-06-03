import React from "react";
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/data')
      const { data } = response
      this.setState({
        isLoaded: true,
        data
      })
    } catch (error) {
      console.error(error)
    }

    // fetch('/data')
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({
    //       isLoaded: true,
    //       data: result
    //     });
    //   },
    //     error => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     })
  }

  render() {
    const { error, isLoaded, data } = this.state;
    console.log(this.state)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>Data is available</div>
      )
    }
  }
}

export default Home;
