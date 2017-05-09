import FetchUtil from '../../../Base/Network/FetchUtil';
import ApiConst from '../../../Base/Urls/ApiConst';
import ApiInterface from '../../../Base/Urls/ApiInterface';

let MyModal = {
    //获取验证码
    GetAuthCode(pa, response, error){
        var params = {
            ...pa
        };
        var _err = error || null;
        FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetAuthCode, params, response, _err);
    },
    //登录
    Login(pa, response, error){
        var params = {
            ...pa
        };
        var _err = error || null;
        FetchUtil.fetchJsonPostJson(ApiConst.Versions().BaseUrl + ApiInterface.Login, params, response, _err);
    },
    //忘记密码
    ForgetPassword(pa, response, error){
        var params = {
            ...pa
        };
        var _err = error || null;
        FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.ForgetPassword, params, response, _err);
    },
    //注册
    Register(pa, response, error){
        var params = {
            ...pa
        };
        var _err = error || null;
        FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.Register, params, response, _err);
    },
};
export default MyModal;