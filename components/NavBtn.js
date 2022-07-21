import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from "react-native";


const NavBtn = (props) => {
    console.log(props.icone)
    return (
        <TouchableHighlight onPress={props.action}>
            <Image 
                source={{ uri: 'asset:' + props.icone}}
                style={styles.imgIcone}
            />
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    imgIcone: {
        width: 40,
        height: 40,
        margin: 30,
    }
})

export default NavBtn;