import FetchUtil from '../../../Base/Network/FetchUtil';
import ApiConst from '../../../Base/Urls/ApiConst';
import ApiInterface from '../../../Base/Urls/ApiInterface';

let MyModal = {
    //我的话题列表
    GetDiaryList(pa, response, error){
        var params = {
            ...pa
        };
        var _err = error || null;
        FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetDiaryList, params, response, _err);
    },
    //编辑话题
    EditTopic(pa, response, error){
        var params = {
            ...pa
        };
        var _err = error || null;
        FetchUtil.fetchJsonPostJson(ApiConst.Versions().BaseUrl + ApiInterface.EditTopic, params, response, _err);
    },
    //查询日记本列表
  GetDiaryGroupList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetDiaryGroupList, params, response, _err);
  },
  //保存日记本
  SaveDiaryGroup(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.SaveDiaryGroup, params, response, _err);
  },
  //关联产品列表
   GetDiaryGroupGoodsList(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetDiaryGroupGoodsList, params, response, _err);
  },
  //添加日记本
//    SaveDiaryGroup(pa, response, error){
//     var params = {
//       ...pa
//     };
//     var _err = error || null;
//     FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.SaveDiaryGroup, params, response, _err);
//   },
  //日记列表
//    GetDiaryList(pa, response, error){
//     var params = {
//       ...pa
//     };
//     var _err = error || null;
//     FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetDiaryList, params, response, _err);
//   },
  //日记详情
   GetDiaryDetail(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.GetDiaryDetail, params, response, _err);
  },
  //添加日记
   SaveDiary(pa, response, error){
    var params = {
      ...pa
    };
    var _err = error || null;
    FetchUtil.fetchGetJson(ApiConst.Versions().BaseUrl + ApiInterface.SaveDiary, params, response, _err);
  },
  upLoadImg(url,callBack) {
        let formData = new FormData();
        formData.append("filetype",0);
        var picturename = 'Client'+new Date().getTime()+ '.jpg';
        //console.log("picturename:"+picturename);
        formData.append("ImageStr", { uri: url, type: 'multipart/form-data', name: picturename });
        fetch(ApiConst.Versions().BaseUrl  + '/AppCommon/UploadPicture',
            {
                method: 'POST',
                headers: { 'Content-Type': 'multipart/form-data' },
                body: formData,
            }).then((response) => {
            if (response.ok) {
                var json = response.json();
                
                return json;
            }
        }).then((json) => {
            callBack(json.infos[0].path);
        }).catch((error) => {
            console.error(error);
        });
    },
    dealImage(path, obj, callback) {
    var img = new Image();
    img.src = path;
    img.onload = function () {
        var that = this;
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            scale = w / h;
        w = obj.width || w;
        h = obj.height || (w / scale);
        var quality = 0.7;  // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
            quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality);
        // 回调函数返回base64的值
        callback(base64);
        // console.log(base64);
        // return base64;
    }
}
};
export default MyModal;