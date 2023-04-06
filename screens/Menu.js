import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, FlatList, Image, ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import TextField from "../components/TextField";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ant from 'react-native-vector-icons/AntDesign'
import Anti from 'react-native-vector-icons/AntDesign'
import app from "../firebase";
import { getDatabase, ref, onValue} from "firebase/database";


import { useEffect, useState } from "react";

export default function Menu({ navigation,  }) {
  const[ bestsell, setbestsell]= useState([])

  useEffect(()=>{
    const db = getDatabase(app);
    const fastfoodRef = ref(db, 'fastfood');
    onValue(fastfoodRef, (snapshot) => {
      const data = snapshot.val(); 
      setbestsell(data) 
      console.log(bestsell)
    });

  },[])


  const[food,setFood] = useState([{
    id: 1,
    name: 'Zinger Burger ',
    price:'RS 1500',
    mg: require("../assets/big_mac.png"),
    fav:false,
    star:false
  },
  {
    id: 2,
    name: 'MAD Burger ',
    price:'RS 1000',
    mg: require('../assets/big_mac.png'),
    fav:false,
    star:false
  },
  {
    id: 3,
    name: 'DSA Burger ',
    price:'RS 1700',
    mg: require('../assets/big_mac.png'),
    fav:false,
    star:false
  },
  {
    id: 4,
    name: 'DCCN Burger ',
    price:'RS 500',
    mg: require('../assets/big_mac.png'),
    fav:false,
    star:false
  },
  {
    id: 5,
    name: 'OOOOP Burger ',
    price: 'RS 1700',
    mg: require('../assets/big_mac.png'),
    fav:false,
    star:false
  },
  
 
  ])
  
  const user = [
    {
      // id: 1,
      name: 'Burger',
      img: require("../assets/burger.png")
    },
    {
      // id: 1,
      name: 'kebab',
      img: require("../assets/kebab.png")
    },
    {
      // id: 1,
      name: 'shawarma',
      img: require("../assets/shwarma.png")
    },
    {
      // id: 1,
      name: 'fries',
      img: require("../assets/burger.png")
    },
    {
      // id: 1,
      name: 'pizza',
      img: require("../assets/shwarma.png")
    },
  ]
  


  return (
    <View style={styles.container}>
        <ScrollView>
      <View style={{ flex: 0.2, paddingTop: 50, marginBottom:30 }}>
        
        <View style={{ flex: 0.55, justifyContent: 'flex-end', marginBottom:17 }}>
          <Text style={{ fontWeight: 'bold', marginLeft: 20, marginBottom: 16,marginTop:7 }}>
            Hello Hassan Khalid
          </Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginBottom: 10 }}>
            Choose your favourite food
          </Text>
        </View>
        <View style={{ flex: 0.45, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'center', borderRadius: 20, alignItems: 'center', backgroundColor: 'white', height: 50, marginLeft: 10 }}>
            <EvilIcons name="search" size={30} style={{ marginLeft: 20 }}></EvilIcons>
            <TextInput placeholder="Search your favourite food" style={{
              width: '90%', borderRadius: 20, height: '100%',
              paddingLeft: 10
            }}>

            </TextInput>

          </View>
          <TouchableOpacity>
            <AntDesign name="filter" size={35} color={'darkslateblue'} style={{}}></AntDesign>
          </TouchableOpacity>
        </View>
        
      </View>
      

      <View style={{ flex: 0.18, marginBottom:23 }}>
        <View style={{ flex: 0.3, flexDirection: 'row',marginBottom:3,alignItems: "center", justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>   Food category</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.7 ,}}>
          
          <FlatList
            data={user}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity>
              <View style={{
                backgroundColor: 'white', width: 130, height: 60, margin: 8, flexDirection: 'row'
                , justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginTop: 15
              }}>
                <Image style={{ width: 50, height: 40 }} source={item.img} />
                <Text style={{ fontWeight: 'bold' }}> {item.name}</Text>
              </View>
              </TouchableOpacity>
            )}

          />


        </View>
      </View>

      <View style={{  flex: 0.36 , marginBottom:27}}>
        <View style={{ flex: 0.28, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft:8 }}> Popular food</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}> See all</Text>
        </View>
        <View style={{flex:0.72, marginTop:27}}>
          <FlatList
          data={food}
          horizontal={true}
          renderItem={({item})=>(
          <TouchableOpacity>
            <View style={{  backgroundColor: 'white', width: 145, height: 170, margin: 8
            , justifyContent: 'center', alignItems: 'center', marginTop: 2 ,borderRadius:15}}>
              <View style={{ flexDirection:'row',justifyContent:'space-between', width:120}}>
               <TouchableOpacity onPress={()=>{
                let items = food.map((ele)=>{
                  if(ele== item){
                    ele.star=!ele.star;
                  }
                  return ele;
                })
                setFood(items)
               }}>
            
            <Anti name="staro" size={20} color={item.star ? 'orange' :'blue' } style={{fontWeight:'bold' }}></Anti>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {
            let items = food.map((elem)=>{
              if(elem == item){
                elem.fav = !elem.fav;
              }
              return elem;
            })
            setFood(items)
            }}>
          <Ant name="heart" size={20} color={item.fav ? 'red':'lightgrey'}  style={{ }}></Ant>
          </TouchableOpacity>
          </View >
            <Image style={{ width: 80, height: 80,margin:9,  }} source={item.mg} />
            <Text style={{ fontWeight: 'bold' }}> {item.name}</Text>
            <Text style={{ fontSize:12,color:'grey' }}> {item.price}</Text>
            </View>
            </TouchableOpacity>
          )
        }
          
          />
          
        </View>
        
      </View>

      <View style={{ flex: 0.27, height: 200 }}>
         <View style={{flex:0.27, }}>
          <Text style={{fontSize:19, fontWeight:"bold",marginLeft:10}}> Best Seller </Text>
         </View>
         
         <View style={{flex:0.73}}>
         <FlatList
           data={bestsell}
           horizontal={true}
           renderItem={({item})=>(
             <TouchableOpacity>
             <View style={{
               backgroundColor: 'white', width: 280, height: 100, margin: 8, flexDirection: 'row'
               , borderRadius: 10, marginTop: 15,alignItems:'center'
             }}>
              <Image style={{width: 90, height: 90 ,margin:15, borderRadius:7, borderColor:'black',borderWidth:3}} source={{uri:item.img}}/>
              
              <View style={{ justifyContent:"center",alignItems:'center'}}>
              <Text style={{ fontWeight:'bold', fontSize:14}}>{item.description} </Text>
              <Text style={{ color:'grey'}}>{item.price} </Text>
              </View>
              
              <Ant name="heart" size={20} color= 'red' style={{ position:'absolute',top:5,right:10 }}></Ant>
              
             </View>
             </TouchableOpacity>
           )}
           
            
          /> 
           
          </View>
           
      </View>
</ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: '#fff',
    //  alignItems: 'center',
    // justifyContent: 'center',

  }
})

 