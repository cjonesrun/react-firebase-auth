import React, { Component } from 'react';

class LandingPage extends Component{
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Landing Page</h1>
      </div>
    );
  }
}

export default LandingPage;
