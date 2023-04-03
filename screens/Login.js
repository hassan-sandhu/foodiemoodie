import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput ,ImageBackground} from 'react-native';
import Button from '../components/Button';
import backgroundimg from '../assets/login_splash_backdrop.jpg'

export default function Login({ navigation }) {
    return (
      
        <View style={styles.container}>
            <ImageBackground style={{ width:'100%',flex:1}} source={backgroundimg}>
            <View style={{ flex:0.7 ,justifyContent:'flex-end'}}>
            <Text style={ styles.text}> Enjoy your fast food only {'\n'} in foodie moodie</Text> 
            <Text style={{marginLeft:10, color:'white',fontWeight:'bold'}}>Here is a place to buy food you want</Text>
            
            </View>
         
            <View style={{  flex:0.2,width:'100%', marginTop:20, justifyContent:'center',alignItems:'center',  }}>
            
            <TouchableOpacity style={{ backgroundColor: "red", width: "80%", height: 60,marginBottom:10, 
            borderRadius: 30, justifyContent:'center',alignItems:'center'  }} onPress={()=>{navigation.navigate("Welcome")}}>
             <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20  }}> Login</Text>
            </TouchableOpacity>
            <Button name={'Sign up'} navigat={() => navigation.navigate('Signup')} />
            </View>
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
       //  alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:28,
        marginLeft:5,
        fontStyle:'italic'
        ,color:'white'

        
        
        
        
    }

});
