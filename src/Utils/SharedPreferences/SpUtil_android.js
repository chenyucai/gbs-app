/**
 * Created by leung on 2016/10/10.
 */
import {NativeModules} from 'react-native';
/**
 * android的sp
 * data参数为json对象,callback回调
 * data:{name:'sunawsp',key:'sunaw',value:'sunawstr'}
 * 其中【name】为sp的文件名，【key】为键值，【value】为值
 */
let SpUtil = {
    saveBooleanItem(data){
        NativeModules.SpModule.saveBooleanItem(data);
    },
    readBooleanItem(data, callback){
        NativeModules.SpModule.readBooleanItem(data, callback);
    },
    saveStringItem(data){
        NativeModules.SpModule.saveStringItem(data);
    },
    readStringItem(data, callback){
        NativeModules.SpModule.readStringItem(data, callback);
    },
    removeItem(data){
        NativeModules.SpModule.removeItem(data, callback);
    }
}

export default SpUtil;