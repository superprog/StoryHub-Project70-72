import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer}from 'react-navigation';
import {createBottomTabNavigator} from  'react-navigation-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';
export default class App  extends  React.Component {
  render(){
    return (
      <SafeAreaProvider>
        
       <AppContainer/>
      
       </SafeAreaProvider>
    );

  }

}
const TabNaivgator=createBottomTabNavigator({
  Write:{screen:WriteStory},
  Read :{screen:ReadStory},

},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:(()=>{
      const routeName=navigation.state.routeName;
      if(routeName==="Write"){
        return(
          <Image source={require('./assets/write.png')} style={{width:40,height:40}}/>
        )
      }
      else if(routeName==="Read"){
        return(
          <Image source={require('./assets/read.png')} style={{width:40,height:40}}/>
        )
      }
    }),
  })
}

)
const AppContainer=createAppContainer(TabNaivgator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
