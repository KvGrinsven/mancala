import React from "react";
import styled from "styled-components";
import { GameState } from "./gameState";

interface PlayProps {
    gameState: GameState;
    playRecess(pit: number): void;
}

const Recess = styled.button`
	width: 3em;
	height: 3em;
	font-size: 2em;
	color: white;
    background: green;
    border-radius: 50%;
    margin: 5px
`

export function Play({ gameState, playRecess }: PlayProps) {
	const p1pits = gameState.players[0].pits
	const p2pits = gameState.players[1].pits

    return <div>
        <p>{gameState.players[0].name} vs {gameState.players[1].name}</p>
        
        <div>
	        {[...p2pits].reverse().map(pit =>
	        	 <Recess key={pit.index} onClick={() => playRecess(pit.index)} type="button">{pit.nrOfStones}</Recess>)}
        </div>
        
        <div>
	        {p1pits.map(pit =>
	        	 <Recess key={pit.index} onClick={() => playRecess(pit.index)} type="button">{pit.nrOfStones}</Recess>)}
        </div>
    </div>
}
