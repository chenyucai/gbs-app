/**
 * Created by leung on 2016/11/14.
 */
import DeviceInfo from 'react-native-device-info';
/**
 * 设备信息
 */
function GetDeviceInfo()
{
	return {
		deviceUId: DeviceInfo.getUniqueID(),
		deviceM: DeviceInfo.getManufacturer(),
		deviceId: DeviceInfo.getDeviceId(),
		deviceSysName: DeviceInfo.getSystemName(),
		deviceVersion: DeviceInfo.getSystemVersion(),
		deviceBundleID: DeviceInfo.getBundleId(),
		deviceBundleNumber: DeviceInfo.getBuildNumber(),
		deviceAppVersion: DeviceInfo.getVersion(),
		deviceName: DeviceInfo.getDeviceName(),
		deviceModel: DeviceInfo.getModel()
	}
}
export default GetDeviceInfo;