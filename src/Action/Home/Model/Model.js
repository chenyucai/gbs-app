/**
 * Created by chenYc on 2017/4/15.
 * 专门用来写请求的
 */

import FetchUtil from '../../../Base/Network/FetchUtil';
import ApiConst from '../../../Base/Urls/ApiConst';
import ApiInterface from '../../../Base/Urls/ApiInterface';

let Model = {
  /**
   * 首页数据
   */
  GetHomeCategoryList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetHomeCategoryList, params, response, _err);
  },


};
export default Model;
