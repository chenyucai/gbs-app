/**
 * Created by leung on 2016/9/7.
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
import Index from './Action/Index/Index/Index';
/**
 * 个人中心
 */
import PersonalCenter from './Action/PersonalCenter/PersonalCenter';
/**
 * 统计销售
 */
import StatisticsSales from './Action/StatisticsSales/StatisticsSales';
/**
 * 拜访率
 */
import StatisticsVisit from './Action/StatisticsVisit/StatisticsVisit';
/**
 * 首页(概览)
 */
import Overview from './Action/Overview/Overview';
/**
 * 销售达成率
 */
import SaleReachRate from './Action/SaleReachRate/SaleReachRate/SaleReachRate';

/**
 * 拜访率
 */
import VisitReachRate from './Action/VisitReachRate/VisitReachRate/VisitReachRate';
/**
 * 拜访明细
 */
import VisitDetail from './Action/StatisticsVisit/VisitDetail/VisitDetail';
/**
 * 销售详情
 */
import SaleDetail from './Action/SaleDetail/SaleDetail/SaleDetail';
/**
 * 用户登录
 */
import UserLogin from './Action/Login/UserLogin/UserLogin';
/**
 * 忘记密码
 */
import ForgetPsd from './Action/Login/ForgePsd/ForgetPsd';
/**
 * 修改密码
 */
import ModifyPsd from './Action/Login/ModifyPsd/ModifyPsd';
/**
 * 联系人
 */
import LinkMan from './Action/LinkMan/LinkMan/LinkMan';
/**
 * 联系人详情页
 */
import LinkManDetail from './Action/LinkMan/LinkManDetail/LinkManDetail';
/**
 * 产品分类
 */
import ProductCategories from './Action/ProductCategories/ProductCategories/ProductCategories';
/**
 * 学习资料列表
 */
import LearningPlatformList from './Action/PublicManage/LearningPlatform/LearningPlatformList/LearningPlatformList';
/**
 * 学习资料详情
 */
import LearningPlatformDetail from './Action/PublicManage/LearningPlatform/LearningPlatformDetail/LearningPlatformDetail';
/**
 * 营销理念列表
 */
import MarketingConceptList from './Action/PublicManage/MarketingConcept/MarketingConceptList/MarketingConceptList';
/**
 * 理念详情
 */
import MarketingConceptDetail from './Action/PublicManage/MarketingConcept/MarketingConceptDetail/MarketingConceptDetail';
/**
 * 提案平台详情
 */
import ProposalPlatformDetail from './Action/PublicManage/ProposalPlatform/ProposalPlatformDetail/ProposalPlatformDetail';
/**
 * 提案平台
 */
import ProposalPlatformList from './Action/PublicManage/ProposalPlatform/ProposalPlatformList/ProposalPlatformList';
/**
 * 添加提案
 */
import ProposalPlatformAdd from './Action/PublicManage/ProposalPlatform/ProposalPlatformAdd/ProposalPlatformAdd';
/**
 * 市场调研列表
 */
import MarketResearchList from './Action/PublicManage/MarketResearch/MarketResearchList/MarketResearchList';
/**
 * 调研详情
 */
import MarketResearchDetail from './Action/PublicManage/MarketResearch/MarketResearchDetail/MarketResearchDetail';
/**
 * 客户管理首页
 */
/**
 * 客户信息
 */
import ClientInfo from './Action/Client/ClientInfo/ClientInfo';
/**
 * 添加客户
 */
import AddClient from './Action/Client/AddClient/AddClient';
/**
 * 订单详情
 */
import OrderDetails from './Action/Client/OrderDetails/OrderDetails';


/**
 * 生产计划
 */
import ProductionpPlanList from './Action/SaleSelfService/ProductionPlan/ProductionPlanList/ProductionPlanList';
import ProductionPlanDetail from './Action/SaleSelfService/ProductionPlan/ProductionPlanDetail/ProductionPlanDetail';

/**
 * 库存查询
 */
import InventoryQuery from './Action/SaleSelfService/InventoryQuery/InventoryQuery/InventoryQuery';
import InventoryQueryResult from './Action/SaleSelfService/InventoryQuery/InventoryQueryResult/InventoryQueryResult';
import InventoryQueryDetail from './Action/SaleSelfService/InventoryQuery/InventoryQueryDetail/InventoryQueryDetail';

/**
 * 订单跟踪
 */
import OrdersList from './Action/SaleSelfService/OrderTracking/OrdersList/OrdersList';
import OrdersDetail from './Action/SaleSelfService/OrderTracking/OrdersDetail/OrdersDetail';

/**
 * 出货统计
 */
import ShipmentStatisticsList from './Action/SaleSelfService/ShipmentStatistics/ShipmentStatisticsList/ShipmentStatisticsList';
import ShipmentStatisticsDetail from './Action/SaleSelfService/ShipmentStatistics/ShipmentStatisticsDetail/ShipmentStatisticsDetail';

/**
 * 纸厂信息
 */
import PaperFactoryList from './Action/SaleSelfService/PaperFactoryInfo/PaperFactoryList/PaperFactoryList';
import EditPaperFactory from './Action/SaleSelfService/PaperFactoryInfo/EditPaperFactory/EditPaperFactory';
import AddPaperFactory from './Action/SaleSelfService/PaperFactoryInfo/AddPaperFactory/AddPaperFactory';
import AddBrands from './Action/SaleSelfService/PaperFactoryInfo/Brands/AddBrands';
import AddMachine from './Action/SaleSelfService/PaperFactoryInfo/Machine/AddMachine';
import VisitMachine from './Action/SaleSelfService/PaperFactoryInfo/Machine/VisitMachine';
import PaperFactoryInfoCollection from './Action/SaleSelfService/PaperFactoryInfo/PaperFactoryInfoCollection/PaperFactoryInfoCollection';
import PaperFactoryInfoCollectionDetail from './Action/SaleSelfService/PaperFactoryInfo/PaperFactoryInfoCollection/PaperFactoryInfoCollectionDetail';
import PaperFactoryInfoCollectionDetailAddPaperType from './Action/SaleSelfService/PaperFactoryInfo/PaperFactoryInfoCollection/PaperFactoryInfoCollectionDetailAddPaperType';
/**
 * 拜访签到
 */
import VisitSign from './Action/Client/VisitSign/VisitSign';
/**
 * 客户需求列表
 */
import ClientDemand from './Action/Client/ClientDemand/ClientDemand';
import ClientDemandDetails from './Action/Client/ClientDemand/ClientDemandDetails';
import ClientDemandEdit from './Action/Client/ClientDemand/ClientDemandEdit';
/**
 * 客户纸厂信息
 */
import ClientCompanyInfo from './Action/Client/ClientCompanyInfo/ClientCompanyInfo';
import ClientCompanyInfoEdit from './Action/Client/ClientCompanyInfo/ClientCompanyInfoEdit';
/**
 * 反馈
 */
import FeedBackList from './Action/Client/FeedBack/FeedBackList'
import FeedBack from './Action/Client/FeedBack/FeedBack'
/**
 * 地图
 */
import ClientListMap from './Action/Client/ClientMap/ClientListMap'
import ClientMap from './Action/Client/ClientMap/ClientMap'

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
import BaiduMap from './BaseView/BaiduMap/BaiduMap';
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
            case 'BaiduMap':
                return <BaiduMap/>
            /**
             */
            case 'Index':
                return (
                    <Index nav={navigator} params={route}/>
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
             *  联系人
             * */
            case 'LinkMan':
                return (
                    <LinkMan nav={navigator} params={route}/>
                );
            /**
             *  联系人详情页
             * */
            case 'LinkManDetail':
                return (
                    <LinkManDetail nav={navigator} params={route}/>
                );
            /**
             *  产品分类
             * */
            case 'ProductCategories':
                return (
                    <ProductCategories nav={navigator} params={route}/>
                );
            /**
             *  学习资料列表
             * */
            case 'LearningPlatformList':
                return (
                    <LearningPlatformList nav={navigator} params={route}/>
                );
            /**
             *  学习资料详情
             * */
            case 'LearningPlatformDetail':
                return (
                    <LearningPlatformDetail nav={navigator} params={route}/>
                );
            /**
             *  营销理念列表
             * */
            case 'MarketingConceptList':
                return (
                    <MarketingConceptList nav={navigator} params={route}/>
                );
            /**
             *  理念详情
             * */
            case 'MarketingConceptDetail':
                return (
                    <MarketingConceptDetail nav={navigator} params={route}/>
                );
            /**
             * 提案平台详情
             */
            case 'ProposalPlatformDetail':
                return (
                    <ProposalPlatformDetail nav={navigator} params={route}/>
                );
            /**
             *  市场调研列表
             * */
            case 'MarketResearchList':
                return (
                    <MarketResearchList nav={navigator} params={route}/>
                );
            /**
             *  调研详情
             * */
            case 'MarketResearchDetail':
                return (
                    <MarketResearchDetail nav={navigator} params={route}/>
                );
            /**
             * 生产计划
             */
            case 'ProductionpPlanList':
                return (
                    <ProductionpPlanList nav={navigator} params={route}/>
                );
            case 'ProductionPlanDetail':
                return (
                    <ProductionPlanDetail nav={navigator} params={route}/>
                );

            /**
             * 库存查询
             */
            case 'InventoryQuery':
                return (
                    <InventoryQuery nav={navigator} params={route}/>
                );
            case 'InventoryQueryResult':
                return (
                    <InventoryQueryResult nav={navigator} params={route}/>
                );
            case 'InventoryQueryDetail':
                return (
                    <InventoryQueryDetail nav={navigator} params={route}/>
                );

            /**
             * 订单跟踪
             */
            case 'OrdersList':
                return (
                    <OrdersList nav={navigator} params={route}/>
                );
            case 'OrdersDetail':
                return (
                    <OrdersDetail nav={navigator} params={route}/>
                );

            /**
             * 出货统计
             */
            case 'ShipmentStatisticsList':
                return (
                    <ShipmentStatisticsList nav={navigator} params={route}/>
                );
            case 'ShipmentStatisticsDetail':
                return (
                    <ShipmentStatisticsDetail nav={navigator} params={route}/>
                );

            /**
             * 纸厂信息
             */
            case 'PaperFactoryList':
                return (
                    <PaperFactoryList nav={navigator} params={route}/>
                );
            case 'EditPaperFactory':
                return (
                    <EditPaperFactory nav={navigator} params={route}/>
                );
            case 'AddPaperFactory':
                return (
                    <AddPaperFactory nav={navigator} params={route}/>
                );
            case 'AddBrands':
                return (
                    <AddBrands nav={navigator} params={route}/>
                );
            case 'AddMachine':
                return (
                    <AddMachine nav={navigator} params={route}/>
                );
            case 'VisitMachine':
                return (
                    <VisitMachine nav={navigator} params={route}/>
                );
            case 'PaperFactoryInfoCollection':
                return (
                    <PaperFactoryInfoCollection nav={navigator} params={route}/>
                );
            case 'PaperFactoryInfoCollectionDetail':
                return (
                    <PaperFactoryInfoCollectionDetail nav={navigator} params={route}/>
                );
            case 'PaperFactoryInfoCollectionDetailAddPaperType':
                return (
                    <PaperFactoryInfoCollectionDetailAddPaperType nav={navigator} params={route}/>
                );
            /**
             *  提案平台
             * */
            case 'ProposalPlatformList':
                return (
                    <ProposalPlatformList nav={navigator} params={route}/>
                );
            /**
             *  添加提案
             * */
            case 'ProposalPlatformAdd':
                return (
                    <ProposalPlatformAdd nav={navigator} params={route}/>
                );
            /**\
             * 个人中心
             */
            case 'PersonalCenter':
                return (
                    <PersonalCenter nav={navigator} params={route}/>
                );
            /**
             * 统计销售
             */
            case 'StatisticsSales':
                return (
                    <StatisticsSales nav={navigator} params={route}/>
                );
            /**
             * 拜访率
             */
            case 'StatisticsVisit':
                return (
                    <StatisticsVisit nav={navigator} params={route}/>
                );
            /**
             * 拜访明细
             */
            case 'VisitDetail':
                return (
                    <VisitDetail nav={navigator} params={route}/>
                );
            /**
             * 首页(概览)
             */
            case 'Overview':
                return (
                    <Overview nav={navigator} params={route}/>
                );
            /**
             * 销售达成率
             */
            case 'SaleReachRate':
                return (
                    <SaleReachRate nav={navigator} params={route}/>
                );
            /**
             * 拜访率
             */
            case 'VisitReachRate':
                return (
                    <VisitReachRate nav={navigator} params={route}/>
                );
            /**
             * 销售详情
             */
            case 'SaleDetail':
                return (
                    <SaleDetail nav={navigator} params={route}/>
                )
            /**
             * 客户详情
             */
            case 'ClientInfo':
                return (
                    <ClientInfo nav={navigator} params={route}/>
                );
            /**
             * 添加客户
             */
            case 'AddClient':
                return (
                    <AddClient nav={navigator} params={route}/>
                );
            /**
             * 订单详情
             */
            case 'OrderDetails':
                return (
                    <OrderDetails nav={navigator} params={route}/>
                );
            /**
             * 拜访签到
             */
            case 'VisitSign':
                return (
                    <VisitSign nav={navigator} params={route}/>
                );
            /**
             * 客户需求
             */
            case 'ClientDemand':
                return (
                    <ClientDemand nav={navigator} params={route}/>
                );
            case 'ClientDemandDetails':
                return (
                    <ClientDemandDetails nav={navigator} params={route}/>
                );
            case 'ClientDemandEdit':
                return (
                    <ClientDemandEdit nav={navigator} params={route}/>
                );
            case 'ClientCompanyInfo':
                return (
                    <ClientCompanyInfo nav={navigator} params={route}/>
                );
            case 'ClientCompanyInfoEdit':
                return (
                    <ClientCompanyInfoEdit nav={navigator} params={route}/>
                );
            case 'FeedBackList':
                return (
                    <FeedBackList nav={navigator} params={route}/>
                );
            case 'FeedBack':
                return (
                    <FeedBack nav={navigator} params={route}/>
                );
            case 'ClientListMap':
                return (
                    <ClientListMap nav={navigator} params={route}/>
                );
            case 'ClientMap':
                return (
                    <ClientMap nav={navigator} params={route}/>
                );

            default:
                return null;
        }
    }
}
