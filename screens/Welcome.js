import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput , Image} from 'react-native';
import Button from '../components/Button';
import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField';
import image from '../assets/logo.png'

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style ={{ marginTop: 150, marginBottom: 50, width:'68%',height:50 ,borderRadius:10 }} source={image} ></Image>
            {/* <Text style={{ fontSize: 30, marginTop: 150, marginBottom: 50, }}> FOODIE MOODIE</Text> */}
            <View style={{ width: '100%', marginBottom: 50 }}>
                <TextField place={ 'E-mail'}  >
                   
                     </TextField>
            </View>
            <PasswordField place={'Password'}></PasswordField>
            <TouchableOpacity style={{ marginTop: 20 }}>
                <Text style={{ color: 'grey', fontSize: 12, marginLeft: 180 }}> Forget password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: "red", width: "80%", height: 60, marginBottom: 10,
                borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 12
            }} onPress={() => { navigation.navigate('Menu') }} >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}> Login  </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.navigate("Signup") }}>
                <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15 }}> or Signup with</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                flex: 0.7, justifyContent: 'flex-end',
                alignItems: 'baseline',
            }}  >

                <Text style={{ color: 'grey', fontSize: 15, }}>New on foodie moodie? Signup now </Text>
            </TouchableOpacity>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})