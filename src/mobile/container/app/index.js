import React from 'react';
import {TabBar} from 'antd-mobile';
import Icon from 'components/icon';
import Home from 'm@container/home';

class MobileApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: false,
    };
  }

  r_tab = () => {
    return [
      {title: '首页', tab: 'home', icon: 'home-o', Component: <Home />}
    ].map(t => (
      <TabBar.Item
        title={t.title}
        key={t.tab}
        icon={<Icon type={t.icon} style={{fontSize: '22px'}} />}
        selectedIcon={<Icon type={t.icon} style={{fontSize: '22px'}} />}
        selected={this.state.selectedTab === t.tab}
        onPress={() => this.setState({selectedTab: t.tab})}
      >
        {t.Component}
      </TabBar.Item>
    ));
  };

  render() {
    return (
      <div
        style={this.state.fullScreen ? {position: 'fixed', height: '100%', width: '100%', top: 0} : {height: '100%'}}>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#33A3F4'
          barTintColor='white'
          hidden={this.state.hidden}
        >
          {this.r_tab()}
        </TabBar>
      </div>
    )
  }
}

export default MobileApp;
