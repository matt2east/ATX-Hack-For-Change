import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch('http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=78613&date=2018-06-02&distance=25&API_KEY=A56093ED-9A61-4BAB-B1FE-B47B0190A1FD')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          data: result
        });
        console.log(this.state.data)
      },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  }

  render() {
    const { error, isLoaded, data } = this.state;
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
