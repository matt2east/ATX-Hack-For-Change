import React from "react";

class Home extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return <div />;
  }
}

export default Home;
