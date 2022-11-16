import React,{useState} from "react";
import { View,Text,StyleSheet ,TouchableOpacity,Alert,ActivityIndicator,TextInput,FlatList ,Image} from "react-native";
const BB = () =>{

    const [searchName,setSearchName] = useState('characters');
    const [isLoading,setLoading] =useState(false);
    const [result,setResult]= useState([]);
  
    const doSmothing = async() =>{
      setLoading(true);
      const api = `https://www.breakingbadapi.com/api/${searchName}`;
      const response = await fetch(api,{
        method: 'get'
      });
      const data = await response.json();
      setResult(data);
      setLoading(false);
    }
  
  
    return(
      <View style={myStyle.container}>
        <View style={{width:'90%',flexDirection:'row'}}>
          <View style={{width:'75%',justifyContent:'center'}}>
  
            <TextInput
              style={{
                width:'98%',
                paddingVertical:10,
                backgroundColor:'#fff'
              }}
              value={searchName}
              onChangeText={x => {setSearchName(x)}}
              keyboardType="default"
              placeholder="Type Search ..."
              autoCapitalize='none'
              secureTextEntry={false}//password =>false show password 
            />
  
          </View>
          <View style={{width:'25%',justifyContent:'center', alignItems:'center'}}>
          {
          isLoading ? (      <ActivityIndicator size='large' color ='#8EE3EF' /> ) : 
          (<TouchableOpacity style={myStyle.btn} onPress={doSmothing}>
            <Text style={myStyle.btntext}>Search</Text>
          </TouchableOpacity>)
        }
          </View>
        </View>
        <View style={{width:'100%',height:'90%'}}>
          {result?(
          <FlatList
          data={result}
          keyExtractor={item => item.char_id}
          renderItem={iteamRow => 
          <View style={myStyle.viewBB}>
            <Image style={myStyle.imgBB} source={{url:iteamRow.item.img}} />
        <View style={myStyle.viewBB2}>
          <Text style={myStyle.nameBB}>{iteamRow.item.name}</Text>
          <Text style={myStyle.nicknameBB}>{iteamRow.item.nickname}</Text>
          <View style={myStyle.line}>
          </View>
          <Text style={myStyle.occupationBB}>{iteamRow.item.occupation}</Text>
        </View>
          </View>
          }
          />
          ) :(
            <Text> No Result</Text>
          )
        }
          
        </View>
      </View>
    )
  }
  const myStyle = StyleSheet.create({
    container:{flex:1,alignItems:'center',
    justifyContent:'center',backgroundColor:'#CFF5E7',padding:30},

    btn:{width:'100%', paddingVertical:14, alignItems:'center',
  backgroundColor:'#8EE3EF',borderRadius:14},

    btntext:{ color:'#254E70', fontWeight:'700',},
    viewBB:{
      flexDirection:'row',backgroundColor:'#EFF5F5',margin:10,borderRadius:20,width:'100%',height:160,
    },
    imgBB:{
      width:100,height:100,margin:10,height:140
    },
    nameBB:{
      fontSize:20,fontWeight:'800', padding:5,color:'green',marginTop:10
    },
    nicknameBB:{
      fontSize:20,fontWeight:'800', padding:5,marginTop:10
    },
    line:{
      backgroundColor:'#B2B2B2',height:1
    },
    occupationBB:{
      fontSize:15,fontWeight:'600',marginTop:10,backgroundColor:'#EFF5F5'
    },
   
});
   export default BB;