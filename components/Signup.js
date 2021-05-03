import React, {useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    CheckBox 
} from 'react-native'

export default function Signup() {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View>
            <Text>Nhập số điện thoại</Text>
            <Text>Số điện thoại này sẽ dùng để đăng nhập, tích lũy điểm và nhận các thông tin về khuyến mãi, chăm sóc khách hàng từ AIiO Loyalty</Text>
            <View>
                <Text>Số điện thoại</Text>
                <ScrollView>
                    <TextInput
                        placeholder="Nhập số điện thoại"
                        keyboardType="numeric"
                    />
                </ScrollView>
            </View>
            <View>
                <Text>Mật khẩu</Text>
                <ScrollView>
                    <TextInput
                        placeholder="Mật khẩu"
                    />
                </ScrollView>
            </View>
            <View>
                <CheckBox />
                <Text>Tôi Đồng ý nhận thông tin khuyến mãi, khảo sát, quảng cáo và chăm sóc khách hàng của AIiO Loyalty</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})