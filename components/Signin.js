import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView 
} from 'react-native';

export default function Signin() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text style={styles.title}>Đăng nhập vào ứng dụng</Text>
      <View style={styles.form_container}>
        <Text>Số điện thoại</Text>
        <ScrollView contentContainerStyle={styles.inputView} keyboardShouldPersistTaps='never' >
          <TextInput
            keyboardType="numeric"
            style={styles.inputText}
            placeholder="Nhập số điện thoại"
            placeholderTextColor="#d4d4d4"
            onChangeText={text => setPhone(text) } />
        </ScrollView >
      </View>
      <View style={styles.form_container}>
        <Text>Mật khẩu</Text>
        <ScrollView contentContainerStyle={styles.inputView} keyboardShouldPersistTaps='never' >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Mật khẩu"
            placeholderTextColor="#d4d4d4"
            onChangeText={text => setPassword(text)} />
        </ScrollView >
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Bạn quên mật khẩu ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Tiếp</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Bạn chưa là thành viên ?</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    // fontWeight: "bold",
    // fontSize:50,
    // color: "#fb5b5a",
    marginBottom: 50
  },
  inputView: {
    // backgroundColor: "#465881",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,    
    justifyContent: "center",
    padding: 10
  },
  inputText: {
    height: 50,
    // color: "white"
  },
  form_container: {
    width: "80%",
    marginBottom: 20
  },
  forgot: {
    // color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    // color: "white"
  }
});
