import React from 'react'
import TextoCentral from '../components/TextoCentral'
import {View,Text} from 'react-native'

export default props => {
    const params = props.route.params || { numero:0 }
    return(
        <TextoCentral corFundo='#9932CD'>
            Tela C = {params.numero || 0}
        </TextoCentral>
    )
}
