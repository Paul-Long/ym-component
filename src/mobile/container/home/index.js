import React from 'react';
import {Carousel} from 'antd-mobile';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Carousel infinite
                  dots
                  dragging
                  swiping={false}
                  autoplay
        >
          <div style={{
            background: '#108ee9',
            textAlign: 'center',
            lineHeight: '200px',
            height: '200px',
            width: '100%'
          }}><img src="http://houym-1254119810.picsh.myqcloud.com/WechatIMG100.jpeg?imageView2/0/w/200" alt="" />
          </div>
          <div style={{
            background: '#108ee9',
            textAlign: 'center',
            lineHeight: '200px',
            height: '200px',
            width: '100%'
          }}><img src="http://houym-1254119810.picsh.myqcloud.com/WechatIMG98.jpeg?imageView2/0/w/200" alt="" />
          </div>
          <div style={{
            background: '#108ee9',
            textAlign: 'center',
            lineHeight: '200px',
            height: '200px',
            width: '100%'
          }}><img src="http://houym-1254119810.picsh.myqcloud.com/WechatIMG99.jpeg?imageView2/0/w/200" alt="" />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Home;