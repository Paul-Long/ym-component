import config from './config';
import Result from "../../utils/Result";
import CryptoJS from 'crypto-js';

class CosController {
  sign = async (req, res, next) => {
    console.log('sign -- > ');
    let random = parseInt(Math.random() * Math.pow(2, 32));
    let now = parseInt(Date.now() / 1000);
    let e = now + 600; //签名过期时间为当前+600s
    let path = ''; //多次签名这里填空
    let str = 'a=' + config.appid + '&k=' + config.sid + '&e=' + e + '&t=' + now + '&r=' + random + '&f=' + path + '&b=' + config.bucket;
    console.log('str -- > ', str);
    let sha1Res = CryptoJS.HmacSHA1(str, config.skey);
    console.log('sha1Res -- > ', sha1Res);
    let strWordArray = CryptoJS.enc.Utf8.parse(str);
    let resWordArray = sha1Res.concat(strWordArray);
    let result = resWordArray.toString(CryptoJS.enc.Base64);
    console.log(result);
    res.send(Result.success(result));
  };
}

export default new CosController();
