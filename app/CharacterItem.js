import react from 'react';
import { View,Text,Image ,StyleSheet} from 'react-native';

const CharecterItems =() =>{
    return(
        <View>
            <View style={myStyle.viewBB}>
            <Image style={myStyle.imgBB} source={{url:iteamRow.item.img}} />
        <View>
          <Text style={myStyle.nameBB}>{iteamRow.item.name}</Text>
          <Text style={myStyle.nicknameBB}>{iteamRow.item.nickname}</Text>
          <View style={myStyle.line}>
          </View>
          <Text style={myStyle.occupationBB}>{iteamRow.item.occupation}</Text>
        </View>
          </View>
        </View>
    )
}
const myStyle = StyleSheet.create({
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
    viewBB:{
        flexDirection:'row',backgroundColor:'#EFF5F5',margin:10,borderRadius:20,width:'100%',height:160,
      },
});

export default CharecterItems;