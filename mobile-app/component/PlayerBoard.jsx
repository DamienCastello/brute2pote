import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function playerBoard(props) {
    useEffect(() => {
        if(props.player.id === 1) {
            const intervalPlayer1 = setInterval(() => {
                console.log(`Player ${props.player.id.toString()} hit !`);
                props.hit(props.player)
              }, 1000);
              return () => {
                  clearInterval(intervalPlayer1);
              }; 
        } else if (props.player.id === 2) {
            const intervalPlayer2 = setInterval(() => {
                console.log(`Player ${props.player.id.toString()} hit !`);
                props.hit(props.player)
              }, 1000);
              return () => {
                  clearInterval(intervalPlayer2);
              }; 
        }

      }, [props.player]);


    return (
        <View>
            <Text>PLAYER {props.player.id}</Text>
            <Text>HP : {props.player.vitality}</Text>
            <Text>FORCE : {props.player.strength}</Text>
        </View>
    )
}
