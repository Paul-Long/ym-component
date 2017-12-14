import React from 'react';
import {Carousel} from 'antd-mobile';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Carousel infinite
                  dots={false}
                  dragging={false}
                  swiping={false}
                  autoplay
        >
          <div style={{
            background: '#108ee9',
            textAlign: 'center',
            lineHeight: '200px',
            height: '200px',
            width: '100%'
          }}>carousel 1
          </div>
          <div style={{
            background: '#108ee9',
            textAlign: 'center',
            lineHeight: '200px',
            height: '200px',
            width: '100%'
          }}>carousel 2
          </div>
          <div style={{
            background: '#108ee9',
            textAlign: 'center',
            lineHeight: '200px',
            height: '200px',
            width: '100%'
          }}>carousel 3
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Home;