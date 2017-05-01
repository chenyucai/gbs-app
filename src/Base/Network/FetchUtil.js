/**
 * Created by leung on 2016/9/27.
 */
// import MyDialog from '../../BaseView/Dialog/MyDialog';
import BaseError from './BaseError';
import BaseCallback from './BaseCallback';
import {Platform, ToastAndroid} from 'react-native';
import LoadingUtil from '../Loading/LoadingUtil';
import md5 from '../../Utils/Encryption/Md5';
var TimerMixin = require('react-timer-mixin');
import {NativeModules} from 'react-native';
mixins:[TimerMixin];
/**
 * 设置超时时间
 * 秒
 */
const TIME_OUT = 15;
const secret = 'kLnANE';

/**
 * 主要使用是 fetchGetJson, fetchJsonPostJson
 **/
const FetchUtil = {
	 /**
 	 * 转换参数
 	 */
   toQueryString(obj){
 		//    encodeURIComponent(key)
 		return obj ? Object.keys(obj).sort().map((key)=> {
 			var val = obj[key];
 			if (Array.isArray(val)) {
 				return val.sort().map(function (val2) {
 					return key + '=' + val2;
 				}).join('&');
 			}
 			return key + '=' + val;
 		}).join('&') : '';
 	},
   /**
 	 * 加密参数
 	 *
 	 */
 	signParam(param) {
 		var array = new Array();
 		for (var p in param) {
 			if (p != "sign") {
 				array.push(p);
 			}
 		}
 		var keys = array.sort();
 		//console.log("*********sort",array.sort());
 		var signString = secret;
 		for (var i = 0; i < keys.length; i++) {
 			signString += (keys[i] + param[keys[i]]);
 		}
 		signString += secret;
 		param["sign"] = md5.hex_md5(signString);
 		return param;
 	},
   /**
    * 请求超时回调
    */
   timeout() {

   },
   /**
    * 请求前回调
    */
   beforeSend() {

   },
   /**
    * 请求结束回调
    */
   complete() {

   },

   /**
 	 * GET
 	 * 参数 - URL上
 	 * 返回 - Json
 	 */
 	fetchGetJson(url, params, callback, err) {
     this.beforeSend();
     var timer = setTimeout(() => {
       this.timeout();
     }, TIME_OUT * 1000);
 		fetch(
 			url + '?' + this.toQueryString(params),
 			{
 				method: 'get',
 				headers: {
 					'Accept': 'application/json'
 				}
 			}
 		).then((response) => {
       clearTimeout(timer);
       this.complete();
       return response;
     }).then((response) => {
 				if (response.ok)
 					return response.json();
 				else
          err && err(response);
 			}
 		).then((responseJson) => {
 			callback(responseJson);
 		}).catch((error) => {
       console.log('request failed ---- ' + error);
     });
 	},
   /**
    * 只支持简单数据的提交，暂不支持数据和对象的嵌套
 	 * POST
 	 * 参数 - FormData
 	 * 返回 - Json
 	 */
 	fetchFormPostJson(url, params, callback, err) {
     this.beforeSend();
     var timer = setTimeout(() => {
       this.timeout();
     }, TIME_OUT * 1000);
 		fetch(
       url,
       {
         method: 'POST',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: this.toQueryString(params)
       }
 		).then((response) => {
       clearTimeout(timer);
       this.complete();
       return response;
     }).then((response) => {
 				if (response.ok)
 					return response.json();
 				else
           err && err(response);
 			}
 		).then((responseJson) => {
 			callback(responseJson);
 		}).catch((error) => {
       console.log('request failed ---- ' + error);
     });
 	},
   /**
    * 主要使用这种方式提交数据
 	 * POST
 	 * 参数 - Json
 	 * 返回 - Json
 	 */
 	fetchJsonPostJson(url, params, callback, err) {
     this.beforeSend();
     var timer = setTimeout(() => {
       this.timeout();
     }, TIME_OUT * 1000);
 		fetch(
       url,
       {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(params)
       }
 		).then((response) => {
       clearTimeout(timer);
       this.complete();
       return response;
     }).then((response) => {
 				if (response.ok)
 					return response.json();
 				else
           err && err(response);
 			}
 		).then((responseJson) => {
 			callback(responseJson);
 		}).catch((error) => {
       console.log('request failed ---- ' + error);
     });
 	},

	/**
	 * 上传图片
	 */
	upLoadPhoto(params, callback){
		if (Platform.OS == 'android') {
			NativeModules.UploadImg.uploadImg(params, callback);
		} else {
		}
	}
};
export default FetchUtil;
