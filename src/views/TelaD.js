import React from 'react'
import {View,Text, Button} from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                <Button title="Abrir" onPress={()=>{props.navigation.openDrawer()
                setTimeout(()=>{
                    props.navigation.closeDrawer()
                    setInterval(()=>{
                        props.navigation.toggleDrawer()
                    },1000)
                },3000)
                }}></Button>
                <Button title="Fechar" onPress={()=>props.navigation.closeDrawer()}></Button>
            </View>
        <TextoCentral corFundo="#90d500" corTexto="#000000">
            Tela D
        </TextoCentral>
        </View>
        
    )
}
