import ReactDOM from 'react-dom';
export function bind(node, type, callback) {
  let eventType = `on${type}`;
  if (node.addEventListener) {
    node.addEventListener(type, callback, false);
  } else if (node.attachEvent) {
    node.attachEvent(eventType, callback);
  } else {
    node[eventType] = callback;
  }
}

export function binds(node, types = [], callback) {
  types.forEach(type => bind(node, type, callback));
}

export function unbind(node, type, callback) {
  let eventType = `on${type}`;
  if ('removeEventListener' in node) {
    node.removeEventListener(type, callback, false);
  } else if (node.attachEvent) {
    node.attachEvent(eventType, callback);
  } else {
    node[eventType] = callback;
  }
}
export function unbinds(node, types, callback) {
  types.forEach(type => unbind(node, type, callback));
}

export function $(id) {
  return typeof id === 'string' ? document.getElementById(id) : id;
}

export function dispatch(current, type, parent, callback) {
  const frame = ReactDOM.findDOMNode(this);
  const rect = frame.getBoundingClientRect();
  bind(current, type, e => {
    (typeof callback === 'function') && callback(e);
    const event = parent.createEvent('MouseEvents');
    event.initMouseEvent(type, true, true, parent.defaultView, 0, e.screenX, e.screenY, e.clientX + rect.left, e.clientY + rect.top);
    parent.dispatchEvent(event);
  })
}

export function dispatchs(current, types = [], parent, callback) {
  types.forEach(type => dispatch(current, type, parent, callback));
}

export function getEvent(event) {
  return event || window.event;
}

export function getTarget(event) {
  let e = event || window.event;
  return e.target || e.srcElement;
}

export const Event = {
  $,
  bind,
  binds,
  unbind,
  unbinds,
  dispatch,
  dispatchs,
  getEvent,
  getTarget,
  userSelect: function (node, className = 'user-select-none') {

  }
};