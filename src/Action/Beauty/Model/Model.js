/**
 * Created by chenYc on 2017/4/15.
 * 专门用来写请求的
 */

import FetchUtil from '../../../Base/Network/FetchUtil';
import ApiConst from '../../../Base/Urls/ApiConst';
import ApiInterface from '../../../Base/Urls/ApiInterface';

let Model = {
  /**
   * 光电门店-列表
   */
  GetStoreList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetStoreList, params, response, _err);
  },
  /**
   * 门店详情
   */
  GetStoreDetail(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetStoreDetail, params, response, _err);
  },
  /**
   * 产品详情
   */
  GetGoodsDetail(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetGoodsDetail, params, response, _err);
  },
  /**
   * 光电学堂-列表
   */
  GetMagazineList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetMagazineList, params, response, _err);
  },
  /**
   * 光电学堂-详情
   */
  GetMagazineDetail(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetMagazineDetail, params, response, _err);
  },
  /**
   * 用户日记-列表
   */
  GetDiaryList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetDiaryList, params, response, _err);
  },
};
export default Model;
