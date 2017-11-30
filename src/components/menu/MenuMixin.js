import React from 'react';

export function renderChild(child, i, subIndex, extraProps) {
  const props = this.props;
  const state = this.state;
  let key = getKeyFromChildrenIndex(child, props.eventKey, i);
  const isActive = key === state.activeKey;
  const newChildProps = {
    mode: props.mode,
    level: props.level || 0,
    index: i,
    eventKey: key,
    active: isActive,
    onClick: this.h_itemClick,
    ...extraProps
  };
  return React.cloneElement(child, newChildProps);
}

export function getKeyFromChildrenIndex(child, menuEventKey, index) {
  const prefix = menuEventKey || '';
  return child.key || `${prefix}item_${index}`;
}

export default {
  renderChild
}