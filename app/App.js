import React,{useState} from "react";
import { View,Text,StyleSheet ,TouchableOpacity,Alert,ActivityIndicator,TextInput,FlatList ,Image} from "react-native";
import CharecterItems from "./CharacterItem";
const App = () =>{

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
            <CharecterItems  charecter ={iteamRow.item}/>
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
    
    
   
});
   export default App;