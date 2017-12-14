import React from 'react';
import {Carousel} from 'antd-mobile';

class Home extends React.Component {
  r_item = () => {
    return [
      'http://houym-1254119810.picsh.myqcloud.com/1.jpeg?imageView2/0/w/375',
      'http://houym-1254119810.picsh.myqcloud.com/2.jpeg?imageView2/0/w/375',
      'http://houym-1254119810.picsh.myqcloud.com/3.jpeg?imageView2/0/w/375'
    ].map((url, index) => (
      <div style={{
        background: '#f5f5f5',
        width: '100%',
        height: '375px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }} key={index}>
        <img src={url} alt="" style={{width: '100%'}} />
      </div>
    ))
  };
  render() {
    return (
      <div>
        <Carousel infinite
                  dots
                  dragging
                  swiping={false}
                  autoplay={false}
        >
          {this.r_item()}
        </Carousel>
      </div>
    )
  }
}

export default Home;