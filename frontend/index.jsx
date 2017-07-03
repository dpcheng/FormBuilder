import React from 'react';

import CreateIndex from './create/create_index';
import PreviewIndex from './preview/preview_index';
import ExportIndex from './export/export_index';

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
    const nextTab = e.currentTarget.textContent;

    if (nextTab !== this.state.tab) {
      this.deselectTab();
      e.currentTarget.className = "tab-selected";
      this.setState({ tab: nextTab });
    } else if ( nextTab === "Preview"
    && this.state.tab === "Preview" ) {
      this.state.tab = "";
      this.setState({ tab: "Preview" });
    }
  }

  renderTab() {
    if (this.state.tab === "Create") {
      return <CreateIndex />;
    } else if (this.state.tab === "Preview") {
      return <PreviewIndex key={ new Date().getTime() }/>;
    } else {
      return <ExportIndex />;
    }
  }

  render() {
    return (
      <main>
        <nav className="nav-bar">
          <li
            id="Create"
            className="tab-selected"
            onClick={ this.selectTab }
          >Create</li>
          <li
            id="Preview"
            onClick={ this.selectTab }
          >Preview</li>
          <li
            id="Export"
            onClick={ this.selectTab }
          >Export</li>
        </nav>
        { this.renderTab() }
      </main>
    );
  }
}

export default Index;
