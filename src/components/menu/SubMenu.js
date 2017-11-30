import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {renderChild} from './MenuMixin';

class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null
    };
  }

  g_style = () => {
    const {style, level} = this.props;
    let cusStyle = {};
    cusStyle.paddingLeft = `${level * 12}px`;
    return Object.assign({}, style, cusStyle);
  };

  r_title = () => {
    const {title} = this.props;
    return (
      <div className='ym-menu-submenu-title' style={this.g_style()}>
        {title}
      </div>
    )
  };

  h_itemClick = (eventKey) => {
    this.setState({activeKey: eventKey});
  };
  
  r_children = () => {
    const {children, level} = this.props;
    return React.Children.map(children, (ele, i, subIndex) => renderChild.call(this, ele, i, subIndex, {level: level + 1}))
  };

  render() {
    const {className} = this.props;
    let liCls = classNames(['ym-menu-submenu', className || '']);
    return (
      <li className={liCls}>
        {this.r_title()}
        <ul style={this.g_style()}>
          {this.r_children()}
        </ul>
      </li>
    )
  }
}

SubMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.any,
  level: PropTypes.number,
  style: PropTypes.object
};
export default SubMenu;
