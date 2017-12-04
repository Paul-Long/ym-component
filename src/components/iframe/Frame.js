import React from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import Context from './Context';
import Event from '../event';
import './style';

class Frame extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    const doc = this.g_doc();
    this.s_body_style();
    this.r_contents();
    if (this.props.passThrough) {
      Event.dispatch.call(this, doc, 'mouseup', window.parent.document);
      Event.dispatch.call(this, doc, 'mousemove', window.parent.document);
      Event.dispatch.call(this, doc, 'mousedown', window.parent.document);
    }
  }

  componentDidUpdate() {
    this.r_contents();
  }

  componentWillUnmount() {
    this._isMounted = false;
    const doc = this.g_doc();
    const target = this.g_mount_target();
    if (doc && target) {
      ReactDOM.unmountComponentAtNode(target);
    }
  }

  g_doc = () => {
    return ReactDOM.findDOMNode(this).contentDocument;
  };
  g_mount_target = () => {
    const doc = this.g_doc();
    if (this.props.mountTarget) {
      return doc.querySelector(this.props.mountTarget);
    }
    if (!doc.body.children[0]) {
      let div = doc.createElement('div');
      div.setAttribute('class', `${this.props.prefixCls}-root`);
      doc.body.appendChild(div);
    }
    return doc.body.children[0];
  };
  s_body_style = () => {
    const doc = this.g_doc();
    doc.body.setAttribute('style', 'position:absolute;top:0;left:0;margin:0;width:100%;height:100%;');
  };
  r_contents = () => {
    if (!this._isMounted) {
      return;
    }
    const doc = this.g_doc();
    if (doc && doc.readyState === 'complete') {
      if (doc.querySelector('div') === null) {
        this.initContent = false;
      }
      const win = doc.defaultView || doc.parentView;
      const initRender = !this.initContent;
      const contents = (
        <Context document={doc} window={win} onMouseMove={e => console.log(e)}>
          <div className='frame-content'>
            {this.props.head}
            {this.props.children}
          </div>
        </Context>
      );
      if (initRender) {
        doc.open('text/html', 'replace');
        doc.write(this.props.initialContent);
        this.s_body_style();
        doc.close();
        this.initContent = true;
      }
      const callback = initRender ? this.props.contentDidMount : this.props.contentDidUpdate;
      const mountTarget = this.g_mount_target();
      ReactDOM.unstable_renderSubtreeIntoContainer(this, contents, mountTarget, callback);
    } else {
      setTimeout(this.r_contents, 0);
    }
  };

  render() {
    const style = this.props.style || {};
    const props = {
      ...this.props,
      children: undefined,
      style,
      className: classNames(this.props.prefixCls, this.props.className || '')
    };
    delete props.head;
    delete props.prefixCls;
    delete props.initialContent;
    delete props.mountTarget;
    delete props.passThrough;
    delete props.contentDidMount;
    delete props.contentDidUpdate;
    return (<iframe {...props} />);
  }
}

export default Frame;
Frame.defaultProps = {
  contentDidMount: () => {
  },
  contentDidUpdate: () => {
  },
  initialContent: '<!DOCTYPE html><html><head></head><body><div class="ym-frame-root"></div></body></html>',
  prefixCls: 'ym-frame',
  passThrough: false
};