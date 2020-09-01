import React from "react";
import styled from "styled-components";
import { GameState } from "./gameState";

interface PlayProps {
    gameState: GameState;
    playRecess(pit: number): void;
}


export function Play({ gameState, playRecess }: PlayProps) {
	const p1pits = gameState.players[0].pits
	const p2pits = gameState.players[1].pits

    return <div>
        <p>{gameState.players[0].name} vs {gameState.players[1].name}</p>
        
        <div>
	        {[...p2pits].reverse().map(pit =>
	        	 <button onClick={() => playRecess(pit.index)} type="button">{pit.nrOfStones}</button>)}
        </div>
        
        <div>
	        {p1pits.map(pit =>
	        	 <button onClick={() =>playRecess(pit.index)} type="button">{pit.nrOfStones}</button>)}
        </div>
    </div>
}
