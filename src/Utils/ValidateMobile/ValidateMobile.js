/**
 * Created by Administrator on 2017-2-16.
 */
import {Alert} from 'react-native';
var VaildateMpbile={
    ValidateMobile(mobile) {
        // if(mobile.length==0)
        // {
        //     Alert.alert("手机号不能为空!");
        //     return false;
        // }
        // if(mobile.length!=11)
        // {
        //     util.showInfoMessage('手机号长度必须为11位');
        //     return false;
        // }

        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        if(!myreg.test(mobile))
        {
            Alert.alert("请输入有效的手机号！");
            return false;
        }
        return true;
    }
};
module.exports=VaildateMpbile;