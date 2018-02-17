import React, { Component } from 'react';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import Tab from 'react-toolbox/lib/tabs/Tab';


class AppTabs extends Component {
  state = {
    index: 0
  };


  handleTabChange = (index) => {
    console.log('tab change')
    this.setState({index});
  };

  render() {
    return (
        <Tabs index={this.state.index} onChange={this.handleTabChange}>
          <Tab label='Primary'><small>Primary content</small></Tab>
          <Tab label='Secondary' onActive={this.handleActive}><small>Secondary content</small></Tab>
        </Tabs>
    );
  }
}

export default AppTabs;
