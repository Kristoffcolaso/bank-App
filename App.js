import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation-tabs';

import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import Drawer from './components/drawer';
export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const switchNavigator = createSwitchNavigator({
  Withdrawal: {screen: TransactionScreen},
  Drawer:{screen: Drawer},
  Deposit: {screen: SearchScreen},  
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Withdrawal"){
        return(
          <Image
          source={require("./assets/withdrawal.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Deposit"){
        return(
          <Image
          source={require("./assets/deposit.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
