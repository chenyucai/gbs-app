/**
 * Created by Leung on 2016/12/1.
 */

/**
 * 使用方法
 * ParseJSON_Safe_Util.parseJSON_Safe(参数1, 参数2)
 * 参数1---需要被解析的json
 * 参数2---需要解析的结构的数组
 * 事例：this.props.params.data
 *       ParseJSON_Safe_Util.parseJSON_Safe(this.props,['params','data'])
 *
 * ParseJSON_Safe_Util.parseJSON_Safe_withDefaultValue(参数1, 参数2, 参数3)
 * 参数3---解析失败后的默认值
 *
 * @type {{source: {}, parseJSON_Safe: ((source, params))}}
 */
let ParseJSON_Safe_Util = {
	parseJSON_Safe(data, params){
		var source:'';
		source = data;
		//开始解析
		try {
			for (var i = 0; i < params.length; i++) {
				source = source[params[i]];
			}
			if (!source) {
				source = "";
			}
		} catch (e) {
			source = "";
		}
		//解析完毕返回
		return source;
	},
	parseJSON_Safe_withDefaultValue(data, params, defaultValue){
		var source:'';
		source = data;
		//开始解析
		try {
			for (var i = 0; i < params.length; i++) {
				source = source[params[i]];
			}
			if (!source) {
				source = defaultValue;
			}
		} catch (e) {
			source = defaultValue;
		}
		//解析完毕返回
		return source;
	}
}
export default ParseJSON_Safe_Util;