import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from'react-native-elements';

export default class Readtory extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerStyle}>
            <Header 
      
      centerComponent={{
           text:"STORY HUB",
           style:{color:"fff",
          fontSize:20,
          fontFamily:'Verdana',
          fontWeight:'bold',
          alignContent:'center',
          justifyContent:'space-around',
          alignItems:'center',
          alignSelf:'center'}
          }}   containerStyle={{ width:300,justifyContent:"space-around",backgroundColor:"#ad6969"}}/>
           
            </View>
           <View style={{marginTop:100}}>
           <Text style={styles.displayText}>Lets Read A story</Text>
           </View>
            </View>
        )
    }

}
 const styles=StyleSheet.create(
     {
        container: {
            flex: 1,
            alignItems: 'center',
          
          },
        displayText:{
            fontSize:15,
            textDecorationLine:'underline',
        },
        headerStyle:{
            marginTop:50,
            borderColor:"red",
            borderRadius:100,
        }
     
     }
 )