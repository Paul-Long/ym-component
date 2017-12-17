import CosCloud from 'cos-js-sdk-v4';
import fetch from './fetch';

const config = {
  bucket: 'houym',
  appid: '1254119810',
  region: 'sh'
};

export default new CosCloud({
  appid: config.appid,
  bucket: config.bucket,
  region: config.region,
  getAppSign: async function (callback) {
    const result = await fetch('/api/cos').get();
    callback('aaa');
  },
  getAppSignOnce: function (callback) {
    callback('aaa');
  }
});
