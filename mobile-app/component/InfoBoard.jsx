import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import PlayerBoard from './PlayerBoard'
import data from '../mock/players'

export default function infoBoard() {
    const [player1, setplayer1] = useState(data.players[0])
    const [player2, setplayer2] = useState(data.players[1])
    const [arena, setarena] = useState([data.players[0], data.players[1]])

    useEffect(() => {
        console.log("arena : ", arena)
        if(player1.vitality < 1) {
            console.log("player 1 win !")
        } 
        if(player2.vitality < 1) {
            console.log("player 2 win !")
        }
    }, [player1, player2]);

    const hit = (player) => {
        if(player.id === 1){
            setplayer2({ ...player2, vitality: player2.vitality-1 })
            
            console.log("CHECK P2 : ", player2)
        } else {
            setplayer1({ ...player1, vitality: player1.vitality-1 })
            console.log("CHECK P1 : ", player1)
            
        }
    }

    return (
        <View>
            { arena.map((player) => {
                return <PlayerBoard player={player} key={player.id} hit={hit} />
            }) }
        </View>
    )
}

