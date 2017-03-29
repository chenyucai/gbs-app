/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

// import RegComponent from './components/register/Register'
import LoginComponent from './components/register/Login'
import HomeComponent from './components/home/Home';
import OptoelectronicstoreComponent from './components/beauty/Optoelectronicstore';
// import HomeSearchComponent from './components/home/HomeSearch'
// import HomeSaleListComponent from './components/home/HomeSaleList';
// import RecommendStoreListComponent from './components/home/RecommendStoreList';
// import SpecialColumnComponent from './components/home/SpecialColumn'
import PhotoelectricbeautyComponent from './components/beauty/Photoelectricbeauty'
import BottomTabsComponent from './components/common/BottomTabs';
import StoreDetailComponent from './components/beauty/StoreDetail'
import PhotoelectricschoollistComponent from './components/beauty/Photoelectricschoollist'
import ProductDetailComponent from './components/beauty/ProductDetail';
import CommentItemComponent from './components/common/CommentItem'
import PhotoelectricschoolddetailComponent from './components/beauty/Photoelectricschoolddetail'
import UserdiaryComponent from './components/beauty/Userdiary'
import FacialshapingComponent from './components/beauty/Facialshaping'
import CommentListComponent from './components/beauty/CommentList';
import TechnicianItemComponent from './components/common/TechnicianItem';
import TechnicianListComponent from './components/beauty/Technician';
import PayComponent from './components/beauty/Pay';
import ConfirmOrderComponent from './components/beauty/ConfirmOrder'
import MicroplasticComponent from './components/microplastic/Microplastic'
import ConfirmOrderComponent from './components/beauty/ConfirmOrder';
import PayCompleteComponent from './components/beauty/PayComplete';
import UserListItemComponent from './components/common/UserListItem';
import ProductFocusUsersComponent from './components/beauty/ProductFocusUsers';
import DiaryListComponent from './components/beauty/DiaryList'
import DiaryListDetailComponent from './components/beauty/DiaryListDetail'

export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{ name: 'login', component: DiaryListDetailComponent }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
