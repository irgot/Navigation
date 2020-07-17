import React from 'react'
import {View,Text, Button} from 'react-native'

export default props => {
    return(
        <View style={{flex:1}}>
            <View>
                {props.avancar ? 
                    <Button title='Avançar' onPress={()=>{props.navigation.navigate(props.avancar)}}></Button>
                    :false
                }
            </View>
            <View style={{flex:1}}>                 
                {props.children}
            </View>
        </View>
    )
}
