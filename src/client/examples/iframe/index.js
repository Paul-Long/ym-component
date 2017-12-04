import React from 'react';
import {Frame, Event} from 'components';
import './Fram.less';

class DemoFrame extends React.Component {
  componentDidMount() {
    Event.bind(document, 'mousemove', this.o_mouse);
  }
  componentWillUnmount() {
    Event.unbind(document, 'mousemove', this.o_mouse);
  }
  o_mouse = e => {
    console.log(e.type);
  };
  render() {
    return (
      <div className='ym-demo-frame'>
        <h1>IFRAME</h1>
        <Frame initialContent={'<!DOCTYPE html><html><head></head><body></body></html>'}
               passThrough
               style={{height: 'calc(100% - 50px)'}}
        >
          <h1>Hello</h1>
        </Frame>
      </div>
    )
  }
}
export default DemoFrame;
