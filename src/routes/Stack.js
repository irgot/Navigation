import React from 'react'
import {View,Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaC from '../views/TelaC'
import TelaB from '../views/TelaB'
import PassoStack from '../components/PassoStack'


const Stack = createStackNavigator()
export default props => {    
    return(
        <Stack.Navigator initialRouteName="TelaA">
            <Stack.Screen name="TelaA" options={{title:'Informações Iniciais'}}>
                {props=>(<PassoStack {...props} avancar="TelaB">
                            <TelaA></TelaA>
                        </PassoStack>)}
            </Stack.Screen>
            <Stack.Screen name="TelaB">
            {props=>(<PassoStack {...props} avancar="TelaC" voltar={true} avancarParams={{numero:1007}}>
                            <TelaB></TelaB>
                        </PassoStack>)}
            </Stack.Screen>
            <Stack.Screen name="TelaC">
            {props=>(<PassoStack {...props} avancar="TelaC" voltar={true}>
                            <TelaC {...props}></TelaC>
                        </PassoStack>)}
            </Stack.Screen>           
        </Stack.Navigator>
    )
}
