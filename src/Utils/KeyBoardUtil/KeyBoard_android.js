/**
 * Created by Leung on 2017/1/6.
 */
import {NativeModules} from 'react-native';
/**
 * 只针对android
 * KeyBoard_android并不是打开android的键盘，
 * 而是执行过一遍这个，键盘就不会出现跳了rn页面而打不开的情况
 */
function KeyBoard_android() {
    NativeModules.KeyBoard.restore()
}
export default KeyBoard_android;