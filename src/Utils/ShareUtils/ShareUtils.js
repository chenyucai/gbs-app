/**
 * Created by liaoye on 2017/2/16.
 */
import React,{Component} from 'react';
import {
    NativeModules
} from 'react-native'
var SunawShareModule = NativeModules.SunawShareModule;
let ShareUtils = {
    share(url,title,imageUrl,desc){
        SunawShareModule.shareOpen({
            url:url,
            title:title,
            thumb:imageUrl,
            description:desc
        },()=>{
            console.log('调用了这个方法')
        })
    }
};
export default ShareUtils;