import React from "react";
import styled from "styled-components";
import { GameState } from "./gameState";

interface PlayProps {
    gameState: GameState;
    playRecess(pit: number): void;
}

const recessStyle = {
    fontSize: "2em",
    width: "2em",
    border: "none",
    height: "2em",
    color: "white",
    boxShadow: "inset 0px 0px 20px 3px #493818",
    background: "#c46e2d",
    borderRadius: "50%",
    margin: 5,
}

const kalahaStyle = {
	boxShadow: "inset 0px 0px 20px 3px #253309",
	background: "#4a601a",
	fontSize: "2em",
    width: "4em",
    height: "4em",
    border: "none",
    color: "white",
    borderRadius: "50%",
    margin: 5,
}

const turnplayerStyle = {
	textAlign: "center" as "center",
	color: "green",
	fontSize: "3em",
}

const opponentStyle = {
	textAlign: "center" as "center",
	color: "red",
	fontSize: "3em",
}

const winnerStyle = {
	textAlign: "center" as "center",
	color: "#d3d639",
	fontSize: "4em",
}

function Kalaha({nrOfStones}) {
	return <button disabled style={kalahaStyle}>{nrOfStones}</button>
}

export function Play({ gameState, playRecess }: PlayProps) {
	
	const p1pits = gameState.players[0].pits
	const p2pits = gameState.players[1].pits

	function Board() {
		return <div style={{textAlign:"center"}}>
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
    
    	{
    		gameState.gameStatus.endOfGame &&
    		<p style={winnerStyle}>{gameState.gameStatus.winner} has won!</p>
    	}
    	{
	    	gameState.players[1].hasTurn
	    	?
	        <p style={turnplayerStyle}>{gameState.players[1].name}
	        </p>
	        :
	        <p style={opponentStyle}>{gameState.players[1].name}</p>
        }
        
       <Board/>
       
    	{
	    	gameState.players[0].hasTurn
	    	?
	        <p style={turnplayerStyle}>{gameState.players[0].name}</p>
	        :
	        <p style={opponentStyle}>{gameState.players[0].name}</p>
        }
    </div>
}
