import FetchUtil from '../../../../Base/Network/FetchUtil';
import ApiConst from '../../../../Base/Urls/ApiConst';
import ApiInterface from '../../../../Base/Urls/ApiInterface';

let MyModal = {
    //我的收藏
    GetMyCollection(pa, response, error){
        var params = {
            ...pa
        };
        var _err = error || null;
        FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetMyCollection, params, response, _err);
    },
};
export default MyModal;