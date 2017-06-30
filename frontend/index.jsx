import React from 'react';

import CreateIndex from './create_index';
import PreviewIndex from './preview_index';
import ExportIndex from './export_index';

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
    if (e.currentTarget.textContent !== this.state.tab) {
      this.deselectTab();
      e.currentTarget.className = "tab-selected";
      this.setState({ tab: e.currentTarget.textContent });
    }
  }

  renderTab() {
    if (this.state.tab === "Create") {
      return <CreateIndex />;
    } else if (this.state.tab === "Preview") {
      return <PreviewIndex />;
    } else {
      return <ExportIndex />;
    }
  }

  render() {
    return (
      <main>
        <nav className="nav-bar">
          <li id="Create" className="tab-selected" onClick={ this.selectTab }>Create</li>
          <li id="Preview" onClick={ this.selectTab }>Preview</li>
          <li id="Export" onClick={ this.selectTab }>Export</li>
        </nav>
        { this.renderTab() }
      </main>
    );
  }
}

export default Index;
