import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Button from '../components/Button';
import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField'
export default function Signup() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 0.7, }}>

                    <Text style={styles.Text}>Name</Text>
                    <TextField place={'Name'} />
                    <Text style={styles.Text}>Email</Text>
                    <TextField place={'Email'} />
                    <Text style={styles.Text}>Password</Text>
                    <PasswordField place={'Password'} />
                    <Text style={styles.Text}>Confirm Password</Text>
                    <PasswordField place={'Confirm Password'} />

                </View>

                <TouchableOpacity style={{backgroundColor: "red", width: "80%", height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center',marginTop:30, marginLeft:40}} navigate='Signup' > 
                   <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}> Create account</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={{ paddingLeft: '40%', color: 'grey', marginTop: 10, fontSize: 15 }}>or Sign up with </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
    
    },
    Text: {
        marginTop: 15,
        paddingLeft: 50,
        fontWeight: 'bold',
        fontSize: 18
    }

});
