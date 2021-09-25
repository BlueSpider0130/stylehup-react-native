import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

import StackNavigationData from './stackNavigationData';

const Stack = createStackNavigator();

export default function NavigatorView(props) {
  // if (authState.isLoggedIn || authState.hasSkippedLogin) {
  //     return <AppNavigator />;
  // }
  // return <AuthScreen />;

  const headerLeftComponentMenu = () => (
    <TouchableOpacity
      onPress={() => props.navigation.toggleDrawer()}
      style={{
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
    >
      <Image
        source={require('../../../assets/images/drawer/menu.png')}
        resizeMode="contain"
        style={{
            // height: 50,
            width: 50
          }}
      />
    </TouchableOpacity>    
    )

  const headerRightComponent = () => 
  (
    <TouchableOpacity
      // onPress={}
      style={{
        backgroundColor: '#94205B',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 4
      }}
    >
      <Text style={{
        fontSize: 20,
        color: '#fff'
      }}
      >
        LOGIN
      </Text>
    </TouchableOpacity> 
  )
  

  return (
    <Stack.Navigator>
      {StackNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx+1}`}
          name={item.name} 
          component={item.component} 
          options={{
            headerLeft: item.headerLeft || headerLeftComponentMenu,
            headerRight: headerRightComponent,
            headerBackground: () => (
              <Image style={styles.headerImage} source={item.headerBackground.source} />
            ),
            headerTitleStyle: item.headerTitleStyle,
          }} 
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: `${100  }%`,
    height: Header.height,
  },
});
