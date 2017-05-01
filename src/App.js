/**
 * Created by chenyucai on 2017/4/10.
 */
// console.disableYellowBox = true;
import React, {Component} from 'react';
import {
    Navigator,
    Platform,
    Dimensions,
    PixelRatio,

} from 'react-native';

/**
 * 首页
 */
import Index from './Action/Index/Index';
/**
 * 首页搜索
 */
import HomeSearch from './Action/Home/HomeSearch';
/**
 * 欢乐优促
 */
import HomeSaleList from './Action/Home/HomeSaleList';
/**
 * 华丽变身
 */
import SpecialColumn from './Action/Home/SpecialColumn';
/**
 * 光电美容
 */
import Photoelectricbeauty from './Action/Beauty/Photoelectricbeauty/Photoelectricbeauty';
/**
 * 光电美容面部模块
 */
import Facialshaping from './Action/Beauty/Photoelectricbeauty/Facialshaping';
/**
 * 光电门店
 */
import Optoelectronicstore from './Action/Beauty/Optoelectronicstore/Optoelectronicstore';
/**
 * 光电学堂
 */
import Photoelectricschoollist from './Action/Beauty/Photoelectricschool/Photoelectricschoollist';
/**
 * 学堂详情
 */
import Photoelectricschooldetail from './Action/Beauty/Photoelectricschool/Photoelectricschooldetail';
/**
 * 微整形
 */
import Microplastic from './Action/Microplastic/Microplastic';
/**
 * 皮肤美容
 */
import Skinbeauty from './Action/Microplastic/Skinbeauty/Skinbeauty';
/**
 * 手艺人
 */
import Technician from './Action/Technician/Technician';
/**
 * 用户日记
 */
import Userdiary from './Action/Beauty/Userdiary/Userdiary';
/**
 * 丽人
 */
import Beautifulwoman from './Action/Beautifulwoman/Beautifulwoman';
/**
 * 推荐商家列表
 */
import RecommendStoreList from './Action/Home/RecommendStoreList';
/**
 * 特惠圈
 */
import Preferentialcircle from './Action/Preferential/Preferentialcircle/Preferentialcircle';
/**
 * 特惠圈
 */
import Requiredpackages from './Action/Preferential/Required/Requiredpackages';
/**
 * 特惠圈
 */
import Purchaserequired from './Action/Preferential/Purchaserequired/Purchaserequired';
/**
 * 特惠圈
 */
import Requiredspecial from './Action/Preferential/Required/Requiredspecial';
/**
 * 特惠圈
 */
import Special from './Action/Preferential/Special/Special';
/**
 * 特惠圈
 */
import Grouppurchase from './Action/Preferential/Group/Grouppurchase';
/**
 * 特惠圈
 */
import ComboDetail from './Action/Preferential/ComboDetail/ComboDetail';
/**
 * 特惠圈
 */
import Packagelist from './Action/Preferential/Package/Packagelist';
/**
 * 特惠圈
 */
import GroupDetail from './Action/Preferential/Group/GroupDetail';
/**
 * 同城门店
 */
import CityStoreList from './Action/CityStore/CityStoreList';
/**
 * 商家列表
 */
import StoreList from './Action/Home/RecommendStoreList';
/**
 * 门店详情
 */
import StoreDetail from './Action/Beauty/StoreDetail/StoreDetail';
/**
 * 用户详情
 */
import UserDetail from './Action/Beauty/UserDetail/UserDetail';
/**
 * 在线留言
 */
import LeaveMessage from './Action/Beauty/LeaveMessage/Message';
/**
 * 产品详情
 */
import ProductDetail from './Action/Beauty/ProductDetail/ProductDetail';
/**
 * 日记本列表
 */
import DiaryList from './Action/Beauty/Diary/DiaryList';
/**
 * 日记本详情
 */
import DiaryListDetail from './Action/Beauty/Diary/DiaryListDetail';
/**
 * 发布日记
 */
import PublishDiary from './Action/Community/PublishDiary';
/**
 * 网上社区
 */
import Community from './Action/Community/Community';
/**
 * 杂志社
 */
import Magazine from './Action/Magazine/Magazine';
/**
 * 确认订单（购物车）
 */
import PayBefore from './Action/Pay/PayBefore';
/**
 * 确认订单（单品）
 */
import ConfirmOrder from './Action/Pay/ConfirmOrder';
/**
 * 支付
 */
import Pay from './Action/Pay/Pay';
/**
 * 支付完成
 */
import PayComplete from './Action/Pay/PayComplete';
/**
 * 个人中心
 */
// import PersonalCenter from './Action/PersonalCenter/PersonalCenter';
/**
 * 个人中心 - 订单列表
 */
import OrderList from './Action/PersonalCenter/PersonalCenter/OrderList';
/**
 * 个人信息
 */
import PersonalInfo from './Action/PersonalCenter/PersonalInfo/PersonalInfo';
/**
 * 分享获利
 */
import Profit from './Action/PersonalCenter/Profit/Profit';
/**
 * 代理人列表
 */
import AgentList from './Action/PersonalCenter/Profit/AgentList';
/**
 * 奖励红包
 */
import ProfitDetail from './Action/PersonalCenter/Profit/ProfitDetail';
/**
 * 我的关注
 */
import MyConcern from './Action/PersonalCenter/MyConcern/MyConcern';
/**
 * 我的收藏
 */
import MyCollection from './Action/PersonalCenter/MyCollection/MyCollection';
/**
 * 我的话题
 */
import MyTopic from './Action/PersonalCenter/MyTopic/MyTopic';
/**
 * 话题详情
 */
import TopicDetail from './Action/Beauty/TopicDetail/TopicDetail';
/**
 * 我的评论
 */
import MyComment from './Action/PersonalCenter/MyComment/MyComment';
/**
 * 我的日记本
 */
import MyDiary from './Action/PersonalCenter/MyDiary/MyDiary';
/**
 * 日记详情
 */
import DiaryDetail from './Action/Beauty/Diary/DiaryDetail';

/**
 * 全局宽和高
 */
GOBAL_WIDTH = Dimensions.get('window').width;
GOBAL_HEIGHT = Dimensions.get('window').height;
GOBAL_PIXELRATIO = PixelRatio.get();

import BaseValue from './Base/BaseValue/BaseValue';
/**
 * 获取基础字体大小
 */
font = BaseValue.font;
colors = BaseValue.colors;
/**
 * 获取小的dp
 */
SmallDP = BaseValue.getSmallDP;
IosStatusBar = BaseValue.isiOSNavbar;
/**
 * 省略到小数点后
 */
xround = BaseValue.xround;

/**
 * 全局nav栈
 * ---为拓展混合应用做准备
 */
IS_ADD_NAV = false;
GOBAL_NAVS = [];
GOBAL_CURRENT_NAVS = () => {
    if (GOBAL_NAVS.length > 0)
        return GOBAL_NAVS[GOBAL_NAVS.length - 1];
    return null;
};

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * ---为拓展混合应用做准备
     */
    selectPage() {
        if (this.props.data != null) {
            IS_ADD_NAV = true;
            switch (this.props.data.type) {
                //默认进入首页
                default:
                    return ({id: "Index"});
            }
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={this.selectPage()}
                renderScene={(route, navigator) => {
                    if (IS_ADD_NAV) {
                        IS_ADD_NAV = false;
                        GOBAL_NAVS.push(navigator);
                    }
                    return this.renderScene(route, navigator);
                } }
            />
        );
    };

    renderScene(route, navigator) {
        switch (route.id) {
            /**
             * 首页
             */
            case 'Index':
                return (
                    <Index nav={navigator} route={route}/>
                );
            /**
             * 首页搜索
             */
            case 'HomeSearch':
                return (
                    <HomeSearch nav={navigator} route={route}/>
                );
            /**
             * 欢乐优促
             */
            case 'HomeSaleList':
                return (
                    <HomeSaleList nav={navigator} route={route}/>
                );
            /**
             * 华丽变身
             */
            case 'SpecialColumn':
                return (
                    <SpecialColumn nav={navigator} route={route}/>
                );
            /**
             * 商家列表
             */
            case 'StoreList':
                return (
                    <StoreList nav={navigator} route={route}/>
                );
            /**
             *  用户登录
             * */
            case 'UserLogin':
                return (
                    <UserLogin nav={navigator} route={route}/>
                );
            /**
             *  忘记密码
             * */
            case 'ForgetPsd':
                return (
                    <ForgetPsd nav={navigator} route={route}/>
                );
            /**
             *  修改密码
             * */
            case 'ModifyPsd':
                return (
                    <ModifyPsd nav={navigator} route={route}/>
                );
            /**
             *  光电美容
             * */
            case 'Photoelectricbeauty':
                return (
                    <Photoelectricbeauty nav={navigator} route={route}/>
                );
            /**
             * 同城门店
             */
            case 'CityStoreList':
                return (
                    <CityStoreList nav={navigator} route={route}/>
                );
            /**
             * 门店详情
             */
            case 'StoreDetail':
                return (
                    <StoreDetail nav={navigator} route={route}/>
                );
            /**
             * 用户详情
             */
            case 'UserDetail':
                return (
                    <UserDetail nav={navigator} route={route}/>
                );
            /**
             * 在线留言
             */
            case 'LeaveMessage':
                return (
                    <LeaveMessage nav={navigator} route={route}/>
                );
            /**
             * 在线留言
             */
            case 'ProductDetail':
                return (
                    <ProductDetail nav={navigator} route={route}/>
                );
            /**
             * 日记本列表
             */
            case 'DiaryList':
                return (
                    <DiaryList nav={navigator} route={route}/>
                );
            /**
             * 日记本列表详情
             */
            case 'DiaryListDetail':
                return (
                    <DiaryListDetail nav={navigator} route={route}/>
                );
            /**
             * 日记详情
             */
            case 'DiaryDetail':
                return (
                    <DiaryDetail nav={navigator} route={route}/>
                );
            /**
             * 网上社区
             */
            case 'Community':
                return (
                    <Community nav={navigator} route={route}/>
                );
            /**
             * 发布日记
             */
            case 'PublishDiary':
                return (
                    <PublishDiary nav={navigator} route={route}/>
                );
            /**
             * 杂志社
             */
            case 'Magazine':
                return (
                    <Magazine nav={navigator} route={route}/>
                );
            /**
             * 确认订单（单品）
             */
            case 'ConfirmOrder':
                return (
                    <ConfirmOrder nav={navigator} route={route}/>
                );
            /**
             * 确认订单（购物车）
             */
            case 'PayBefore':
                return (
                    <PayBefore nav={navigator} route={route}/>
                );
            /**
             * 支付
             */
            case 'Pay':
                return (
                    <Pay nav={navigator} route={route}/>
                );
            /**
             * 支付完成
             */
            case 'PayComplete':
                return (
                    <PayComplete nav={navigator} route={route}/>
                );
            /*---- 个人中心 ----*/
            /**
             * 个人信息
             */
            case 'PersonalInfo':
                return (
                    <PersonalInfo nav={navigator} route={route}/>
                );
            /**
             * 订单列表
             */
            case 'OrderList':
                return (
                    <OrderList nav={navigator} route={route}/>
                );
            /**
             * 分享获利
             */
            case 'Profit':
                return (
                    <Profit nav={navigator} route={route}/>
                );
            /**
             * 代理人列表
             */
            case 'AgentList':
                return (
                    <AgentList nav={navigator} route={route}/>
                );
            /**
             * 奖励红包
             */
            case 'ProfitDetail':
                return (
                    <ProfitDetail nav={navigator} route={route}/>
                );
            /**
             * 我的关注
             */
            case 'MyConcern':
                return (
                    <MyConcern nav={navigator} route={route}/>
                );
            /**
             * 我的收藏
             */
            case 'MyCollection':
                return (
                    <MyCollection nav={navigator} route={route}/>
                );
            /**
             * 我的话题
             */
            case 'MyTopic':
                return (
                    <MyTopic nav={navigator} route={route}/>
                );
            /**
             * 话题详情
             */
            case 'TopicDetail':
                return (
                    <TopicDetail nav={navigator} route={route}/>
                );
            /**
             * 我的评论
             */
            case 'MyComment':
                return (
                    <MyComment nav={navigator} route={route}/>
                );
            /**
             * 我的日记本
             */
            case 'MyDiary':
                return (
                    <MyDiary nav={navigator} route={route}/>
                );
            /**
             * 光电美容面部塑形
             */
            case 'Facialshaping':
                return (
                    <Facialshaping nav={navigator} route={route}/>
                );
            /**
             * 光电门店
             */
            case 'Optoelectronicstore':
                return (
                    <Optoelectronicstore nav={navigator} route={route}/>
                );
            /**
             * 光电学堂
             */
            case 'Photoelectricschoollist':
                return (
                    <Photoelectricschoollist nav={navigator} route={route}/>
                );
            /**
             * 学堂详情
             */
            case 'Photoelectricschooldetail':
                return (
                    <Photoelectricschooldetail nav={navigator} route={route}/>
                );
            /**
             * 用户日记
             */
            case 'Userdiary':
                return (
                    <Userdiary nav={navigator} route={route}/>
                );
            /**
             * 微整形
             */
            case 'Microplastic':
                return (
                    <Microplastic nav={navigator} route={route}/>
                );
            /**
             * 皮肤美容
             */
            case 'Skinbeauty':
                return (
                    <Skinbeauty nav={navigator} route={route}/>
                );
            /**
             * 手艺人列表
             */
            case 'Technician':
                return (
                    <Technician nav={navigator} route={route}/>
                );
            /**
             * 丽人
             */
            case 'Beautifulwoman':
                return (
                    <Beautifulwoman nav={navigator} route={route}/>
                );
            /**
             * 推荐商家列表
             */
            case 'RecommendStoreList':
                return (
                    <RecommendStoreList nav={navigator} route={route}/>
                );
            /**
             * 特惠圈
             */
            case 'Preferentialcircle':
                return (
                    <Preferentialcircle nav={navigator} route={route}/>
                );
            /**
             * 特惠圈
             */
            case 'Requiredpackages':
                return (
                    <Requiredpackages nav={navigator} route={route}/>
                );
              /**
               * 特惠圈
               */
            case 'Purchaserequired':
                return (
                    <Purchaserequired nav={navigator} route={route}/>
                );
            /**
             * 特惠圈
             */
            case 'Requiredspecial':
                return (
                    <Requiredspecial nav={navigator} route={route}/>
                );
            /**
             * 特惠圈
             */
            case 'Special':
                return (
                    <Special nav={navigator} route={route}/>
                );
              /**
               * 特惠圈
               */
            case 'Grouppurchase':
                return (
                    <Grouppurchase nav={navigator} route={route}/>
                );
            /**
             * 特惠圈
             */
            case 'ComboDetail':
                return (
                    <ComboDetail nav={navigator} route={route}/>
                );
            /**
             * 特惠圈
             */
            case 'GroupDetail':
                return (
                    <GroupDetail nav={navigator} route={route}/>
                );
            /**
             * 特惠圈
             */
            case 'Packagelist':
                return (
                    <Packagelist nav={navigator} route={route}/>
                );

            default:
                return null;
        }
    }
}
