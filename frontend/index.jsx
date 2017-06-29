import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <li>Create</li>
        <li>Preview</li>
        <li>Export</li>
      </nav>
    );
  }
}

export default Index;
