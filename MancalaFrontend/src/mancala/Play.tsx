import React from "react";
import { GameState } from "./gameState";

interface PlayProps {
    gameState: GameState;
}

export function Play({ gameState }: PlayProps) {
    return <div>
        <p>{gameState.players[0].name} vs {gameState.players[1].name}</p>
        // Just messing around to print something else
        <p>{gameState.gameStatus.endOfGame}</p>
    </div>
}
