import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tab: "Create"};
    this.selectTab = this.selectTab.bind(this);
  }

  deselectTab() {
    const currentTab = document.getElementById(this.state.tab);
    currentTab.className = "";
  }

  selectTab(e) {
    this.deselectTab();
    e.currentTarget.className = "selected";
    this.setState({ tab: e.currentTarget.textContent });
  }

  render() {
    return (
      <nav>
        <li id="Create" className="selected" onClick={ this.selectTab }>Create</li>
        <li id="Preview" onClick={ this.selectTab }>Preview</li>
        <li id="Export" onClick={ this.selectTab }>Export</li>
      </nav>
    );
  }
}

export default Index;
