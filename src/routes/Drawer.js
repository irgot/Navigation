import React from 'react'
import {View,Text} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TelaA from '../views/TelaA'
import TelaC from '../views/TelaC'
import TelaB from '../views/TelaB'
import TelaD from '../views/TelaD'

const Drawer = createDrawerNavigator()
export default props => {
    return(
        <Drawer.Navigator initialRouteName='TelaD'>
            <Drawer.Screen name="TelaA" component={TelaA}></Drawer.Screen>
            <Drawer.Screen name="TelaB" component={TelaB}></Drawer.Screen>
            <Drawer.Screen name="TelaC" component={TelaC}></Drawer.Screen>
            <Drawer.Screen name="TelaD" component={TelaD}></Drawer.Screen>
            
            
        </Drawer.Navigator>
    )
}
