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
  GetHomeDiscountedGoodsList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetHomeDiscountedGoodsList, params, response, _err);
  },
  GetHomeStarGoodsList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetHomeStarGoodsList, params, response, _err);
  },
  GetHomeBannerList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetHomeBannerList, params, response, _err);
  },
  GetHomeInformationList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetHomeInformationList, params, response, _err);
  },
  /**
   * 同城门店
   */
  GetSameCityStoreList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetSameCityStoreList, params, response, _err);
  },
};
export default Model;
