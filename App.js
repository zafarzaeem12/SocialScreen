/* eslint-disable prettier/prettier */

import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import React from 'react'
import Splashscreen from './components/Splash/Splashscreen';
import PreLogin from './components/Auth/PreLogin';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgetpassword from './components/Auth/Forgetpassword';
import Setting from './components/Home/Setting';
import Verification from './components/Auth/Verification';
import Resetpassword from './components/Auth/Resetpassword';
import Calender from './components/Home/Calender/Calender';
import Home from './components/Home/Home/Home';
import Poll from './components/Home/Poll/Poll';
import Profile from './components/Home/Profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Create from './components/Home/Activity/Create';
const App = () => {

  const Stack = createNativeStackNavigator();


  const HomeTabScreen = ({navigation}) => {
    const _renderIcon = (routeName, selectedTab) => {
      let icon = '';

      switch (routeName) {
        case 'Home':
          icon = 'home';
          break;
        case 'Calender':
          icon = 'calendar-alt';
          break;
        case 'Poll':
          icon = 'poll';
          break;
        case 'Profile':
          icon = 'user';
          break;
      }
      return(
        <>
       
          <FontAwesome5
            name={icon}
            size={30}
            color={routeName === selectedTab ? 'white' : '#ffffff'}
          />
        

        </>
      )
    }

    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
      return (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
          <View style={{flex:1,paddingTop:10}}>
              {_renderIcon(routeName, selectedTab)}
          </View>
          
          <View style={{padding:10}}>
              <Text>{routeName}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    
    return (
      <>

        <CurvedBottomBar.Navigator
              strokeWidth={2}
              strokeColor="#DDDDDD"
              height={80}
              circleWidth={62}
              bgColor="#F28C28"
              initialRouteName="Home"
              borderTopLeftRight
              renderCircle={({ selectedTab, navigate }) => (
                <Animated.View style={styles.btnCircle}>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                    }}
                    onPress={() => navigation.navigate('Create')}>
                    <Ionicons name={'add'} color="white" size={40} />
                  </TouchableOpacity>
                </Animated.View>
              )}
              tabBar={renderTabBar }
              >
    
              <CurvedBottomBar.Screen
                name="Home"
                options={{ headerShown:false }}
                position="LEFT"
                component={Home}
              />

              <CurvedBottomBar.Screen
              options={{ headerShown:false }}
                name="Calender"
                position="LEFT"
                component={Calender}
              />

              <CurvedBottomBar.Screen
              options={{ headerShown:false }}
                name="Create"
                position="CENTER"
                component={Create}
              />

              <CurvedBottomBar.Screen
              options={{ headerShown:false }}
                name="Poll"
                component={Poll}
                position="RIGHT"
              />

              <CurvedBottomBar.Screen
              options={{ headerShown:false }}
                name="Profile"
                component={Profile}
                position="RIGHT"
              />
            </CurvedBottomBar.Navigator>

        
      </>

    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splashscreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splashscreen' component={Splashscreen} />
        <Stack.Screen name='PreLogin' component={PreLogin} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Forgetpassword' component={Forgetpassword} />
        <Stack.Screen name='Verification' component={Verification} />
        <Stack.Screen name='Resetpassword' component={Resetpassword} />
        <Stack.Screen name='Setting' component={Setting} />
        <Stack.Screen name='Home' component={HomeTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

  btnCircle: {
    width: 70,
    height: 70,
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F28C28',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 25,
  },
})