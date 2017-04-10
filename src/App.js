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
 * 光电美容
 */
// import Photoelectricbeauty from '../beauty/Photoelectricbeauty';
/**
 * 同城门店
 */
import CityStoreList from './Action/CityStore/CityStoreList';
/**
 * 门店详情
 */
import StoreDetail from './Action/Beauty/StoreDetail/StoreDetail';
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
                    <Index nav={navigator} params={route}/>
                );
            /**
             * 首页搜索
             */
            case 'HomeSearch':
                return (
                    <HomeSearch nav={navigator} params={route}/>
                );
            /**
             *  用户登录
             * */
            case 'UserLogin':
                return (
                    <UserLogin nav={navigator} params={route}/>
                );
            /**
             *  忘记密码
             * */
            case 'ForgetPsd':
                return (
                    <ForgetPsd nav={navigator} params={route}/>
                );
            /**
             *  修改密码
             * */
            case 'ModifyPsd':
                return (
                    <ModifyPsd nav={navigator} params={route}/>
                );
            /**
             * 同城门店
             */
            case 'CityStoreList':
                return (
                    <CityStoreList nav={navigator} params={route}/>
                );
            /**
             * 门店详情
             */
            case 'StoreDetail':
                return (
                    <StoreDetail nav={navigator} params={route}/>
                );
            /**
             * 在线留言
             */
            case 'LeaveMessage':
                return (
                    <LeaveMessage nav={navigator} params={route}/>
                );
            /**
             * 在线留言
             */
            case 'ProductDetail':
                return (
                    <ProductDetail nav={navigator} params={route}/>
                );
            /**
             * 日记本列表
             */
            case 'DiaryList':
                return (
                    <DiaryList nav={navigator} params={route}/>
                );
            /**
             * 日记本列表详情
             */
            case 'DiaryListDetail':
                return (
                    <DiaryListDetail nav={navigator} params={route}/>
                );
            /**
             * 网上社区
             */
            case 'Community':
                return (
                    <Community nav={navigator} params={route}/>
                );
            /**
             * 发布日记
             */
            case 'PublishDiary':
                return (
                    <PublishDiary nav={navigator} params={route}/>
                );
            /**
             * 杂志社
             */
            case 'Magazine':
                return (
                    <Magazine nav={navigator} params={route}/>
                );
            /**
             * 确认订单（单品）
             */
            case 'ConfirmOrder':
                return (
                    <ConfirmOrder nav={navigator} params={route}/>
                );
            /**
             * 确认订单（购物车）
             */
            case 'PayBefore':
                return (
                    <PayBefore nav={navigator} params={route}/>
                );
            /**
             * 支付
             */
            case 'Pay':
                return (
                    <Pay nav={navigator} params={route}/>
                );
            /**
             * 支付完成
             */
            case 'PayComplete':
                return (
                    <PayComplete nav={navigator} params={route}/>
                );
            /**
             * 订单列表
             */
            case 'OrderList':
                return (
                    <OrderList nav={navigator} params={route}/>
                );

            default:
                return null;
        }
    }
}
