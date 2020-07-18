import React from 'react'
import {View,Text, Button} from 'react-native'

export default props => {
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                {props.voltar ? 
                    <Button title='Voltar' onPress={()=>{props.navigation.goBack()}} style={{flex:1}}></Button>
                    :false
                }
                {props.avancar ? 
                    <Button title='Avançar' onPress={()=>{props.navigation.push(props.avancar, props.avancarParams)}} style={{flex:1}}></Button>
                    :false
                }
            </View>
            <View style={{flex:1}}>                 
                {props.children}
            </View>
        </View>
    )
}
