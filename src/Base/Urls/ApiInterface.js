/**
 * 接口信息，每个功能要注释
 */
let ApiInterface = {
  /**
   * 首页
   */
  // 首页数据
  GetHomeCategoryList: '/AppHome/GetHomeCategoryList',
  GetHomeDiscountedGoodsList: '/AppHome/GetHomeDiscountedGoodsList',
  GetHomeStarGoodsList: '/AppHome/GetHomeStarGoodsList',
  GetHomeBannerList: '/AppHome/GetHomeBannerList',
  GetHomeInformationList: '/AppHome/GetHomeInformationList',
  // 搜索记录
  GetSearchValue: '/AppHome/GetSearchValue',
  // 光电美容
  GetGoodsListByCatergory: '/AppHome/GetGoodsListByCatergory',
  // 特惠圈
  GetEShopGoodsList: '/AppHome/GetEShopGoodsList',
  // 杂志社
  GetMagazineList: '/AppHome/GetMagazineList',
  // 狂欢大促
  GetDiscountedGoodsList: '/AppHome/GetDiscountedGoodsList',
  // 明星产品
  GetStarGoodsList: '/AppHome/GetStarGoodsList',
  // 同城门店
  GetSameCityStoreList: '/AppHome/GetSameCityStoreList',
  // 清空搜索记录
  ClearSearchValue: '/AppHome/ClearSearchValue',
  // 搜索
  Search: '/AppHome/Search',

  /**
   * 商品&杂志社
   */
  //商品
    //产品详情
  GetGoodsDetail: 'AppGoods/GetGoodsDetail',
  GetCollectionUserList: 'AppGoods/GetCollectionUserList',
  GetCollectionUserDetail: 'AppGoods/GetCollectionUserDetail',
  //门店
    //门店详情
  GetStoreDetail: 'AppStore/GetStoreDetail',
  //杂志社
    //杂志社详情
  GetMagazineDetail: 'AppMagazine/GetMagazineDetail',
  //手艺人
  GetBeauticianListByStoreId: 'AppBeautician/GetBeauticianListByStoreId',
  GetBeauticianDetailByBeauticianId: 'AppBeautician/GetBeauticianDetailByBeauticianId',
  GetDiaryListByBeauticianId: 'AppBeautician/GetDiaryListByBeauticianId',
  GetDiaryDetailByDiaryId: 'AppBeautician/GetDiaryDetailByDiaryId',
  GetDiaryCommentListByDiaryId: 'AppBeautician/GetDiaryCommentListByDiaryId',
  SaveDiaryComment: 'AppBeautician/SaveDiaryComment',
  //日记本
  getDiaryGroupByUserId: 'AppDiaryController/getDiaryGroupByUserId',
  getDiaryGroupByGoodsId: 'AppDiaryController/getDiaryGroupByGoodsId',

  /**
   * 登陆
   */
  //获取验证码
  GetAuthCode: 'AppLogin/GetAuthCode',
  //注册
  Register: 'AppLogin/Register',
  //登陆
  Login: 'AppLogin/Login',
  //忘记密码
  ForgetPassword: 'AppLogin/ForgetPassword',
  Post: 'AppLogin/Post',
  //绑定手机号
  BindTel: 'AppLogin/BindTel',

  /**
   * 个人中心
   */
  //首页
  GetPersonalCenter: 'AppPersonal/GetPersonalCenter',
  //个人信息
  GetPersonalDetail: 'AppPersonal/GetPersonalDetail',
  //签到
  SetPersonalSign: 'AppPersonal/SetPersonalSign',
  //保存头像
  SavePersonalIcon: 'AppPersonal/SavePersonalIcon',
  //保存信息
  SavePersonalDetail: 'AppPersonal/SavePersonalDetail',
  //分享获利
  GetInviteInformation: 'AppPersonal/GetInviteInformation',
  //代理人列表
  GetInviteList: 'AppPersonal/GetInviteList',
  //红包列表
  GetRedPacketList: 'AppPersonal/GetRedPacketList',
  //领取红包
  RecieveRedPacket: 'AppPersonal/RecieveRedPacket',
  //获取我的账号余额（账号余额+赠送）
  GetMyAmount: 'AppPersonal/GetMyAmount',
  //获取我的积分
  GetPoint: 'AppPersonal/GetPoint',
  //获取我的优惠券
  GetMyCoupon: 'AppPersonal/GetMyCoupon',
  //获取我的消息
  GetMyMessages: 'AppPersonal/GetMyMessages',
  //获取我的收藏
  GetMyCollection: 'AppPersonal/GetMyCollection',
  //获取关于我们的信息
  GetAboutUsExplain: 'AppPersonal/GetAboutUsExplain',
  //获取余额说明
  GetAmountExplain: 'AppPersonal/GetAmountExplain',
  //获取优惠券说明
  GetCouponExplain: 'AppPersonal/GetCouponExplain',
  //获取积分规则
  GetPointExplain: 'AppPersonal/GetPointExplain',
  //获取用户手机号
  GetUserMobile: 'AppPersonal/GetUserMobile',
  //检查是否设置了支付密码
  IsPayPasswordSetted: 'AppPersonal/IsPayPasswordSetted',
  //设置支付密码
  SetPayPassword: 'AppPersonal/SetPayPassword',
  //修改支付密码
  ModifyPayPassword: 'AppPersonal/ModifyPayPassword',
  //修改账号密码
  ModifyPassword: 'AppPersonal/ModifyPassword',
  GetOpinionList: 'AppPersonal/GetOpinionList',
  SaveOpinion: 'AppPersonal/SaveOpinion',
  //实名认证
  AuthUserName: 'AppPersonal/AuthUserName',
  //我的日记本-列表
  GetDiaryGroupList: 'AppPersonal/GetDiaryGroupList',
  //我的日记本-获取日记本详情
  GetDiaryGroupDetail: 'AppPersonal/GetDiaryGroupDetail',
  //我的日记本-保存日记本
  SaveDiaryGroup: 'AppPersonal/SaveDiaryGroup',
  //我的日记本-关联产品列表
  GetDiaryGroupGoodsList: 'AppPersonal/GetDiaryGroupGoodsList',
  //日记列表
  GetDiaryList: 'AppPersonal/GetDiaryList',
  //日记详情
  GetDiaryDetail: 'AppPersonal/GetDiaryDetail',
  //日记编辑
  SaveDiary: 'AppPersonal/SaveDiary',
  //我的话题列表
  GetDiaryList: 'AppPersonal/GetDiaryList',
  //我的评论
  GetCollectionList: 'AppPersonal/GetCollectionList',
  //我的关注
  MyCommentList: 'AppPersonal/MyCommentList',
  //我的关注-粉丝
  MyFansList: 'AppPersonal/MyFansList',

  /**
   *通用接口
   */
  //收藏
  SetClearCollectionZan: 'AppCommon/SetClearCollectionZan',
  //分享
  Share: 'AppCommon/Share',
  //保存评论
  SaveComments: 'AppCommon/SaveComments',
  //获取微信配置
  GetWeixinConfig: 'AppCommon/GetWeixinConfig',
  //获取关于的信息
  GetAbountUsRule: 'AppCommon/GetAbountUsRule',
  //上传文件
  UploadPicture: 'AppCommon/UploadPicture',

  /**
   *订单
   */
  //订单管理
  CreateOrder: 'AppOrderManage/CreateOrder',
  UpdateOrder: 'AppOrderManage/UpdateOrder',
  GetRemainingBalanceByUserId: 'AppOrderManage/GetRemainingBalanceByUserId',
  SetAssessmentsGoods: 'AppOrderManage/SetAssessmentsGoods',

  /**
   *订单查询
   */
  //获取美丽库数据
  GetOrderListJson: 'AppOrder/GetOrderListJson',
  //获取完成订单
  GetOrderCompleteListJson: 'AppOrder/GetOrderCompleteListJson',
  //获取预约列表
  GetReservationListJson: 'AppOrder/GetReservationListJson',
  //获取订单详情
  GetOrderDetails: 'AppOrder/GetOrderDetails',
  //获取套餐详情
  GetTCGoodsDetails: 'AppOrder/GetTCGoodsDetails',

  /**
   *优惠券
   */
  //领取优惠券
  GetCouponListByGoodsIdAndUserId: 'AppCoupon/GetCouponListByGoodsIdAndUserId',
  SaveGettedCoupon: 'AppCoupon/SaveGettedCoupon',
  //使用优惠券
  GetUserCouponListByOrderId: 'AppCoupon/GetUserCouponListByOrderId',

  /**
   *支付
   */
  //余额支付
  PayByBalance: 'AppPay/PayByBalance',
  //微信支付
  GetWxInfo: 'AppPay/GetWxInfo',
  PrePayByWeixin: 'AppPay/PrePayByWeixin',
  //支付成功
  PayByWeixinSuccess: 'AppPay/PayByWeixinSuccess',

  /**
   *预约
   */
  GetAllCategoryList: 'AppAssess/GetAllCategoryList',
  //检查是否预约
  checkGoodsHasReservation: 'AppAssess/checkGoodsHasReservation',
  GetAllCategoryItemList: 'AppAssess/GetAllCategoryItemList',
  GetAssessCategoryList: 'AppAssess/GetAssessCategoryList',
  //保存评价信息
  SaveAssessItemList: 'AppAssess/SaveAssessItemList',
  UploadPicture: 'AppAssess/UploadPicture',
  
  /**
   *购物车
   */
  //购物车列表
  GetShoppingCartList: 'AppGoods/GetShoppingCartList',
  //加入购物车
  AddShoppingCart: 'AppGoods/AddShoppingCart',
  //编辑商品数量
  EditShoppingCart: 'AppGoods/EditShoppingCart',
  //删除商品

};
export default ApiInterface;
