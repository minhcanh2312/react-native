import React, {useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    CheckBox,
    TouchableOpacity
} from 'react-native'

export default function Signup() {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View>
            <Text style={styles.title}>Nhập số điện thoại</Text>
            <Text style={{textAlign:'center'}}>Số điện thoại này sẽ dùng để đăng nhập, tích lũy điểm và nhận các thông tin về khuyến mãi, chăm sóc khách hàng từ AIiO Loyalty</Text>
            <View style={styles.form_container}>
                <Text>Số điện thoại</Text>
                <ScrollView contentContainerStyle={styles.input_view}>
                    <TextInput
                        placeholder="Nhập số điện thoại"
                        keyboardType="numeric"
                        placeholderTextColor="#d4d4d4"
                        style={styles.input_text}
                    />
                </ScrollView>
            </View>
            <View style={styles.form_container}>
                <Text>Mật khẩu</Text>
                <ScrollView contentContainerStyle={styles.input_view}>
                    <TextInput
                        placeholder="Mật khẩu"
                        placeholderTextColor="#d4d4d4"
                    />
                </ScrollView>
            </View>
            <View style={styles.rules_container}>
                <CheckBox />
                <Text style={{paddingLeft: 5}}>Tôi Đồng ý nhận thông tin khuyến mãi, khảo sát, quảng cáo và chăm sóc khách hàng của AIiO Loyalty</Text>
            </View>
            <View style={styles.rules_container}>
                <CheckBox />
                <Text style={{paddingLeft: 5}}>Tôi đã đọc thông báo quyền riêng tư của AIiO Loyalty tại đây</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>Tiếp tục</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginBottom: 50
    },
    form_container: {
        width: "100%",
        marginBottom: 20
    },
    input_view: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        padding: 10,
        justifyContent: 'center'
    },
    input_text: {
        height: 50,
    },
    rules_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    button: {
        width: '50%',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto'
    }

})