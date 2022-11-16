import React from "react";
import { View,Text,StyleSheet ,TouchableOpacity,Alert,ActivityIndicator,TextInput,FlatList ,Image} from "react-native";
import BB from "./BB";


const App = () =>{
  return(
<View style={myStyle.container}>
      <BB/>
  </View>
  
  )
}
const myStyle = StyleSheet.create({
  container:{flex:1,alignItems:'center',
    justifyContent:'center',backgroundColor:'#CFF5E7'},

    
});
export default App;