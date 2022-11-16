import react from 'react';
import { View,Text,Image ,StyleSheet} from 'react-native';

const CharecterItems =(props) =>{
  const status = props.charecter.status;
  let bg = '#000000';

  switch (status) {
    case 'Alive':
      bg='green'
      break;
    case 'Deceased':
      bg='red'
      break;
    case 'Presumed dead':
      bg='yellow'      
      break;
    
    default:
      break;
  }
    return(
          <View style={myStyle.viewBB}>
            <View style={{width:'3%',height:'100%',backgroundColor:bg}}></View>
              <Image style={myStyle.imgBB} source={{url:props.charecter.img}} />
              <View>
                <Text style={myStyle.nameBB}>{props.charecter.name}</Text>
                <Text style={myStyle.nicknameBB}>{props.charecter.nickname}</Text>
                <View style={myStyle.line}></View>
                <Text style={myStyle.occupationBB}>{props.charecter.occupation}</Text>
              </View>
          </View>
    )
}
const myStyle = StyleSheet.create({
    imgBB:{
        width:'30%',height:130,height:'100%'
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
        fontSize:15,fontWeight:'600',marginTop:10,backgroundColor:'#EFF5F5',width:"70%"
      },
    viewBB:{
        flexDirection:'row',backgroundColor:'#EFF5F5',margin:10,borderRadius:20,width:'100%',height:160,
      },
});

export default CharecterItems;