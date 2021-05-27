import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity } from 'react-native';
import {Header} from'react-native-elements';

export default class WriteStory extends React.Component{
    render(){
        return(
            <ScrollView>
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
                }}   containerStyle={{ width:400,justifyContent:"space-around",backgroundColor:"#ad6969"}}/>
             </View>
             <View>
                 <TextInput style={[styles.inputBox,{height:50,marginTop:50}]} placeholder="Title"/>
           </View>
           <View>
                 <TextInput style={[styles.inputBox,{height:50,marginTop:10}]} placeholder="Author"/>
           </View>
           <View>
                 <TextInput 
                 style={[styles.inputBox,{height:300,marginTop:10}]} 
                 placeholder="Write your story here"
                 multiline='true'
                 />
           </View>
           <View style={{marginTop:10}}>
                <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.buttonText}> SUBMIT</Text>
                </TouchableOpacity>
           </View>
            </View>
            </ScrollView>
        )
    }

}


const styles=StyleSheet.create(
    {
       container: {
           flex: 1,
           alignItems: 'center',
   
         
         },
         buttonText:{
            fontSize:15,
            textAlign:'center',
            fontWeight:'bold',

        },
         headerStyle:{
             marginTop:20,
             borderColor:"red",
             borderRadius:100,
         },
         inputBox:{
            width:400,
            height:40,
            borderWidth:1.5,
            borderRingWidth:0,
            fontSize:20,
        },
        submitButton:{
            backgroundColor: '#ba8787',
            width: 100,
            borderWidth: 1.5,
       

         
        },
       
    
    }
)