/**
 * Created by leung on 2016/9/29.
 */
import React from 'react';
import {
	BackAndroid,
	ToastAndroid,
	Platform,
	NativeModules
} from 'react-native';
// import ClearUI from './ClearUI';
// var BridgeNative = NativeModules.BridgeNative;
var TIME = 0;
var BaseBack = {

	DoNothing(){
		if (Platform.OS === 'android') {
			BackAndroid.addEventListener('hardwareBackPress', ()=> {
				return true;
			});
		}
	},
	// ReturnToInitPage(){
	// 	for (var i = GOBAL_NAVS.length - 1; i > 0; i--) {
	// 		GOBAL_NAVS.pop();
	// 	}
	// 	ClearUI();
	// 	GOBAL_CURRENT_NAVS().immediatelyResetRouteStack([{id: 'IndexPageNew'}, {id: 'LoginWithPsw'}])
	// },
	//安卓/ios虚拟返回键
	VirtualExit(){
		if (GOBAL_CURRENT_NAVS().getCurrentRoutes().length == 1) {
			if (Platform.OS === 'android') {
				BackAndroid.exitApp();
			} else {
				BridgeNative.nativePopView(null);
			}
			GOBAL_NAVS.pop();
		} else {
			GOBAL_CURRENT_NAVS().pop();
		}
	},
	//安卓物理back键
	HardwareExit(){
		if (Platform.OS === 'android') {
			BackAndroid.addEventListener('hardwareBackPress', ()=> {
				if (GOBAL_CURRENT_NAVS().getCurrentRoutes().length == 1) {
					if (GOBAL_NAVS.length == 1) {
						if (Date.now() - TIME < 2 * 1000) {
							BackAndroid.exitApp();
                            GOBAL_NAVS.pop();
						} else {
							TIME = Date.now();
							ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
						}
					} else {
						BackAndroid.exitApp();
						GOBAL_NAVS.pop();
					}
				} else {
					GOBAL_CURRENT_NAVS().pop();
				}
				return true;
			});
		}
	},
	WebView(nav, wv, backButtonEnabled){
		if (Platform.OS === 'android') {
			BackAndroid.addEventListener('hardwareBackPress', ()=> {
				if (backButtonEnabled && wv != null)
					wv.goBack();
				else
					nav.pop();
				return true;
			});
		}
	}
}
export default BaseBack;
