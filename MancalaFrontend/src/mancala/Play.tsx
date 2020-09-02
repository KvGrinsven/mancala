import React from "react";
import styled from "styled-components";
import { GameState } from "./gameState";

interface PlayProps {
    gameState: GameState;
    playRecess(pit: number): void;
}

function Kalaha({nrOfStones}) {
	const kalahaStyle = {
		fontSize: "2em",
	    width: "4em",
	    height: "4em",
	    color: "white",
	    background: "red",
	    borderRadius: "50%",
	    margin: 5,
	}
	
	return <button disabled style={kalahaStyle}>{nrOfStones}</button>
}

export function Play({ gameState, playRecess }: PlayProps) {
	
	const recessStyle = {
	    fontSize: "2em",
	    width: "2em",
	    height: "2em",
	    color: "white",
	    background: "green",
	    borderRadius: "50%",
	    margin: 5,
	}
	
	const p1pits = gameState.players[0].pits
	const p2pits = gameState.players[1].pits

	function Board() {
			return <div>
			<section style={{display:"inline", verticalAlign:"bottom"}}>
	           <Kalaha nrOfStones={p2pits[6].nrOfStones}/>
	        </section>
	        
	        <section style={{display:"inline-block", verticalAlign:"middle"}}>
			        {[...p2pits].reverse().filter(p => p.index < 14).map(pit =>
			        	 <button style={recessStyle} key={pit.index} onClick={() => playRecess(pit.index)} type="button">{pit.nrOfStones}</button>)}
					<br/>
			        {p1pits.filter(p => p.index < 7).map(pit =>
			        	 <button style={recessStyle} key={pit.index} onClick={() => playRecess(pit.index)} type="button">{pit.nrOfStones}</button>)}
	
		    </section>
		    
		    <section style={{display:"inline", verticalAlign:"bottom"}}>
		       <Kalaha nrOfStones={p1pits[6].nrOfStones}/>
		    </section>
	    </div>
	}

    return <div>
        <p>{gameState.players[0].name} vs {gameState.players[1].name}</p>
        
       <Board/>
    </div>
}
