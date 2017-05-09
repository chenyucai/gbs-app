/**
 * Created by huguang on 2017/3/21.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView,
    ListView,
    Dimensions
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CheckBox from './CheckBox';
import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import ApiConst from '../../../Base/Urls/ApiConst';
import MyModal from '../MyModal/MyModal';
import DiaryListItem from '../../../BaseView/DiaryListItem/DiaryListItem';

const { width, height } = Dimensions.get('window');
export default class Mygoodlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 != r2
            }).cloneWithRows(['id:1', 'id:2', 'id:3'
            ]),
            isCheck: true,
        }
    }

    componentDidMount() {
        this.getTopic('db349885-3c18-48b0-9426-d5c86a388f81')
    }
    getTopic(id) {
        // let params = {
        //     classid: 'a58e6232-d4e9-401b-8ced-7ed2b4b14d45',
        //     pid: id,
        //     page: 1,
        //     num: 1000
        // }
        // MyModal.GetDiaryGroupGoodsList(params, (res) => {
        //     if (res.result.flag == 1) {
        //         this.setState({
        //             dataSource: this.ds.cloneWithRows(res.infos),
        //             data: res.infos
        //         })
        //         //data=res.infos;
        //         for (let i = 0; i < res.infos.length; i++) {
        //             this.topicIds.push(res.infos[i].id);
        //             this.checked.push(res.infos[i].id)
        //         }
        //     }
        //     //alert(JSON.stringify(res))
        // });
        //另一种取数据方式
        let formData = new FormData();
        formData.append("UserID", " 992a9405-be08-4c74-bbcc-a57cf6df84c3");
        fetch(ApiConst.Versions().BaseUrl + '/AppOrder/GetOrderCompleteListJson',
            {
                method: 'POST',
                headers: {},
                body: formData,
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
            }).then((json) => {
                alert(JSON.stringify(json));
                this.setState({
                    dataSource: this.ds.cloneWithRows([]),
                    data: json
                })
                for (let i = 0; i < res.infos.length; i++) {
                    this.topicIds.push(res.infos[i].id);
                    this.checked.push(res.infos[i].id)
                }
            }
            ).catch((error) => {
                console.error(error);
            });
    }

    setChecked() {
        if (this.state.isCheck) {
            this.checked = []
        } else {
            this.checked = this.topicIds
        }
        this.setState({
            isCheck: !this.state.isCheck
        })
    }
    getCheckId(checked, id) {
        if (this.state.isCheck) {
            this.checked = []
        } else {
            this.checked = this.topicIds
        }
        this.setState({
            isCheck: !this.state.isCheck
        })
        if (checked) {
            this.checked.indexOf(id) == -1 ? this.checked.push(id) : false
        } else if (this.checked.indexOf(id) != -1 && !checked) {
            this.checked.splice(this.checked.indexOf(id), 1)
        }
        alert(this.checked)
    }
    renderRow(rowData) {
        return (

            <View style={styles.goodlist}>
                <View style={styles.goodlistleft}>
                    <Text style={{ paddingTop: 10, fontSize: 14, color: '#aaa', marginLeft: 10, }} numberOfLines={2}>【紧肤系列】润白颜水光针2ml润白颜水光针2ml润白颜水光针2ml润白颜水光针2ml润白颜水光针2ml</Text>
                </View>

                <View style={styles.goodlistright}>
                    <CheckBox isCheck={this.state.isCheck} onPress={(checked) => this.getCheckId(checked, rowData.id)} data={rowData} />
                    {/*<Image style={{ width: 25, height: 25 }} source={require('../../aimage/gouxuan.png')} />*/}
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#efefef" }}>
                <BaseNavigationBar
                    data={{
                        title: "已购产品列表",
                        leftbtn: {
                            type: BaseNavigationBar.TYPE._IMG,
                            onClick: () => {
                                this.props.nav.pop();
                            }
                        },
                    }} />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        )
    }


}
const styles = StyleSheet.create({
    goodlist: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: width,
        height: 75,
        backgroundColor: '#fff'
    },
    goodlistleft: {
        width: width * 0.8,
        height: 75,
    },
    goodlistright: {
        width: width * 0.2,
        height: 75,
    }
})