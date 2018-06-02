import React from "react";

class Home extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "http://www.airupdate.info/jsdisplay.cfm?id=AAF0FAD6-6288-489E-9EE1-69CBB77511D5";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
